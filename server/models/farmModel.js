import { Schema, model, models } from "mongoose";

const farmSchema = new Schema({
  name: String,
});

const FarmModel = models.Farm || model("Farm", farmSchema);

export default FarmModel;
