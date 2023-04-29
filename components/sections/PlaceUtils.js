import React from "react";

import UtilsItem from "../organisms/UtilsItem";
import GardinUtilsItem from "../organisms/GardinUtilsItem";
import PoolUtilsItem from "../organisms/PoolUtilsItem";
import KitchenUtilsItem from "../organisms/KitchenUtilsItem";

function PlaceUtils({ utils }) {
  return (
    <section
      style={{
        background: "#ffff",
      }}
      className="h-auto w-full bg-white  relative overflow-hidden py-11 px-6 bg-transparent rounded-20"
    >
      <div className="h-full w-full  flex flex-col  gap-8 relative z-10">
        <h2 className=" font-IBMPlexSans font-normal opacity-60 text-secondry50 ">
          What you will need
          <br />{" "}
          <span className="font-bold font-Koulen text-3xl text-primary90">
            We Offer
          </span>
        </h2>
        <div className="flex flex-col items-center gap-8 w-full ">
          <UtilsItem item={utils?.bulding} title={"Bulding"} />
          <GardinUtilsItem item={utils?.garden} title={"Garden"} />
          <PoolUtilsItem item={utils?.pool} title={"Pool"} />
          <KitchenUtilsItem item={utils?.kitchen} title={"Kitchen"} />
        </div>
      </div>
      {/* <div className="  w-3/4 rounded-full absolute h-full -top-[50%] bg-opacity-10 blur-3xl bg-teal-400" />
      <div className="   w-3/4 right-0 rounded-full absolute h-full -bottom-[50%] bg-opacity-25 blur-3xl " /> */}
    </section>
  );
}

export default PlaceUtils;
