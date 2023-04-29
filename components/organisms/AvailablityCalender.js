import React, { useEffect, useState } from "react";

import { Calendar } from "react-date-range";
import { useDispatch, useSelector } from "react-redux";
import { useUser } from "@auth0/nextjs-auth0/client";
import { motion } from "framer-motion";

import LoaderDrops from "../molecules/LoaderDrops";

import { getPlaceAvailablity } from "../../storeSlices/placeDetailSlice";
import { createBooking } from "../../storeSlices/placeDetailSlice";

import CloseCirculeIcon from "../../client/assets/icons/CloseCirculeIcon";
import SunFilledIcon from "../../client/assets/icons/SunFilledIcon";
import MoonFilledIcon from "../../client/assets/icons/MoonFilledIcon";

import "react-date-range/dist/styles.css"; // main style file
import "react-date-range/dist/theme/default.css"; // theme css file

function AvailablityCalender({ placeID, closeHandler }) {
  const [selectedDate, setSelectedDate] = useState(null);

  const PlaceState = useSelector((state) => state.placeDetail);
  const { err, loading, placeAvailablity } = PlaceState;
  const { user, error, isLoading } = useUser();

  const {
    disabledDates = [],
    onlyAvailableAtEvening = [],
    onlyAvailableAtMorning = [],
  } = placeAvailablity;

  const dispatch = useDispatch();

  useEffect(() => {
    if (placeAvailablity) return;
    dispatch(getPlaceAvailablity(placeID));
  }, [placeAvailablity]);

  const datesToDisaple = disabledDates?.map((date) => {
    return new Date(date.date);
  });

  function renderCustomDayContent(day) {
    // Here you can add any custom content for the day cell

    const isAvailableMorning = onlyAvailableAtMorning?.filter((date) => {
      return (
        new Date(date?.date).toLocaleDateString() ===
        new Date(day).toLocaleDateString()
      );
    });
    const isAvailableEvening = onlyAvailableAtEvening?.filter((date) => {
      return (
        new Date(date?.date).toLocaleDateString() ===
        new Date(day).toLocaleDateString()
      );
    });

    return (
      <div
        className={`rounded-md   ${
          isAvailableMorning.length
            ? "bg-yellow-100  text-black border border-yellow-300"
            : isAvailableEvening.length
            ? "bg-blue-200 text-white border border-primary40"
            : ""
        } w-full`}
      >
        <span>{day.getDate()}</span>
      </div>
    );
  }

  const calenserHandler = async (start, end) => {
    dispatch(
      createBooking({
        contactPhoneNumber: "0096200000000",
        numberOfGuests: 1,
        placeBooked: placeID,
        startDateInSec: new Date(start)?.getTime(),
        endDateInSec: new Date(end)?.getTime(),
        customer: user?.dbinfo?._id,
        status: "created",
      })
    );
    setSelectedDate(null);
  };

  return (
    <div className="fixed bg-opacity-60 backdrop-blur-sm bg-re z-30  w-screen h-screen bg-primary90 flex flex-col justify-start gap-[5%] pt-[2%]">
      <CloseCirculeIcon
        onClick={() => {
          closeHandler();
        }}
        fill={"rgb(248, 113, 113)"}
        className={"w-10 aspect-square"}
      />
      <div className="w-full bg-white bg-opacity-70 backdrop-blur-md rounded-lg flex flex-col gap-6 h-auto py-3">
        <div className="w-full flex items-center justify-between px-8 ">
          <div className="w-11 aspect-square bg-yellow-100 shadow-md  border border-yellow-300 rounded-md flex justify-center items-center">
            Day
          </div>
          <p className="text-primary100 text-sm font-normal">
            Available only from 10AM to 9PM <br />
            <span className="text-base font-bold text-primary100">
              Morning Slot
            </span>
          </p>
        </div>
        <div className="w-full flex items-center justify-between px-8 ">
          <div className="w-11 aspect-square bg-blue-200 border shadow-md border-primary40 rounded-md flex justify-center items-center">
            Day
          </div>
          <p className="text-primary100 text-sm font-normal">
            Available only from 10PM to 9AM
            <br />{" "}
            <span className="text-base font-bold text-primary100">
              Evening Slot
            </span>
          </p>
        </div>
      </div>
      {loading ? (
        <div className="w-full aspect-square border-t-2 border-primary60 bg-white flex justify-center items-center">
          <LoaderDrops />
        </div>
      ) : (
        <Calendar
          disabledDates={datesToDisaple}
          dayContentRenderer={renderCustomDayContent}
          rangeColors={["#C8F9D1", "#C8F9D1", "#C8F9D1"]}
          onChange={(date) => {
            if (user?.dbinfo?.role !== "admin") return;
            setSelectedDate(date);
          }}
          minDate={new Date()}
        />
      )}

      {user?.dbinfo?.role === "admin" && selectedDate ? (
        <div className="flex py-6 gap-5 justify-between absolute bg-white flex-col w-full  top-[20%] rounded-lg shadow-elvatedCard border border-primary30">
          <CloseCirculeIcon
            onClick={() => {
              setSelectedDate(null);
            }}
            fill={"rgb(248, 113, 113)"}
            className={"w-10 aspect-square"}
          />
          <div className="flex items-center justify-start gap-6 px-[5%] border-t border-gray-300 pt-3">
            <p>Morning</p>
            <SunFilledIcon
              fill={"rgb(253 224 71)"}
              className={"w-8 aspect-square"}
            />
            <button
              onClick={async () => {
                const start = new Date(selectedDate).setHours(10, 0, 0);
                const end = new Date(selectedDate).setHours(22, 0, 0);

                await calenserHandler(start, end);

                setSelectedDate(null);
              }}
              className="ml-auto bg-red-200 font-semibold w-auto px-3 py-2 rounded-md shadow-flat border border-red-600 aspect-btn"
            >
              Not Available
            </button>
          </div>
          <div className="flex items-center bg-bl justify-start gap-6 px-[5%] border-t border-gray-300 pt-3">
            <p>Evening</p>
            <MoonFilledIcon
              fill={"rgba(30 58 138)"}
              className={"w-8 aspect-square"}
            />
            <button
              onClick={async () => {
                const thisDate = new Date(selectedDate).getDate();

                const start = new Date(selectedDate).setHours(22, 0, 0);
                const endDate = new Date(selectedDate).setDate(thisDate + 1);
                const end = new Date(endDate).setHours(10, 0, 0);

                await calenserHandler(start, end);

                setSelectedDate(null);
              }}
              className="ml-auto bg-red-200 font-semibold w-auto px-3 py-2 rounded-md shadow-flat border border-red-600 aspect-btn"
            >
              Not Available
            </button>
          </div>
          <div className="flex items-center bg-bl justify-start gap-6 px-[5%] border-t border-gray-300 pt-3">
            <p>AllDay</p>
            <div className="flex gap-1">
              <SunFilledIcon
                fill={"rgb(253 224 71)"}
                className={"w-8 aspect-square"}
              />
              <MoonFilledIcon
                fill={"rgba(30 58 138)"}
                className={"w-8 aspect-square"}
              />
            </div>
            <button
              onClick={async () => {
                const thisDate = new Date(selectedDate).getDate();

                const start = new Date(selectedDate).setHours(10, 0, 0);
                const endDate = new Date(selectedDate).setDate(thisDate + 1);
                const end = new Date(endDate).setHours(10, 0, 0);

                await calenserHandler(start, end);

                setSelectedDate(null);
              }}
              className="ml-auto bg-red-200 font-semibold w-auto px-3 py-2 rounded-md shadow-flat border border-red-600 aspect-btn"
            >
              Not Available
            </button>
          </div>
        </div>
      ) : (
        <></>
      )}
    </div>
  );
}

export default AvailablityCalender;
