import React, { useState, useEffect } from "react";
import { Calendar } from "react-date-range";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { useRouter } from "next/router";
import { useUser } from "@auth0/nextjs-auth0/client";

import { createBooking } from "../../storeSlices/placeDetailSlice";

import SunOutlineIcon from "../../client/assets/icons/SunOutlineIcon";
import MoonOutlineIcon from "../../client/assets/icons/MoonOutlineIcon";

import BookingBody from "../organisms/BookingBody";

function BookingForm() {
  const router = useRouter();
  const { placeID } = router.query;

  const { user, error, isLoading } = useUser();

  //store logic
  const dispatch = useDispatch();
  const bookingState = useSelector((state) => {
    return state.placeDetail;
  });

  const { loading, bookingError, newBooking } = bookingState;

  //use Form Logic
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const [fromDate, setFromDate] = useState(null);
  const [isMorning, setisMorning] = useState(true);

  const [toDate, setToDate] = useState(null);
  const [toIsMorning, setToIsMorning] = useState(false);

  const [step, setStep] = useState(1);

  useEffect(() => {
    if (!newBooking) return;
    setStep(4);
  }, [newBooking]);

  const Step1 = () => {
    return (
      <form className="h-[78%] flex flex-col gap-3 justify-between ">
        <div className="flex h-[9%] ">
          <div className="flex  w-full justify-start gap-3 items-center  rounded-xl ">
            <div className="h-full greenGradient1 w-[40%] rounded-full   flex justify-center items-center">
              <h2 className="text-base font-bold text-white">From</h2>
            </div>
            <h2 className="text-xs font-bold text-secondryDarker">
              {fromDate?.toLocaleString()}
            </h2>
          </div>
          <div className="flex  w-full justify-center gap-3 items-center  rounded-xl ">
            <div className="h-full greenGradient1 w-[40%] rounded-full  opacity-30 flex justify-center items-center">
              <h2 className="text-base font-bold text-white">To</h2>
            </div>
          </div>
        </div>

        <div className="flex  justify-start items-start h-auto w-full gap-4 pt-2">
          <div
            onClick={() => {
              setisMorning(true);
              HandleToggleMorning(10);
            }}
            className={`${
              isMorning ? "bg-secondryligth text-secondryDarker" : "bg-white"
            } flex gap-2 shadow-flat px-1 py-2 rounded-full`}
          >
            <SunOutlineIcon fill={"#333"} className={"h-6 aspect-square"} />
            <p>10 AM</p>
          </div>
          <div
            onClick={() => {
              setisMorning(false);
              HandleToggleMorning(22);
            }}
            className={`${
              !isMorning ? "bg-secondryligth text-secondryDarker" : "bg-white"
            } flex gap-2 shadow-flat px-1 py-2 rounded-full`}
          >
            <MoonOutlineIcon fill={"#333"} className={"h-6 aspect-square"} />
            <p>10 PM</p>
          </div>
        </div>
        <div className="relative w-full overflow-hidden  rounded-xl">
          <Calendar onChange={HandleChangeCalender} />
        </div>
        <div className="h-[14%] w-full  flex justify-between p-2">
          <button className="w-[45%] aspect-btnOutlined border border-secondryDark rounded-xl">
            Back
          </button>
          <button
            onClick={(e) => {
              e.preventDefault();
              setStep(2);
            }}
            disabled={!fromDate}
            className={`w-[45%] aspect-btnOutlined  ${
              !fromDate && "opacity-30"
            } greenGradient1 text-secondryLigther  font-bold rounded-xl  disabled:bg-gray-400 disabled:text-gray-200`}
          >
            Next
          </button>
        </div>
      </form>
    );
  };
  const Step2 = () => {
    return (
      <form className="h-[78%] flex flex-col gap-3 justify-between ">
        <div className="flex h-[9%] ">
          <div className="flex opacity-30 w-full justify-start gap-3 items-center  rounded-xl ">
            <div className="h-full greenGradient1 w-[40%] rounded-full   flex justify-center items-center">
              <h2 className="text-base font-bold  text-white">From</h2>
            </div>
            <h2 className="text-xs font-normal text-secondryDarker">
              {" "}
              {fromDate?.toLocaleString()}
            </h2>
          </div>
          <div className="flex  w-full justify-center gap-3 items-center  rounded-xl ">
            <div className="h-full greenGradient1 w-[40%] rounded-full   flex justify-center items-center">
              <h2 className="text-base font-bold text-white">To</h2>
            </div>
            <h2 className="text-xs font-normal text-secondryDarker">
              {" "}
              {toDate?.toLocaleString()}
            </h2>
          </div>
        </div>

        <div className="flex  justify-end items-start h-auto w-full gap-4 pt-2">
          <div
            onClick={() => {
              setToIsMorning(true);
              HandleToggleMorningTo(10);
            }}
            className={`${
              toIsMorning ? "bg-secondryligth text-secondryDarker" : "bg-white"
            } flex gap-2 shadow-flat px-1 py-2 rounded-full`}
          >
            <SunOutlineIcon fill={"#333"} className={"h-6 aspect-square"} />
            <p>10 AM</p>
          </div>
          <div
            onClick={() => {
              setToIsMorning(false);
              HandleToggleMorningTo(22);
            }}
            className={`${
              !toIsMorning ? "bg-secondryligth text-secondryDarker" : "bg-white"
            } flex gap-2 shadow-flat px-1 py-2 rounded-full`}
          >
            <MoonOutlineIcon fill={"#333"} className={"h-6 aspect-square"} />
            <p>10 PM</p>
          </div>
        </div>
        <div className="relative w-full overflow-hidden  rounded-xl">
          <Calendar onChange={HandleChangeCalenderTo} />
        </div>
        <div className="h-[14%] w-full  flex justify-between p-2">
          <button className="w-[45%] aspect-btnOutlined border border-secondryDark rounded-xl">
            Back
          </button>
          <button
            onClick={(e) => {
              e.preventDefault();
              setStep(3);
            }}
            disabled={!toDate}
            className={`w-[45%] aspect-btnOutlined  ${
              !toDate && "opacity-30"
            } greenGradient1 text-secondryLigther  font-bold rounded-xl  disabled:bg-gray-400 disabled:text-gray-200`}
          >
            Next
          </button>
        </div>
      </form>
    );
  };

  const Step3 = () => {
    return (
      <form
        onSubmit={handleSubmit(handleSubmitUseForm)}
        className="h-[78%] w-full  flex flex-col justify-start gap-10  "
      >
        <div className="w-full flex flex-col gap-3">
          <div className="flex justify-between items-center w-full">
            <h3 className="text-sm text-primaryDark">
              how many <br />{" "}
              <span className="text-xl font-bold text-primaryDark">Guests</span>{" "}
            </h3>
          </div>
          <input
            id="numberOfGuests"
            className="h-[7vh] w-[98%] mx-auto shadow-flat rounded-xl pl-2"
            {...register("numberOfGuests", { required: "This Field Required" })}
            type={"number"}
          />
          {errors?.numberOfGuests?.message && (
            <p className="text-redBase">{errors?.numberOfGuests?.message}</p>
          )}
        </div>
        <div className="w-full flex flex-col flex-1  gap-3">
          <h3 className="text-sm text-primaryDark">
            Contact Info <br />{" "}
            <span className="text-xl font-bold text-primaryDark">
              Phone num
            </span>{" "}
          </h3>
          <div className="w-[98%] mx-auto  h-[7vh] shadow-flat bg-white flex items-center justify-center ml-2 rounded-xl overflow-hidden">
            <p className="font-semibold w-[15%] border-secondryligth text-secondryDarker pl-2">
              +962
            </p>
            <input
              {...register("contactPhoneNumber", {
                required: "This Field Required",
                minLength: {
                  value: 9,
                  message: "Should be at least 9 characters",
                },
              })}
              type={"tel"}
              className="h-full flex-1 w-[85%] "
            />
          </div>
          {errors?.contactPhoneNumber?.message && (
            <p className="text-redBase">
              {errors?.contactPhoneNumber?.message}
            </p>
          )}
        </div>
        <div className="h-[14%] w-full   flex justify-between p-2">
          <button className="w-[45%] aspect-btnOutlined border border-secondryDark rounded-xl">
            Back
          </button>
          <button
            type="submit"
            className="w-[45%] aspect-btnOutlined bg-secondryBase text-secondryDarker font-bold rounded-xl  disabled:bg-gray-400 disabled:text-gray-200"
          >
            Next
          </button>
        </div>
      </form>
    );
  };

  const Step4 = () => {
    return (
      <div className="w-full h-[78.77%] flex flex-col gap-8 px-2  font-IBMPlexSans">
        <h3 className="text-secondryDarker">
          FYI <br /> <span className="font-bold">Order Has three status</span>
        </h3>
        <div className="flex flex-col gap-4 h-[28.1%] ">
          <div className="flex justify-between h-[18.33%]">
            <div className="h-full w-auto  px-2 shadow-flat">
              <p>Created</p>
            </div>
            <div>waiting to be approved</div>
          </div>
          <div className="flex justify-between h-[18.33%]">
            <div className="h-full w-auto  px-2 shadow-flat bg-yellow-100">
              <p>approved</p>
            </div>
            <div>waiting on you to pay deposite</div>
          </div>
          <div className="flex justify-between h-[18.33%]">
            <div className="h-full w-auto  px-2 shadow-flat bg-secondryligth">
              <p>confirmed</p>
            </div>
            <div>All is Good have fun</div>
          </div>
        </div>
        <div className="h-[37.9%] w-full">
          <BookingBody />
        </div>
      </div>
    );
  };

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

  return (
    <div className="h-[92vh] w-full  flex justify-center items-center">
      {loading ? (
        <div className="h-full w-full bg-white">Loading</div>
      ) : (
        <div className="h-[92.0%] w-[96%] box-border overflow-y-scroll  justify-between flex overflow-hidden items-center flex-col gap-[5.1%]">
          <div className="flex flex-col w-full h-[15.3%]  justify-between">
            <h3 className="text-sm text-primaryDark">
              Step 1 <br />{" "}
              <span className="text-xl font-bold text-primaryDark">Dates</span>{" "}
            </h3>
            <div className="w-full h-[35%] bg-white shadow-flat rounded-full overflow-hidden  ">
              <div
                style={{
                  width: `${step * 25}%`,
                }}
                className="h-full w-[30%] greenGradient1 shadow-md "
              />
            </div>
          </div>
          {step === 1 ? (
            <Step1 />
          ) : step === 2 ? (
            <Step2 />
          ) : step === 3 ? (
            <Step3 />
          ) : step === 4 ? (
            <Step4 />
          ) : (
            <></>
          )}
        </div>
      )}
    </div>
  );
}

export default BookingForm;
