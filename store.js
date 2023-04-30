import { configureStore } from "@reduxjs/toolkit";
import placesSlice from "./storeSlices/placesSlice";
import placeDetailSlice from "./storeSlices/placeDetailSlice";
import userStore from "./storeSlices/userStore";

export default configureStore({
  reducer: {
    places: placesSlice,
    placeDetail: placeDetailSlice,
    user: userStore,
  },
});
