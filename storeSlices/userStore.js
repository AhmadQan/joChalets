import { createSlice } from "@reduxjs/toolkit";
import https from "../axios/axiosInstance";

export const UserSlice = createSlice({
  name: "UserSlice",
  initialState: {
    loading: false,
    bookingList: null,
    totalCount: null,
    bookingError: null,
  },
  reducers: {
    loading: (state) => {
      state.loading = true;
    },
    loadUserBookingSuccess: (state, action) => {
      state.bookingList = action.payload.data?.data;
      state.totalCount = action.payload.totalCount;
      state.loading = false;
      state.bookingError = null;
    },
    apiErr: (state, action) => {
      state.loading = false;
      state.bookingError = action.payload;
    },
  },
});

//action thunks

export const getUserBookingHandler = (userId) => async (dispatch, getState) => {
  try {
    dispatch(loading());
    const currentState = getState();

    const response = await https.get(`booking/users/${userId}`);

    dispatch(loadUserBookingSuccess(response));
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

export const { loading, loadUserBookingSuccess, apiErr } = UserSlice.actions;

export default UserSlice.reducer;
