import { createSlice } from "@reduxjs/toolkit";
// import https from "../axios/axiosInstance";

export const SettingsSlice = createSlice({
  name: "settings",
  initialState: {
    showFilterModel: false,
  },
  reducers: {
    toggleFilterModel: (state) => {
      state.showFilterModel = !state.showFilterModel;
    },
  },
});

// Action creators are generated for each case reducer function
export const { toggleFilterModel } = SettingsSlice.actions;

export default SettingsSlice.reducer;
