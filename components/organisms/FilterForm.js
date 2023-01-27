import React, { useState } from "react";

import { DateRange } from "react-date-range";
import { useDispatch } from "react-redux";
import { toggleFilterModel } from "../../storeSlices/settingSlice";

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

  const [city, setCity] = useState();

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

  return (
    <div className="w-full max-h-screen h-auto flex flex-col  gap-6 backdrop-blur-md overflow-hidden rounded-b-3xl z-30">
      <div className="flex flex-col gap-11 px-5"></div>
      <div className="flex w-full px-3 gap-5">
        <select
          className="w-1/2 h-10   rounded-xl shadow-md"
          type={"select"}
          placeholder="Select the City"
        >
          <option disabled value={1}>
            Choose the City
          </option>
          <option selected value={2}>
            All
          </option>
          <option value={3}>Amman</option>
          <option value={4}>Dead Sea</option>
          <option value={5}>Jarash</option>
        </select>
        <input
          type={"number"}
          defaultValue={1}
          className="w-1/2 h-10 px-3  rounded-xl shadow-md"
          placeholder="Number of guests"
        />
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
        <button className="bg-secondryBase text-base font-semibold font-IBMPlexSans text-gray-800 w-full aspect-btn ">
          Search
        </button>
      </div>
    </div>
  );
}
