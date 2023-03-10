import { configureStore } from "@reduxjs/toolkit";
import placesSlice from "./storeSlices/placesSlice";
import SettingsSlice from "./storeSlices/settingSlice";
import placeDetailSlice from "./storeSlices/placeDetailSlice";

export default configureStore({
  reducer: {
    places: placesSlice,
    settings: SettingsSlice,
    placeDetail: placeDetailSlice,
  },
});
