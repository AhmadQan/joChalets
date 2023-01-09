import { Schema, model, models } from "mongoose";

const PlaceSchema = new Schema({
  name: String,
  address: String,
});

const PlaceModel = models.Place || model("Place", PlaceSchema);

export default PlaceModel;
