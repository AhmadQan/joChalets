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
    pageNumber: 0,
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
      state.err = action.payload;
    },

    setPlaceToEdit: (state, action) => {
      state.idToEdit = action.payload;
      state.loading = false;
    },
    toggleAddModel: (state) => {
      state.showAddModel = !state.showAddModel;
    },
    setPageNumber: (state, payload) => {
      state.pageNumber = payload;
    },
  },
});

export const fetchPlaces = (page, filterData) => async (dispatch, getState) => {
  const state = getState();
  const pageNumber = state.places.pageNumber;

  try {
    dispatch(loadAllPlacesReq());
    const response = await https.get(`places/?p=${page}&s=${10}`, {
      params: filterData,
    });

    dispatch(loadAllPlacesSuccess(response.data));
    dispatch(setPageNumber(page));
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
  setPlaceToEdit,
  setPageNumber,
  toggleAddModel,
} = PlacesSlice.actions;

export default PlacesSlice.reducer;
