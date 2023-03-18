import React from "react";
import UtilsIcon from "../molecules/UtilsIcon";
import HouseBoldIcon from "../../client/assets/icons/HouseBoldIcon";

import UtilsItem from "../organisms/UtilsItem";

function PlaceUtils({ utils }) {
  console.log("utils", utils);
  return (
    <section
      style={{ background: "#FAFAFA" }}
      className="h-auto w-full  relative overflow-hidden py-11 px-6 "
    >
      <div className="h-full w-full  flex flex-col  gap-8 relative z-10">
        <h2 className=" font-IBMPlexSans font-normal opacity-60 text-primary90 ">
          What you will need
          <br />{" "}
          <span className="font-bold font-Koulen text-3xl text-primary80">
            We Offer
          </span>
        </h2>
        <div className="flex flex-col items-center gap-8 w-full ">
          <UtilsItem item={utils?.bulding} title={"Bulding"} />
        </div>
      </div>
      <div className="  w-3/4 rounded-full absolute h-full -top-[50%] bg-opacity-10 blur-3xl bg-teal-400" />
      <div className="   w-3/4 right-0 rounded-full absolute h-full -bottom-[50%] bg-opacity-25 blur-3xl " />
    </section>
  );
}

export default PlaceUtils;
