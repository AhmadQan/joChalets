import { connectDB } from "../utils/db";
import ReviewsModel from "../models/reviewsModel";
import PlaceModel from "../models/placeModel";

export const getAll = async (req, res) => {
  //where p is the page number and s is the size or the number of element per page
  const { p = 0, s = 50 } = req.query;

  await connectDB();

  const allReviews = await ReviewsModel.find()
    // .populate("placeBooked", "name")
    .populate("reviewUser")
    .skip(p * s)
    .limit(s)
    .catch((err) => {
      res.status(400).json({ err });
    });

  const totalCount = await ReviewsModel.count();

  // return the res statment to avoid stalled requests
  return res
    .status(200)
    .json({ data: allReviews, totalCount: totalCount, pageNum: p });
};

export const createReview = async (req, res) => {
  const { data } = req.body;

  //data can be one object or a list of objects and both cases will work
  //send list of objects when you need to bulk insert

  await connectDB();
  const existingRating = await ReviewsModel.findOne({
    reviewUser: data?.reviewUser,
    reviewPlace: data?.reviewPlace,
  });

  if (existingRating) {
    // If the user has already rated the place before, update the existing rating
    existingRating.reviewMessage = data?.reviewMessage;
    existingRating.score = data?.score;

    await existingRating.save();
    res.status(200).json({ message: "Rating updated successfully" });
  } else {
    // If the user hasn't rated the place before, create a new rating
    const newReview = await ReviewsModel.create(data).catch((err) => {
      res.status(400).json({ err });
    });
    await PlaceModel.findByIdAndUpdate(
      data.reviewPlace,
      { $push: { placeReviews: newReview._id } },
      { new: true, useFindAndModify: false }
    );
    return res.status(200).json(newReview);
  }
};

//get review by id controller
export const getById = async (req, res) => {
  const { reviewId } = req.query;

  await connectDB();

  const review = await ReviewsModel.find({ _id: reviewId }).catch((err) => {
    res.status(400).json({ err });
  });

  return res.status(200).json(review);
};

export const updateById = async (req, res) => {
  const { reviewId } = req.query;

  const { data } = req.body;

  await connectDB();

  const updatedReview = await ReviewsModel.findOneAndUpdate(
    { _id: reviewId },
    data
  ).catch((err) => {
    res.status(400).json({ err });
  });

  return res.status(200).json(updatedReview);
};

export const deleteById = async (req, res) => {
  const { reviewId } = req.query;

  await connectDB();

  await ReviewsModel.findOneAndDelete({
    _id: reviewId,
  }).catch((err) => {
    res.status(400).json({ err });
  });

  return res.status(200).json(reviewId);
};
