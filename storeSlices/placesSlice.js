import { createSlice } from "@reduxjs/toolkit";
import https from "../axios/axiosInstance";

export const PlacesSlice = createSlice({
  name: "places",
  initialState: {
    allPlaces: null,
    loading: false,
    err: null,
    totalCount: null,
    pageNumber: 0,
    showAddModel: false,
    filterData: null,
  },
  reducers: {
    loading: (state) => {
      state.loading = true;
    },
    loadAllPlacesSuccess: (state, action) => {
      state.allPlaces = action.payload.data?.data;
      state.totalCount = action.payload.data?.totalCount;
      state.loading = false;
      state.filterData = action.payload?.filter;
      state.err = null;
    },
    apiErr: (state, action) => {
      state.loading = false;
      state.err = action.payload;
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
    dispatch(loading());
    const response = await https.get(`places/?p=${page}&s=${10}`, {
      params: filterData,
    });

    dispatch(loadAllPlacesSuccess({ data: response.data, filter: filterData }));
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

// Action creators are generated for each case reducer function
export const {
  loading,
  loadAllPlacesSuccess,
  apiErr,
  setPageNumber,
  toggleAddModel,
} = PlacesSlice.actions;

export default PlacesSlice.reducer;
