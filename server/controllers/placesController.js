import { connectDB } from "../utils/db";
import PlaceModel from "../models/placeModel";
import BookingModel from "../models/bookingModel";

// import UserModel from "../models/userModel";
import ReviewsModel from "../models/reviewsModel";

import {
  checkDatesAvilablity,
  checkThisMoth,
  getThisMonthArray,
} from "../utils/helpers/datesHelpers";

export const getAll = async (req, res) => {
  //where p is the page number and s is the size or the number of element per page
  const {
    p = 0,
    s = 50,
    startDate = null,
    endDate = null,
    city = null,
  } = req.query;

  await connectDB();
  const placesToRemove = [];

  // only if the user searched by time available:: Logic for finding the places with booking that intersect with the time interval user intered
  //so we can remove them from the list of places sent back to the user

  if (startDate && endDate) {
    await connectDB();
    const BookingIntersecting = await BookingModel.find({
      $or: [
        {
          $and: [
            { startDateInSec: { $gte: startDate } },
            { startDateInSec: { $lt: endDate } },
          ],
        },
        {
          $and: [
            { endDateInSec: { $lte: endDate } },
            { endDateInSec: { $gt: startDate } },
          ],
        },
        {
          $and: [
            { startDateInSec: { $lte: startDate } },
            { endDateInSec: { $gt: startDate } },
          ],
        },
        {
          $and: [
            { startDateInSec: { $lt: endDate } },
            { endDateInSec: { $gte: endDate } },
          ],
        },
      ],
    });

    BookingIntersecting.map((booking) => {
      placesToRemove.push(booking?.placeBooked?._id);
    });
  }

  ///
  const paramsToFilter = city ? { city: city } : {};

  //quering the data from the db with pagination logic
  const allPlaces = await PlaceModel.find({
    $and: [{ _id: { $nin: placesToRemove } }, paramsToFilter],
  })
    .skip(p * s)
    .limit(s)
    .catch((err) => {
      res.status(400).json({ err });
    });

  const totalCount = await PlaceModel.find({
    $and: [{ _id: { $nin: placesToRemove } }, paramsToFilter],
  })
  ?.count();

  // return the res statment to avoid stalled requests
  return res
    .status(200)
    .json({ data: allPlaces, totalCount: totalCount, pageNum: p });
};

//create API
export const createPlace = async (req, res) => {
  const { data } = req.body;
  //data can be one object or a list of objects and both cases will work
  //send list of objects when you need to bulk insert

  await connectDB();

  const newFarms = await PlaceModel.create(data).catch((err) => {
    res.status(400).json({ err });
  });
  return res.status(200).json(newFarms);
};

//byID API
export const getById = async (req, res) => {
  const { placeid } = req.query;

  await connectDB();

  const place = await PlaceModel.findOne({ _id: placeid })
    .populate({
      path: "placeReviews",
      populate: {
        path: "reviewUser",
      },
    })

    .populate("bookingList")
    .catch((err) => {
      return res.status(400).json({ err });
    });

  return res.status(200).json(place);
};

//update API
export const updateById = async (req, res) => {
  const { placeid } = req.query;
  const { data } = req.body;

  await connectDB();

  const updatedPlace = await PlaceModel.findOneAndUpdate(
    { _id: placeid },
    data
  ).catch((err) => {
    res.status(400).json({ err });
  });

  return res.status(200).json(updatedPlace);
};

//delete API
export const deleteById = async (req, res) => {
  const { placeid } = req.query;

  await connectDB();

  await PlaceModel.findOneAndDelete({
    _id: placeid,
  }).catch((err) => {
    res.status(400).json({ err });
  });

  return res.status(200).json(placeid);
};

///APIs for availablety controll

export const getPlaceAvailablityById = async (req, res) => {
  const { placeId } = req.query;

  await connectDB();

  const place = await PlaceModel.findOne({ _id: placeId })
    .populate("bookingList")
    .catch((err) => {
      return res.status(400).json({ err });
    });

  const placeBookingList = place?.bookingList;
  const availablity = await checkThisMoth(placeBookingList);

  return res.status(200).json({ data: availablity });
};

///Api for user booking
export const getAllUserBooking = async (req, res) => {
  //where p is the page number and s is the size or the number of element per page
  const { userId } = req.query;

  await connectDB();

  const userBooking = await BookingModel.find({ customer: userId });

  //quering the data from the db with pagination logic

  const totalCount = await BookingModel.find({ customer: userId }).count();

  // return the res statment to avoid stalled requests
  return res.status(200).json({ data: userBooking, totalCount: totalCount });
};
