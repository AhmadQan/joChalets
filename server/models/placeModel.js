import mongoose, { Schema, model, models } from "mongoose";

const PlaceSchema = new Schema({
  name: { type: String, required: true },
  owner: [{ type: mongoose.Schema.Types.ObjectId, ref: "User" }],
  city: { type: String, required: true },
  description: { type: String },
  address: { type: String },
  images: [{ imgIndex: Number, img: String }],
  utils: {
    type: mongoose.Schema.Types.Mixed,
  },
  bookingList: [{ type: mongoose.Schema.Types.ObjectId, ref: "Booking" }],
  placeReviews: [{ type: mongoose.Schema.Types.ObjectId, ref: "Reviews" }],
});

const PlaceModel = models.Place || model("Place", PlaceSchema);

export default PlaceModel;
