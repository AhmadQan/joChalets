import { createSlice } from "@reduxjs/toolkit";
import https from "../axios/axiosInstance";

export const PlacesSlice = createSlice({
  name: "places",
  initialState: {
    allPlaces: null,
    loading: false,
    newPlace: null,
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
      state.allPlaces = action.payload.data;
      state.totalCount = action.payload?.count;
      state.loading = false;
      state.filterData = action.payload?.filter;
      state.err = null;
      state.pageNumber = action.payload.pageNum;
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
    setNewCreatedPlace: (state, action) => {
      state.newPlace = action.payload;
    },
    setFormData: (state, action) => {
      state.newPlace = action.payload;
    },
  },
});

export const fetchPlaces = (page, filter) => async (dispatch, getState) => {
  const state = getState();
  const currentPlaces = state.places.allPlaces || [];
  // if (currentPlaces?.length === totalCount) return;

  try {
    dispatch(loading());
    const response = await https.get(`places/?p=${page}&s=${10}`, {
      params: filter,
    });

    dispatch(
      loadAllPlacesSuccess({
        data: [...currentPlaces, ...response.data?.data],
        filter: filter,
        pageNum: page,
        count: response.data?.totalCount,
      })
    );
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
export const FilterfetchPlaces =
  (page, filterData) => async (dispatch, getState) => {
    const state = getState();
    // const totalCount = state.places.totalCount;
    // const currentPlaces = state.places.allPlaces || [];

    try {
      dispatch(loading());
      const response = await https.get(`places/?p=${page}&s=${10}`, {
        params: filterData,
      });

      dispatch(
        loadAllPlacesSuccess({
          data: response.data?.data,
          filter: filterData,
          pageNum: page,
          count: response.data?.totalCount,
        })
      );
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

    dispatch(setNewCreatedPlace(response.data));
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
  setNewCreatedPlace,
} = PlacesSlice.actions;

export default PlacesSlice.reducer;
