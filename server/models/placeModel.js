import mongoose, { Schema, model, models } from "mongoose";

const PlaceSchema = new Schema({
  name: { type: String, required: true },
  owner: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
  address: { type: String },
  description: { type: String },
  images: [{ imgIndex: Number, img: String }],
  utils: [{ utilKey: String, utilValue: Boolean }],
  bookingList: [{ type: mongoose.Schema.Types.ObjectId, ref: "Booking" }],
  placeReviews: [{ type: mongoose.Schema.Types.ObjectId, ref: "Reviews" }],
});

const PlaceModel = models.Place || model("Place", PlaceSchema);

export default PlaceModel;
