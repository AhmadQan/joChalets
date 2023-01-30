import React, { useState } from "react";

import { stylesObj } from "../../styles/stylesSpecific";

import Step from "../molecules/Step";
import BookingForm from "../sections/BookingForm";

import CalenderSearch from "../../client/assets/icons/calenderSearch";
import PeopleIcon from "../../client/assets/icons/PeopleIcon";
import CallCallingIcon from "../../client/assets/icons/CallCallingIcon";
import ArrowIcon from "../../client/assets/icons/ArrowIcon";

function QuickActionNav() {
  const [step, setStep] = useState(null);
  const [expanded, setexpanded] = useState(false);
  return (
    <div
      className={`min-h-[10%] ${
        expanded ? " bg-white" : "bg-transparent"
      } flex flex-col fixed bottom-0 w-full justify-center h-auto rounded-t-lg shadow-flat px-6 py-2 z-20`}
    >
      <div className="  w-full   justify-between  flex items-center ">
        <button
          onClick={(e) => {
            e.preventDefault();
            setexpanded(!expanded);
          }}
          className={`${stylesObj.buttons.BTN_SM} flex items-center justify-center  bg-secondry text-secondryLigther font-bold`}
        >
          {expanded ? (
            <ArrowIcon fill={"#FFF"} className={"w-6 aspect-square"} />
          ) : (
            "Book Now"
          )}
        </button>
        <Step>
          <CalenderSearch fill={"#173868"} className={"w-6 aspect-square"} />
        </Step>
        <Step number={2}>
          <PeopleIcon fill={"#173868"} className={"w-6 aspect-square"} />
        </Step>
        <Step number={3}>
          <CallCallingIcon fill={"#173868"} className={"w-6 aspect-square"} />
        </Step>
      </div>
      {expanded && <BookingForm />}
    </div>
  );
}

export default QuickActionNav;
