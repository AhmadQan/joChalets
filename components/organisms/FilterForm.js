import React, { useState } from "react";

import { DateRange } from "react-date-range";
import { useDispatch } from "react-redux";
import { toggleFilterModel } from "../../storeSlices/settingSlice";
import { fetchPlaces } from "../../storeSlices/placesSlice";

import "react-date-range/dist/styles.css"; // main style file
import "react-date-range/dist/theme/default.css"; // theme css file

import SwitchDayLight from "../molecules/SwitchDayLight";

export default function FilterForm() {
  const dispatch = useDispatch();

  const [dateRanges, setdateRanges] = useState({
    start: new Date(),
    end: new Date(),
  });

  const [isMorningFrom, setisMorningFrom] = useState(true);
  const [isMorningTo, setisMorningTo] = useState(false);
  const [city, setCity] = useState(null);

  const handleSelect = (ranges) => {
    setdateRanges(() => ({
      start: ranges.selection.startDate,
      end: ranges.selection.endDate,
    }));
  };

  const selectionRange = {
    startDate: dateRanges.start,
    endDate: dateRanges.end,
    key: "selection",
  };

  //logic for the API
  const searchHandler = async (e) => {
    e.preventDefault();
    const data = {
      startDate: dateRanges.start.getTime(),
      endDate: dateRanges.end.getTime(),
      city: city,
    };
    console.log("searchData", data);
    dispatch(fetchPlaces(0, data));
  };

  return (
    <div className="w-full max-h-screen h-auto flex flex-col  gap-6 backdrop-blur-md overflow-hidden rounded-b-3xl z-30">
      <div className="flex flex-col gap-11 px-5"></div>
      <div className="flex w-full px-3 gap-5">
        <select
          className="w-1/2 h-10   rounded-xl shadow-md"
          type={"select"}
          value={city}
          onChange={(e) => {
            setCity(e.target.value);
          }}
          placeholder="Select the City"
        >
          <option disabled value={1}>
            Choose the City
          </option>
          <option selected>All</option>
          <option value={"Amman"}>Amman</option>
          <option value={"Dead Sea"}>Dead Sea</option>
          <option value={"Jarash"}>Jarash</option>
          <option value={"Irbid"}>Irbid</option>
        </select>
        <div className="bg-white w-1/2 h-10 px-3 flex justify-center items-center rounded-xl shadow-md">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="h-8 w-8 aspect-square text-secondryDarker opacity-40 "
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z"
            />
          </svg>

          <input
            type={"number"}
            defaultValue={1}
            className=" w-4/5 px-3 h-full  rounded-xl "
            placeholder="Number of guests"
          />
        </div>
      </div>

      <div className=" flex flex-col rounded-b-3xl bg-white overflow-hidden ">
        <div className="flex w-full justify-center px-2 py-2 gap-5">
          <div className=" w-1/2 h-auto   flex justify-start gap-4 items-center text-primaryDarker">
            <p>From</p>
            <p className="bg-gray-200 rounded-md py-2 px-4">
              {dateRanges.start.getDate()}
            </p>
            <SwitchDayLight
              status={isMorningFrom}
              Handler={() => {
                setisMorningFrom(!isMorningFrom);
              }}
            />
          </div>

          <div className=" w-1/2 flex justify-start gap-4 items-center bg-white  text-primaryDarker">
            <p>To</p>
            <p className="bg-gray-200 rounded-md py-2 px-4">
              {dateRanges.end.getDate()}
            </p>
            <SwitchDayLight
              status={isMorningTo}
              Handler={() => {
                setisMorningTo(!isMorningTo);
              }}
            />
          </div>
        </div>
        <DateRange
          showDateDisplay={false}
          scroll={{
            enabled: true,
            monthHeight: 250,
            calendarHeight: 250,
          }}
          months={1}
          weekStartsOn={4}
          className=" w-full"
          minDate={new Date()}
          onChange={handleSelect}
          ranges={[selectionRange]}
          direction="vertical"
          rangeColors={["#22b36b"]}
        />
      </div>
      <div className="flex justify-between ">
        <button
          onClick={() => {
            dispatch(toggleFilterModel());
          }}
          className="bg-redBase text-base  font-semibold font-IBMPlexSans text-gray-200 w-full aspect-btn "
        >
          Cancel
        </button>
        <button
          onClick={async (e) => {
            await searchHandler(e);
            dispatch(toggleFilterModel());
          }}
          className="bg-secondryBase text-base font-semibold font-IBMPlexSans text-gray-800 w-full aspect-btn "
        >
          Search
        </button>
      </div>
    </div>
  );
}
