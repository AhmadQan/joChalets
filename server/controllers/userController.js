import { connectDB } from "../utils/db";
import UserModel from "../models/userModel";

export const getAll = async (req, res) => {
  //where p is the page number and s is the size or the number of element per page
  const { p = 0, s = 50 } = req.query;

  await connectDB();

  //quering the data from the db with pagination logic
  const allUsers = await UserModel.find()
    .skip(p * s)
    .limit(s)
    .catch((err) => {
      res.status(400).json({ err });
    });

  const totalCount = await UserModel.count();

  // return the res statment to avoid stalled requests
  return res
    .status(200)
    .json({ data: allUsers, totalCount: totalCount, pageNum: p });
};

export const createUser = async (req, res) => {
  const { data } = req.body;
  //data can be one object or a list of objects and both cases will work
  //send list of objects when you need to bulk insert

  await connectDB();

  const newUser = await UserModel.create({
    name: data.name,
    email: data.email,
  }).catch((err) => {
    res.status(400).json({ err });
  });
  return res.status(200).json(newUser);
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
