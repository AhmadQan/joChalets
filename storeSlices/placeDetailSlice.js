import { createSlice } from "@reduxjs/toolkit";
import https from "../axios/axiosInstance";
import {
  categorizeDates,
  checkDatesAvilablity,
  getThisMonthArray,
} from "../client/helpers/datesHelper";

export const PlaceDetailSlice = createSlice({
  name: "PlaceDetail",
  initialState: {
    loading: false,
    placeSelected: null,

    allBookings: null,
    totalCount: null,
    placeAvailablity: null,
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
export const createBooking = (data) => async (dispatch) => {
  try {
    dispatch(loading());

    const response = await https.post(`booking`, { data: data });

    dispatch(loadNewBooking(response.data));
    dispatch(fetchSelectedPlace(data?.placeBooked));
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

export const getPlaceAvailablity = () => async (dispatch, getState) => {
  try {
    dispatch(loading());
    const thisMonthArray = await getThisMonthArray();
    const currentState = getState();
    const { placeDetail } = currentState;

    // if (!placeSelected) return;
    if (!placeDetail?.placeSelected) return;
    const availablityList = [];

    const bookingArray = placeDetail?.placeSelected?.bookingList;

    await Promise.all(
      thisMonthArray?.map(async (day) => {
        const item = await checkDatesAvilablity(day, bookingArray);
        availablityList.push(item);
      })
    );

    const AvailablityObj = await categorizeDates(availablityList);

    dispatch(loadPlaceAvailablity(AvailablityObj));
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
    dispatch(getPlaceAvailablity());

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
