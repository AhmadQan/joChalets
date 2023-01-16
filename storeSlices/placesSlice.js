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
    idToEdit: null,
    showAddModel: false,
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
    setPlaceToEdit: (state, action) => {
      state.idToEdit = action.payload;
      state.loading = false;
    },
    toggleAddModel: (state) => {
      state.showAddModel = !state.showAddModel;
    },
    setImagesList: (state, action) => {
      state.imagesList = action.payload;
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
export const createPlaces = (data) => async (dispatch) => {
  try {
    dispatch(loadAllPlacesReq());

    const response = await https.post(`places`, { data: data });

    dispatch(setPlaceToEdit(response.data._id));

    // dispatch(fetchPlaces());
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
export const updatePlaces = (placeId, placeData) => async (dispatch) => {
  try {
    dispatch(loadAllPlacesReq());

    const response = await https.put(`places/${placeId}`, { data: placeData });

    dispatch(setPlaceToEdit(response.data._id));

    // dispatch(fetchPlaces());
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
  setPlaceToEdit,
  toggleAddModel,
  setImagesList,
} = PlacesSlice.actions;

export default PlacesSlice.reducer;
