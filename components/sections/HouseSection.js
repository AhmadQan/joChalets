import React from "react";
import CorrectIcon from "../../client/assets/icons/CorrectIcon";
import FalseXIcon from "../../client/assets/icons/FalseXIcon";
import BedRoomIcon from "../../client/assets/icons/BedRoomIcon";
import BedBoldIcon from "../../client/assets/icons/BedBoldIcon";
import BathHubIcon from "../../client/assets/icons/BathHubIcon";
import SliverWareIcon from "../../client/assets/icons/SliverWareIcon";
import AirCondtionIcon from "../../client/assets/icons/AirCondtionIcon";

function HouseSection({ utils }) {
  return (
    <div className="flex flex-col w-full bg-white">
      <div className="flex flex-col px-4 pb-12 ">
        <p className="text-lg font-semibold font-IBMPlexSans leading-none">
          Our Building
        </p>
        <p className="text-2xl capitalize text-primary50 font-bold font-IBMPlexSans leading-none">
          BUILDING INFORMATION
        </p>
      </div>
      <div className="flex justify-between px-6">
        <div className="flex flex-col gap-1 ">
          <p className="text-base font-semibold font-IBMPlexSans leading-none">
            Bed Rooms
          </p>

          <p className="text-xl capitalize text-black font-bold font-IBMPlexSans leading-none">
            {utils?.bulding?.bedRooms || "Not enterd"}
          </p>
          <BedRoomIcon fill={"#5AED75"} className={"w-8 aspect-square"} />
        </div>
        <div className="flex flex-col gap-1 ">
          <p className="text-base font-semibold font-IBMPlexSans leading-none">
            Beds
          </p>

          <p className="text-xl capitalize text-black font-bold font-IBMPlexSans leading-none">
            {utils?.bulding?.beds || "Not enterd"}
          </p>
          <BedBoldIcon fill={"#5AED75"} className={"w-8 aspect-square"} />
        </div>
        <div className="flex flex-col gap-1 ">
          <p className="text-base font-semibold font-IBMPlexSans leading-none">
            Bath Rooms
          </p>

          <p className="text-xl capitalize text-black font-bold font-IBMPlexSans leading-none">
            {utils?.bulding?.bathrooms || "Not enterd"}
          </p>
          <BathHubIcon fill={"#5AED75"} className={"w-8 aspect-square"} />
        </div>
      </div>
      <img
        className="w-[86%] aspect-square object-cover self-center"
        alt=""
        src="https://firebasestorage.googleapis.com/v0/b/qanadilodesign.appspot.com/o/3d%2Fhouse3dnoBG.png?alt=media&token=f137ee8e-81fb-46b8-bb30-910948a644ff"
      />
      <div className="flex justify-between px-6">
        <div className="flex flex-col gap-1 ">
          <p className="text-base font-semibold font-IBMPlexSans leading-none">
            Air Condtion ?
          </p>
          <AirCondtionIcon fill={"#000"} className={"w-8 aspect-square"} />
          {utils?.bulding?.isAirCondtion ? (
            <CorrectIcon fill={"#5AED75"} className={"w-16 aspect-square"} />
          ) : (
            <FalseXIcon fill={"#BF3115"} className={"w-8 aspect-square"} />
          )}
        </div>
        <div className="flex flex-col gap-1 ">
          <p className="text-base font-semibold font-IBMPlexSans leading-none">
            kitchen ware ?
          </p>
          <SliverWareIcon fill={"#000"} className={"w-8 aspect-square"} />
          {utils?.kitchen?.isSliverWare ? (
            <CorrectIcon fill={"#5AED75"} className={"w-16 aspect-square"} />
          ) : (
            <FalseXIcon fill={"#BF3115"} className={"w-8 aspect-square"} />
          )}
        </div>
      </div>
    </div>
  );
}

export default HouseSection;
