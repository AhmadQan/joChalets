import { Schema, model, models } from "mongoose";

const UserSchema = new Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  role: { type: String, default: "customer" },
  age: { type: Number },
  //owner of places
  ownerof: [],
  profilepicture: { type: String },
  //   likedPlaces: [],
});

const UserModel = models.User || model("User", UserSchema);
export default UserModel;
