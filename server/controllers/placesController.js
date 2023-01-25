import { connectDB } from "../utils/db";
import PlaceModel from "../models/placeModel";
import BookingModel from "../models/bookingModel";

export const getAll = async (req, res) => {
  //where p is the page number and s is the size or the number of element per page
  const { p = 0, s = 50 } = req.query;
  const { start, end } = req.body;

  await connectDB();

  // only if the user searched by time available:: Logic for finding the places with booking that intersect with the time interval user intered
  //so we can remove them from the list of places sent back to the user
  const BookingIntersecting = await BookingModel.find({
    $or: [
      {
        $and: [
          { startDateInSec: { $gte: start } },
          { startDateInSec: { $lt: end } },
        ],
      },
      {
        $and: [
          { endDateInSec: { $lte: end } },
          { endDateInSec: { $gt: start } },
        ],
      },
      {
        $and: [
          { startDateInSec: { $lte: start } },
          { endDateInSec: { $gt: start } },
        ],
      },
      {
        $and: [
          { startDateInSec: { $lt: end } },
          { endDateInSec: { $gte: end } },
        ],
      },
    ],
  })
    .skip(p * s)
    .limit(s)
    .catch((err) => {
      res.status(400).json({ err });
    });

  const placesToRemove = [];
  BookingIntersecting.map((booking) => {
    placesToRemove.push(booking?.placeBooked?._id);
  });

  ///

  //quering the data from the db with pagination logic
  const allPlaces = await PlaceModel.find({ _id: { $nin: placesToRemove } })
    .skip(p * s)
    .limit(s)
    .catch((err) => {
      res.status(400).json({ err });
    });

  const totalCount = await PlaceModel.count();

  console.log(placesToRemove);
  // return the res statment to avoid stalled requests
  return res
    .status(200)
    .json({ data: allPlaces, totalCount: totalCount, pageNum: p });
};

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

export const getById = async (req, res) => {
  const { placeid } = req.query;

  await connectDB();

  const place = await PlaceModel.find({ _id: placeid }).catch((err) => {
    res.status(400).json({ err });
  });

  return res.status(200).json(place);
};

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
