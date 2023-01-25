import React, { useState } from "react";

import { DateRange } from "react-date-range";

import "react-date-range/dist/styles.css"; // main style file
import "react-date-range/dist/theme/default.css"; // theme css file

export default function FilterForm() {
  const [dateRanges, setdateRanges] = useState({
    start: new Date(),
    end: new Date(),
  });
  const exitButton = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={2.5}
      stroke="currentColor"
      className="w-10 h-10 text-red border-2 border-red rounded-full p-1 "
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M6 18L18 6M6 6l12 12"
      />
    </svg>
  );

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
    <div className="w-full aspect-video flex-col bg-white bg-opacity-60 p-5 backdrop-blur-md top-1/3 fixed rounded-3xl z-30">
      <div className="flex justify-between">
        <h1 className="text-xl font-IBMPlexSans font-semibold">
          find a place with a few clicks
        </h1>{" "}
        {exitButton}
      </div>
      <div className="flex flex-col">
        <DateRange
          minDate={new Date()}
          onChange={handleSelect}
          ranges={[selectionRange]}
          direction="vertical"
        />
        <button
          onClick={(e) => {
            e.preventDefault();
            console.log(
              dateRanges.start.getTime() + " " + dateRanges.end.getTime()
            );
          }}
        >
          Click
        </button>
      </div>
    </div>
  );
}
