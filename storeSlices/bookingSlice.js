import { createSlice } from "@reduxjs/toolkit";
import https from "../axios/axiosInstance";

export const BookingSlice = createSlice({
  name: "booking",
  initialState: {
    loading: false,
    bookingError: false,
    allBookings: null,
    totalCount: null,
    newBooking: null,
  },
  reducers: {
    loading: (state) => {
      state.loading = true;
    },
    loadAllBookingSuccess: (state, action) => {
      state.allBookings = action.payload.data;
      state.totalCount = action.payload.totalCount;
      state.loading = false;
      state.bookingError = null;
    },
    apiErr: (state, action) => {
      state.loading = false;
      state.bookingError = action.payload;
    },
    loadNewBooking: (state, action) => {
      state.newBooking = action.payload;
      state.loading = false;
      state.bookingError = null;
    },
  },
});

//action thunks
export const createBooking = (data) => async (dispatch, state) => {
  try {
    dispatch(loading());

    const response = await https.post(`booking`, { data: data });

    dispatch(loadNewBooking(response.data));
  } catch (bookingError) {
    dispatch(
      apiErr(
        bookingError.response && bookingError.response.data?.detail
          ? bookingError.response.data?.detail
          : bookingError.message
      )
    );
  }
};

export const { loading, loadAllBookingSuccess, apiErr, loadNewBooking } =
  BookingSlice.actions;

export default BookingSlice.reducer;
