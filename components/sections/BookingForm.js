import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useRouter } from "next/router";
import { useUser } from "@auth0/nextjs-auth0/client";

import { createBooking } from "../../storeSlices/placeDetailSlice";

import BookingStep1 from "../organisms/BookingStep1";

function BookingForm() {
  const router = useRouter();
  const { placeID } = router.query;

  //step control

  const { user, error, isLoading } = useUser();

  //store logic
  const dispatch = useDispatch();
  const bookingState = useSelector((state) => {
    return state.placeDetail;
  });

  const { err, loading, currentStep } = bookingState;

  const [fromDate, setFromDate] = useState(null);
  const [isMorning, setisMorning] = useState(true);

  const [toDate, setToDate] = useState(null);
  const [toIsMorning, setToIsMorning] = useState(false);

  const [step, setStep] = useState(1);

  //step 3 logic
  const handleSubmitUseForm = (data) => {
    const APIdata = {
      contactPhoneNumber: data.contactPhoneNumber,
      numberOfGuests: parseInt(data.numberOfGuests),
      placeBooked: placeID,
      startDateInSec: fromDate.getTime(),
      endDateInSec: toDate.getTime(),
      customer: user?.dbinfo?._id,
      status: "created",
    };
    dispatch(createBooking(APIdata));
  };

  //logic for optaining the dates

  const HandleChangeCalender = (date) => {
    const toBeChanged = new Date(date.getTime());
    if (isMorning) {
      toBeChanged.setHours(10);
      setFromDate(toBeChanged);
    } else {
      toBeChanged.setHours(22);
      setFromDate(toBeChanged);
    }
  };

  const HandleToggleMorning = (hours) => {
    if (!fromDate) return;
    const dateToChange = new Date(fromDate.getTime());
    dateToChange.setHours(hours);
    setFromDate(dateToChange);
  };

  const HandleChangeCalenderTo = (date) => {
    const toBeChanged = new Date(date.getTime());
    if (toIsMorning) {
      toBeChanged.setHours(10);
      setToDate(toBeChanged);
    } else {
      toBeChanged.setHours(22);
      setToDate(toBeChanged);
    }
  };

  const HandleToggleMorningTo = (hours) => {
    if (!toDate) return;
    const dateToChange = new Date(toDate.getTime());
    dateToChange.setHours(hours);
    setToDate(dateToChange);
  };

  ///form 2///
  const Form2 = () => {
    return <div>form2</div>;
  };

  return (
    <div className="h-[92vh] w-full  flex justify-center items-center">
      {loading ? (
        <div className="h-full w-full bg-gray-700 bg-opacity-60 backdrop-blur-md ">
          Loading
        </div>
      ) : (
        <div className="flex flex-col w-[86.511vw] h-full pt-6 gap-6">
          <div className="w-full h-8 bg-white shadow-flat rounded-full overflow-hidden  ">
            <div
              style={{
                width: `${step * 25}%`,
              }}
              className="h-full w-[30%] greenGradient1 shadow-md "
            />
          </div>
          {currentStep === 0 ? (
            <BookingStep1 />
          ) : currentStep === 1 ? (
            <Form2 />
          ) : (
            <></>
          )}
        </div>
      )}
    </div>
  );
}

export default BookingForm;
