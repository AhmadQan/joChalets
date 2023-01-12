import { configureStore } from "@reduxjs/toolkit";
import placesSlice from "./storeSlices/placesSlice";

export default configureStore({
  reducer: {
    places: placesSlice,
  },
});
