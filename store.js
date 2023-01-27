import { configureStore } from "@reduxjs/toolkit";
import placesSlice from "./storeSlices/placesSlice";
import SettingsSlice from "./storeSlices/settingSlice";
export default configureStore({
  reducer: {
    places: placesSlice,
    settings: SettingsSlice,
  },
});
