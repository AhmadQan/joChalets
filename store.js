import { configureStore } from "@reduxjs/toolkit";
import placesSlice from "./storeSlices/placesSlice";
import SettingsSlice from "./storeSlices/settingSlice";
import placeDetailSlice from "./storeSlices/placeDetailSlice";
import userStore from "./storeSlices/userStore";

export default configureStore({
  reducer: {
    places: placesSlice,
    settings: SettingsSlice,
    placeDetail: placeDetailSlice,
    user: userStore,
  },
});
