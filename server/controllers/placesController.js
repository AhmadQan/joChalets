import { connectDB } from "../utils/db";
import PlaceModel from "../models/placeModel";

export const getAll = async (req, res) => {
  //where p is the page number and s is the size or the number of element per page
  const { p = 0, s = 50 } = req.query;

  await connectDB();

  //quering the data from the db with pagination logic
  const allPlaces = await PlaceModel.find()
    .skip(p * s)
    .limit(s)
    .catch((err) => {
      res.status(400).json({ err });
    });

  const totalCount = await PlaceModel.count();

  // return the res statment to avoid stalled requests
  return res
    .status(200)
    .json({ data: allPlaces, totalCount: totalCount, pageNum: p });
};

export const createPlace = async (req, res) => {
  const data = req.body;
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
