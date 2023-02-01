import React from "react";
import UtilsIcon from "../molecules/UtilsIcon";
import HouseBoldIcon from "../../client/assets/icons/HouseBoldIcon";

import UtilsItem from "../organisms/UtilsItem";

function PlaceUtils() {
  return (
    <section
      style={{ background: "#FAFAFA" }}
      className="h-auto w-full  relative overflow-hidden py-11 px-6 z-10"
    >
      <div className="h-full w-full  flex flex-col  gap-8">
        <h2 className=" font-IBMPlexSans font-normal opacity-60 text-primaryDark">
          What you will need
          <br />{" "}
          <span className="font-bold font-Koulen text-3xl text-primary">
            We Offer
          </span>
        </h2>
        <div className="flex flex-col gap-8 w-full ">
          <div className="flex justify-between">
            <UtilsItem />
            <UtilsItem />
          </div>
          <div className="flex justify-between">
            <UtilsItem />
            <UtilsItem />
          </div>
        </div>
      </div>
      <div className=" -z-10 w-3/4 rounded-full absolute h-full -top-[50%] bg-opacity-10 blur-3xl bg-teal-400" />
      <div className=" -z-10  w-3/4 right-0 rounded-full absolute h-full -bottom-[50%] bg-opacity-25 blur-3xl bg-primaryBase" />
    </section>
  );
}

export default PlaceUtils;
