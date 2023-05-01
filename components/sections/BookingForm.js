import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useRouter } from "next/router";
import { useUser } from "@auth0/nextjs-auth0/client";
import { motion } from "framer-motion";

import {
  createBooking,
  clearAndCloseForms,
} from "../../storeSlices/placeDetailSlice";

import BookingStep1 from "../organisms/BookingStep1";
import BookingStep2 from "../organisms/BookingStep2";
import CalenderBoldIcon from "../../client/assets/icons/CalenderBoldIcon";
import PeopleIcon from "../../client/assets/icons/PeopleIcon";
import CallCallingIcon from "../../client/assets/icons/CallCallingIcon";
import ClockIconOutline from "../../client/assets/icons/ClockIconOutline";
import CloseCirculeIcon from "../../client/assets/icons/CloseCirculeIcon";

function BookingForm({ windowCloseHandler }) {
  const router = useRouter();
  const { placeID } = router.query;

  //step control

  const { user, error, isLoading } = useUser();

  //store logic
  const dispatch = useDispatch();
  const bookingState = useSelector((state) => {
    return state.placeDetail;
  });

  const { err, loading, currentStep, form1, form2 } = bookingState;

  const closeHandler = async () => {
    dispatch(clearAndCloseForms());
  };

  //logic for optaining the dates

  const handleCreateBooking = async () => {
    const startDateInSec =
      form1?.from?.DayTime === "morning"
        ? new Date(form1?.from?.startDate)?.setHours(10, 0, 0, 0)
        : new Date(form1?.from?.startDate)?.setHours(22, 0, 0, 0);

    const endDateInSec =
      form1?.to?.DayTime === "morning"
        ? new Date(form1?.to?.startDate)?.setHours(10, 0, 0, 0)
        : new Date(form1?.to?.startDate)?.setHours(22, 0, 0, 0);

    dispatch(
      createBooking({
        startDateInSec,
        endDateInSec,
        placeBooked: placeID,
        customer: user?.dbinfo?._id,
        status: "created",
        ...form2,
      })
    );
    router?.push(`/users/profile`);

    await closeHandler();
    windowCloseHandler();
  };

  return (
    <div className="h-[92vh] w-full  flex justify-center items-center">
      {loading ? (
        <div className="h-full w-full bg-gray-700 bg-opacity-60 backdrop-blur-md ">
          Loading
        </div>
      ) : (
        <div className="flex flex-col  w-[86.511vw] h-full pt-6 gap-[7.2%]">
          <div className="w-full ">
            <div
              onClick={async () => {
                await closeHandler();
                windowCloseHandler();
              }}
              className="bg-white w-10 aspect-square rounded-full flex justify-center items-center shadow-flat"
            >
              <CloseCirculeIcon
                fill={"rgb(239, 68, 68)"}
                className={"w-9  aspect-square"}
              />
            </div>
          </div>
          <div className="flex flex-col gap-2">
            <p className="text-3xl font-bold text-gray-400 uppercase">
              Step {currentStep + 1}
            </p>
            <div className="w-full h-5 bg-white shadow-flat rounded-sm overflow-hidden  p-1">
              <motion.div
                animate={{
                  width: `${(currentStep + 1) * 25}%`,
                }}
                className="h-full  greenGradient1 shadow-flat "
              />
            </div>
          </div>
          {currentStep === 0 ? (
            <BookingStep1 />
          ) : currentStep === 1 ? (
            <BookingStep2 />
          ) : currentStep === 2 ? (
            <div className="w-full h-full  rounded-xl py-8 flex flex-col gap-4">
              <div className="flex w-full bg-white flex-col gap-8 px-6 py-4 rounded-xl">
                <CalenderBoldIcon
                  fill={"#10A4F9"}
                  className={"w-10 aspect-square"}
                />
                <div className="flex w-full justify-between">
                  <div className="flex flex-col">
                    <p className="text-lg font-semibold text-primary90">
                      Start
                    </p>
                    <p>
                      {new Date(form1?.from?.startDate)?.toLocaleDateString() ||
                        ""}
                    </p>
                    <div className="flex pt-2">
                      <ClockIconOutline
                        fill={"#10A4F9"}
                        className={"w-4 aspect-square"}
                      />
                      <p>
                        {form1?.from?.DayTime === "morning"
                          ? "10 AM"
                          : form1?.from?.DayTime === "nigth"
                          ? "10 PM"
                          : ""}
                      </p>
                    </div>
                  </div>
                  <div className="flex flex-col">
                    <p className="text-lg font-semibold text-primary90">End</p>
                    <p>
                      {new Date(form1?.to?.startDate)?.toLocaleDateString() ||
                        ""}
                    </p>
                    <div className="flex pt-2">
                      <ClockIconOutline
                        fill={"#10A4F9"}
                        className={"w-4 aspect-square"}
                      />
                      <p>
                        {form1?.to?.DayTime === "morning"
                          ? "10 AM"
                          : form1?.to?.DayTime === "nigth"
                          ? "10 PM"
                          : ""}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex bg-white w-full flex-col gap-8 px-6 py-4 rounded-xl">
                <div className="flex w-full justify-start gap-6">
                  <PeopleIcon
                    fill={"#10A4F9"}
                    className={"w-8 aspect-square"}
                  />
                  <div>{form2?.numberOfGuests || ""}</div>
                </div>
                <div className="flex w-full justify-start gap-6">
                  <CallCallingIcon
                    fill={"#10A4F9"}
                    className={"w-8 aspect-square"}
                  />
                  <div>{form2?.contactPhoneNumber || ""}</div>
                </div>
              </div>
              <div className="w-full flex justify-between mt-auto">
                <button className="w-[48%] font-bold text-red-500 bg-white aspect-btn rounded-xl shadow-lg border border-gray-500">
                  Back
                </button>
                <button
                  onClick={(e) => {
                    e.preventDefault();
                    handleCreateBooking();
                  }}
                  className="w-[48%] font-bold text-primary90 bg-secondry50 aspect-btn rounded-xl shadow-lg border border-secondry80 "
                >
                  Confirm
                </button>
              </div>
            </div>
          ) : (
            <></>
          )}
        </div>
      )}
    </div>
  );
}

export default BookingForm;
