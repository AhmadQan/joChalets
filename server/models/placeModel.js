import mongoose, { Schema, model, models } from "mongoose";

const PlaceSchema = new Schema({
  name: { type: String, required: true },
  owner: { type: mongoose.Schema.Types.ObjectId, required: true },
  address: { type: String },
  description: { type: String },
  images: [{ imgIndex: Number, img: String }],
  bookingList: [{ type: mongoose.Schema.Types.ObjectId, ref: "Booking" }],
});

const PlaceModel = models.Place || model("Place", PlaceSchema);

export default PlaceModel;
