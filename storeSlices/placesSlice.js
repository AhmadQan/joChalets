import { createSlice } from "@reduxjs/toolkit";
import https from "../axios/axiosInstance";

export const PlacesSlice = createSlice({
  name: "places",
  initialState: {
    allPlaces: [],
    loading: false,
    err: null,
    selectedPlaceId: null,
    totalCount: null,
    pageNumber: null,
  },
  reducers: {
    loadAllPlacesReq: (state) => {
      state.loading = true;
    },
    loadAllPlacesSuccess: (state, action) => {
      state.allPlaces = action.payload.data;
      state.totalCount = action.payload.totalCount;
      state.loading = false;
    },
    loadAllPlacesError: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
    selectPlace: (state, action) => {
      state.place = action.payload;
    },
  },
});

export const fetchPlaces = (size, page) => async (dispatch) => {
  try {
    dispatch(loadAllPlacesReq());

    const response = await https.get(`places?p=${page}&s=${size}`);

    dispatch(loadAllPlacesSuccess(response.data));
  } catch (error) {
    dispatch(
      loadAllPlacesError(
        error.response && error.response.data?.detail
          ? error.response.data?.detail
          : error.message
      )
    );
  }
};

// Action creators are generated for each case reducer function
export const {
  loadAllPlacesReq,
  loadAllPlacesSuccess,
  loadAllPlacesError,
  selectPlace,
} = PlacesSlice.actions;

export default PlacesSlice.reducer;
