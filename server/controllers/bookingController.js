import { connectDB } from "../utils/db";
import BookingModel from "../models/bookingModel";
import PlaceModel from "../models/placeModel";

export const getAll = async (req, res) => {
  //where p is the page number and s is the size or the number of element per page
  const { p = 0, s = 50 } = req.query;

  await connectDB();

  const allBooking = await BookingModel.find()
    // .populate("placeBooked", "name")
    .populate("customer")
    .skip(p * s)
    .limit(s)
    .catch((err) => {
      res.status(400).json({ err });
    });

  const totalCount = await BookingModel.count();

  // return the res statment to avoid stalled requests
  return res
    .status(200)
    .json({ data: allBooking, totalCount: totalCount, pageNum: p });
};

export const createBooking = async (req, res) => {
  const { data } = req.body;

  //data can be one object or a list of objects and both cases will work
  //send list of objects when you need to bulk insert

  await connectDB();

  const newBooking = await BookingModel.create(data).catch((err) => {
    res.status(400).json({ err });
  });

  await PlaceModel.findByIdAndUpdate(
    data.placeBooked,
    { $push: { bookingList: newBooking._id } },
    { new: true, useFindAndModify: false }
  );

  return res.status(200).json(newBooking);
};

export const getById = async (req, res) => {
  const { bookingId } = req.query;

  await connectDB();

  const booking = await BookingModel.find({ _id: bookingId }).catch((err) => {
    res.status(400).json({ err });
  });

  return res.status(200).json(booking);
};

export const updateById = async (req, res) => {
  const { bookingId } = req.query;

  const { data } = req.body;
  console.log("backEnd", req.body);

  await connectDB();

  const updatedBooking = await BookingModel.findOneAndUpdate(
    { _id: bookingId },
    data
  ).catch((err) => {
    res.status(400).json({ err });
  });

  return res.status(200).json(updatedBooking);
};

export const deleteById = async (req, res) => {
  const { bookingId } = req.query;

  await connectDB();

  await BookingModel.findOneAndDelete({
    _id: bookingId,
  }).catch((err) => {
    res.status(400).json({ err });
  });

  return res.status(200).json(bookingId);
};

// APIs relating to place Details

export const getBookingByPlaceId = async (req, res) => {
  const { placeId } = req.query;

  const { data } = req.body;

  await connectDB();

  const allPlaceBooking = await BookingModel.find({
    placeBooked: placeId,
    // $or: [],
  }).catch((err) => {
    res.status(400).json({ err });
  });

  return res.status(200).json(allPlaceBooking);
};
