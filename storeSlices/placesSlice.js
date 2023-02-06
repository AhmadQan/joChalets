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
    placeSelected: null,
  },
  reducers: {
    loading: (state) => {
      state.loading = true;
    },
    loadAllPlacesSuccess: (state, action) => {
      state.allPlaces = action.payload.data;
      state.totalCount = action.payload.totalCount;
      state.loading = false;
      state.err = null;
    },
    apiErr: (state, action) => {
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
    loadSelectedPlace: (state, action) => {
      state.placeSelected = action.payload.data;
      state.loading = false;
      state.err = null;
    },
  },
});

export const fetchPlaces = (page, filterData) => async (dispatch, getState) => {
  const state = getState();
  const pageNumber = state.places.pageNumber;

  try {
    dispatch(loading());
    const response = await https.get(`places/?p=${page}&s=${10}`, {
      params: filterData,
    });

    dispatch(loadAllPlacesSuccess(response.data));
    dispatch(setPageNumber(page));
  } catch (error) {
    dispatch(
      apiErr(
        error.response && error.response.data?.detail
          ? error.response.data?.detail
          : error.message
      )
    );
  }
};

export const createPlaces = (data) => async (dispatch) => {
  try {
    dispatch(loading());

    const response = await https.post(`places`, { data: data });

    dispatch(setPlaceToEdit(response.data._id));
  } catch (error) {
    dispatch(
      apiErr(
        error.response && error.response.data?.detail
          ? error.response.data?.detail
          : error.message
      )
    );
  }
};

export const updatePlaces = (placeId, placeData) => async (dispatch) => {
  try {
    dispatch(loading());

    const response = await https.put(`places/${placeId}`, { data: placeData });

    dispatch(setPlaceToEdit(response.data._id));
  } catch (error) {
    dispatch(
      apiErr(
        error.response && error.response.data?.detail
          ? error.response.data?.detail
          : error.message
      )
    );
  }
};

export const fetchSelectedPlace = (placeId) => async (dispatch) => {
  try {
    dispatch(loading());

    const response = await https.get(`places/${placeId}`);

    dispatch(loadSelectedPlace(response));
  } catch (error) {
    dispatch(
      apiErr(
        error.response && error.response.data?.detail
          ? error.response.data?.detail
          : error.message
      )
    );
  }
};

// Action creators are generated for each case reducer function
export const {
  loading,
  loadAllPlacesSuccess,
  apiErr,
  setPlaceToEdit,
  setPageNumber,
  toggleAddModel,
  loadSelectedPlace,
} = PlacesSlice.actions;

export default PlacesSlice.reducer;
