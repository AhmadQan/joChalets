import { Schema, model, models } from "mongoose";

const PlaceSchema = new Schema({
  name: { type: String, required: true },
  address: { type: String },
  description: { type: String },
  images: [{ imgIndex: Number, img: String }],
});

const PlaceModel = models.Place || model("Place", PlaceSchema);

export default PlaceModel;
