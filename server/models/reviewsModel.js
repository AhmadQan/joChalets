import mongoose, { Schema, model, models } from "mongoose";

const ReviewsSchema = new Schema({
  reviewUser: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  reviewMessage: { type: String },
  score: {
    type: Number,
    validate: {
      validator: function (v) {
        return v <= 5;
      },
      message: (props) => `${props.value} must be less than or equal to 5`,
    },
  },

  reviewPlace: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Place",
    required: true,
  },
});

const ReviewsModel = models.Reviews || model("Reviews", ReviewsSchema);

export default ReviewsModel;
