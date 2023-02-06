import mongoose, { Schema, model, models } from "mongoose";

const ReviewsSchema = new Schema({
  reviewUser: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  reviewMessage: { type: String },
  isPostive: { type: Boolean },
  reviewPlace: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Place",
    required: true,
  },
});

const ReviewsModel = models.Reviews || model("Reviews", ReviewsSchema);

export default ReviewsModel;
