import { createSlice } from "@reduxjs/toolkit";
import https from "../axios/axiosInstance";

export const PlaceDetailSlice = createSlice({
  name: "PlaceDetail",
  initialState: {
    loading: false,
    placeSelected: null,

    allBookings: null,
    totalCount: null,
    placeAvailablity: {
      disabledDates: [],
      availableAtEvening: [],
      availableAtMorning: [],
    },
    newBooking: null,
    bookingError: false,

    idToEdit: null,
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
    setPlaceToEdit: (state, action) => {
      state.idToEdit = action.payload;
      state.loading = false;
    },
    loadPlaceAvailablity: (state, action) => {
      state.placeAvailablity = action.payload;
    },
    loadSelectedPlace: (state, action) => {
      state.placeSelected = action.payload.data;
      state.loading = false;
      state.err = null;
    },
  },
});

//action thunks
export const createBooking = (data) => async (dispatch, state) => {
  try {
    dispatch(loading());

    const response = await https.post(`booking`, { data: data });

    dispatch(loadNewBooking(response.data));
    dispatch(getPlaceAvailablity(data?.placeBooked));
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

export const updatePlaces = (placeId, placeData) => async (dispatch) => {
  try {
    dispatch(loading());

    const response = await https.put(`places/${placeId}`, { data: placeData });

    dispatch(setPlaceToEdit(response));
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

export const getPlaceAvailablity = (placeId) => async (dispatch) => {
  try {
    dispatch(loading());

    const response = await https.get(`booking/places/${placeId}`);

    const disabledDates = await response?.data?.data?.filter((item) => {
      return (
        item?.availableMorning === false && item?.availableEvening === false
      );
    });

    const availableAtEvening = await response?.data?.data?.filter((item) => {
      return (
        item?.availableMorning === false && item?.availableEvening === true
      );
    });

    const availableAtMorning = await response?.data?.data?.filter((item) => {
      return (
        item?.availableMorning === true && item?.availableEvening === false
      );
    });

    dispatch(
      loadPlaceAvailablity({
        disabledDates: disabledDates.map((item) => {
          return new Date(item.date);
        }),
        availableAtEvening: availableAtEvening.map((item) => {
          return new Date(item.date).toDateString();
        }),
        availableAtMorning: availableAtMorning.map((item) => {
          return new Date(item.date).toDateString();
        }),
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

export const fetchSelectedPlace = (placeId) => async (dispatch) => {
  try {
    dispatch(loading());

    const response = await https.get(`places/${placeId}`);
    dispatch(getPlaceAvailablity(placeId));

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

export const {
  loading,
  loadAllBookingSuccess,
  apiErr,
  loadNewBooking,
  loadPlaceAvailablity,
  setPlaceToEdit,
  loadSelectedPlace,
} = PlaceDetailSlice.actions;

export default PlaceDetailSlice.reducer;
