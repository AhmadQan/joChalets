import React, { useState } from "react";
import { Calendar } from "react-date-range";
import { Controller, useForm } from "react-hook-form";

import MoonFilledIcon from "../../client/assets/icons/MoonFilledIcon";
import SunFilledIcon from "../../client/assets/icons/SunFilledIcon";
import CalenderSearch from "../../client/assets/icons/calenderSearch";

function TimeToggle({ field, id, text, control, chosenDate }) {
  const [isCalenderOpen, setIsCalenderOpen] = useState(false);

  return (
    <div className="flex flex-col items-start bg-white border border-secondry20  w-[49%] h-full rounded-xl overflow-hidden justify-start gap-[6.1%]">
      <div className="  flex justify-start items-center  gap-2">
        <div className="w-auto aspect-square p-3 bg-primary90 rounded-xl shadow-lg ">
          <CalenderSearch
            onClick={() => {
              setIsCalenderOpen(!isCalenderOpen);
            }}
            fill={"#fff"}
            className={"aspect-square h-8"}
          />
        </div>
        <p className="text-xl text-primary90  font-bold font-IBMPlexSans ">
          {text}
        </p>
      </div>
      <p className="font-normal ml-2 text-lg">{chosenDate}</p>

      <div className="flex items-center gap-2 h-[30%] mt-auto">
        <input
          {...field}
          type="radio"
          id={`morning/${id}`}
          name="dayTime"
          value="Nigth"
          className="hidden"
        />

        <label
          className={` ${
            field.value === "Nigth" ? "hidden" : ""
          }  flex justify-start items-center h-full aspect-video bg-yellow-100 rounded-full border-2 border-yellow-300 px-1`}
          for={`morning/${id}`}
          htmlFor={`morning/${id}`}
        >
          <SunFilledIcon
            fill={"rgb(253 224 71)"}
            className={"w-1/3 aspect-square"}
          />
        </label>

        <input
          {...field}
          type="radio"
          id={`nigth/${id}`}
          name="dayTime"
          value="Morning"
          className="hidden"
        />
        <label
          className={` ${
            field.value === "Morning" ? "hidden" : ""
          } flex justify-end items-center h-full aspect-video bg-primary100 rounded-full border-2 border-primary50 px-1`}
          for={`nigth/${id}`}
          htmlFor={`nigth/${id}`}
        >
          <MoonFilledIcon fill={"#E8F7FF"} className={"w-1/3 aspect-square"} />
        </label>
      </div>

      {isCalenderOpen && (
        <div className="absolute top-0 left-0">
          <Controller
            name={`${id}Date`}
            control={control}
            rules={{
              required: true,
            }}
            render={({ field }) => (
              <div className="flex flex-col">
                <Calendar
                  onChange={field.onChange}
                  date={field.value}
                  minDate={new Date()}
                />
                <button
                  onClick={() => {
                    setIsCalenderOpen(!isCalenderOpen);
                  }}
                  className="w-full aspect-longBton text-center flex justify-center items-center bg-primary50 text-primary90 font-bold"
                >
                  Submit
                </button>
              </div>
            )}
          />
        </div>
      )}
    </div>
  );
}

export default TimeToggle;
