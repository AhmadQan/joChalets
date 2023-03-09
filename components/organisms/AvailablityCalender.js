import React, { useEffect } from "react";

import { Calendar } from "react-date-range";
import { useDispatch, useSelector } from "react-redux";

import { getPlaceAvailablity } from "../../storeSlices/placesSlice";
import CloseCirculeIcon from "../../client/assets/icons/CloseCirculeIcon";

import "react-date-range/dist/styles.css"; // main style file
import "react-date-range/dist/theme/default.css"; // theme css file

function AvailablityCalender({ placeID, closeHandler }) {
  const PlaceState = useSelector((state) => state.places);
  const { err, loading, placeAvailablity } = PlaceState;

  const dispatch = useDispatch();

  useEffect(() => {
    if (placeAvailablity) return;
    dispatch(getPlaceAvailablity(placeID));
  }, [placeAvailablity]);

  const disabledDates = placeAvailablity
    ?.filter((item) => {
      return !item?.availableMorning && !item?.availableEvening;
    })
    .map((item) => {
      return new Date(item.date);
    });

  const availableAtEvening = placeAvailablity
    ?.filter((item) => {
      return !item?.availableMorning && item?.availableEvening;
    })
    .map((item) => {
      return new Date(item.date);
    });

  const availableAtMorning = placeAvailablity
    ?.filter((item) => {
      return item?.availableMorning && !item?.availableEvening;
    })
    .map((item) => {
      return new Date(item.date);
    });

  function renderCustomDayContent(day) {
    // Here you can add any custom content for the day cell

    let isMorning = false;
    let isEvening = false;

    availableAtMorning?.forEach((date) => {
      if (date.toDateString() === day.toDateString()) {
        isMorning = true;
      }
    });
    availableAtEvening?.forEach((date) => {
      if (date.toDateString() === day.toDateString()) {
        isEvening = true;
      }
    });

    return (
      <div
        className={`text-green-700 ${
          isMorning ? "bg-yellow-100" : isEvening ? "bg-blue-400" : ""
        } w-full`}
      >
        <span>{day.getDate()}</span>
      </div>
    );
  }

  return (
    <div className="fixed bg-opacity-60 backdrop-blur-sm bg-re z-20 w-screen h-screen bg-primary90 flex flex-col justify-start gap-[20%]">
      <CloseCirculeIcon
        onClick={() => {
          closeHandler();
        }}
        fill={"rgb(248, 113, 113)"}
        className={"w-10 aspect-square"}
      />
      <Calendar
        disabledDates={disabledDates}
        dayContentRenderer={renderCustomDayContent}
        rangeColors={["#C8F9D1", "#C8F9D1", "#C8F9D1"]}
        onChange={(date) => {
          console.log(date.toLocaleString());
        }}
        minDate={new Date()}
      />
    </div>
  );
}

export default AvailablityCalender;
