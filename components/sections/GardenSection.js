import React from "react";
import BedRoomIcon from "../../client/assets/icons/BedRoomIcon";
import BedBoldIcon from "../../client/assets/icons/BedBoldIcon";
import BathHubIcon from "../../client/assets/icons/BathHubIcon";
import AirCondtionIcon from "../../client/assets/icons/AirCondtionIcon";
import CorrectIcon from "../../client/assets/icons/CorrectIcon";
import FalseXIcon from "../../client/assets/icons/FalseXIcon";
import SliverWareIcon from "../../client/assets/icons/SliverWareIcon";
import GrillPlaceIcon from "../../client/assets/icons/GrillPlaceIcon";
import PlayAreaIcon from "../../client/assets/icons/PlayAreaIcon";
import ParkingIcon from "../../client/assets/icons/ParkingIcon";
import GardenIcon from "../../client/assets/icons/GardenIcon";
import MusicBoxIcon from "../../client/assets/icons/MusicBoxIcon";

function GardenSection({ utils }) {
  return (
    <div className="flex flex-col w-full bg-white">
      <div className="flex flex-col px-4 py-12 mb-12">
        <p className="text-lg font-semibold font-IBMPlexSans leading-none">
          Our Garden
        </p>
        <p className="text-2xl capitalize text-primary50 font-bold font-IBMPlexSans leading-none">
          GARDEN INFORMATION
        </p>
      </div>
      <div className="flex justify-between px-6">
        <div className="flex flex-col gap-1 ">
          <p className="text-base font-semibold font-IBMPlexSans leading-none">
            fire place ?
          </p>
          <GrillPlaceIcon fill={"#000"} className={"w-10 aspect-square"} />
          {utils?.garden?.isGrillPlace ? (
            <CorrectIcon fill={"#5AED75"} className={"w-16 aspect-square"} />
          ) : (
            <FalseXIcon fill={"#BF3115"} className={"w-8 aspect-square"} />
          )}
        </div>
        <div className="flex flex-col gap-1 ">
          <p className="text-base font-semibold font-IBMPlexSans leading-none">
            play area ?
          </p>
          <PlayAreaIcon fill={"#000"} className={"w-10 aspect-square"} />
          {utils?.garden?.isPlayGround ? (
            <CorrectIcon fill={"#5AED75"} className={"w-16 aspect-square"} />
          ) : (
            <FalseXIcon fill={"#BF3115"} className={"w-8 aspect-square"} />
          )}
        </div>
        <div className="flex flex-col gap-1 ">
          <p className="text-base font-semibold font-IBMPlexSans leading-none">
            park ?
          </p>
          <ParkingIcon fill={"#000"} className={"w-8 aspect-square"} />
          {utils?.garden?.park ? (
            <CorrectIcon fill={"#5AED75"} className={"w-16 aspect-square"} />
          ) : (
            <FalseXIcon fill={"#BF3115"} className={"w-8 aspect-square"} />
          )}
        </div>
      </div>
      <img
        className="w-[86%] aspect-square object-cover self-center"
        alt=""
        src="https://firebasestorage.googleapis.com/v0/b/qanadilodesign.appspot.com/o/3d%2Fgarden3dnoBG.png?alt=media&token=e60bfb78-caac-40f3-8918-174a2b28dcc1"
      />
      <div className="flex justify-between px-6">
        <div className="flex flex-col gap-1 ">
          <p className="text-base font-semibold font-IBMPlexSans leading-none">
            music ?
          </p>
          <MusicBoxIcon fill={"#000"} className={"w-8 aspect-square"} />
          {utils?.garden?.isDj ? (
            <CorrectIcon fill={"#5AED75"} className={"w-16 aspect-square"} />
          ) : (
            <FalseXIcon fill={"#BF3115"} className={"w-8 aspect-square"} />
          )}
        </div>
        <div className="flex flex-col gap-1 ">
          <p className="text-base font-semibold font-IBMPlexSans leading-none">
            outside Area
          </p>
          <GardenIcon fill={"#000"} className={"w-8 aspect-square"} />
          {utils?.garden?.outsideSeats ? (
            <CorrectIcon fill={"#5AED75"} className={"w-16 aspect-square"} />
          ) : (
            <FalseXIcon fill={"#BF3115"} className={"w-8 aspect-square"} />
          )}
        </div>
      </div>
    </div>
  );
}

export default GardenSection;
