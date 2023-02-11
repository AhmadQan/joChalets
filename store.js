import { configureStore } from "@reduxjs/toolkit";
import placesSlice from "./storeSlices/placesSlice";
import SettingsSlice from "./storeSlices/settingSlice";
import bookingSlice from "./storeSlices/bookingSlice";

export default configureStore({
  reducer: {
    places: placesSlice,
    settings: SettingsSlice,
    booking: bookingSlice,
  },
});
