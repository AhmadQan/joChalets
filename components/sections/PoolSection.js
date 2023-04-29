import React from "react";
import HotTopIcon from "../../client/assets/icons/HotTopIcon";
import CorrectIcon from "../../client/assets/icons/CorrectIcon";
import FalseXIcon from "../../client/assets/icons/FalseXIcon";

function PoolSection({ utils }) {
  return (
    <div className="flex flex-col w-full bg-white">
      <div className="flex flex-col px-4 pb-12 ">
        <p className="text-lg font-semibold font-IBMPlexSans leading-none">
          Our Pool
        </p>
        <p className="text-2xl capitalize text-primary50 font-bold font-IBMPlexSans leading-none">
          POOL INFORMATION
        </p>
      </div>
      <div className="flex justify-between px-6">
        <div className="flex flex-col gap-1 ">
          <p className="text-base font-semibold font-IBMPlexSans leading-none">
            HEIGTH
          </p>
          <p className="text-xl capitalize text-secondry60 font-bold font-IBMPlexSans leading-none">
            {utils?.pool?.height || "Not enterd"} CM
          </p>
        </div>
        <div className="flex flex-col gap-1 ">
          <p className="text-base font-semibold font-IBMPlexSans leading-none">
            WIDTH
          </p>
          <p className="text-xl capitalize text-secondry60 font-bold font-IBMPlexSans leading-none">
            {utils?.pool?.width || "Not enterd"} CM
          </p>
        </div>
      </div>
      <img
        className="w-[86%] aspect-square object-cover self-center"
        alt=""
        src="https://firebasestorage.googleapis.com/v0/b/qanadilodesign.appspot.com/o/3d%2Fpool3dnoBG.png?alt=media&token=86729723-f4c0-4c11-8db3-aa44fc43931c"
      />
      <div className="flex justify-between px-6">
        <div className="flex flex-col gap-1 ">
          <p className="text-base font-semibold font-IBMPlexSans leading-none">
            DEPTH
          </p>
          <p className="text-xl capitalize text-secondry60 font-bold font-IBMPlexSans leading-none">
            {utils?.pool?.depth || "Not enterd"} CM
          </p>
        </div>
        <div className="flex flex-col gap-1 ">
          <p className="text-base font-semibold font-IBMPlexSans leading-none">
            POOL HEATED?
          </p>
          <HotTopIcon fill={"#000"} className={"w-8 aspect-square"} />
          {utils?.pool?.isHeated ? (
            <CorrectIcon fill={"#3333"} className={"w-16 aspect-square"} />
          ) : (
            <FalseXIcon fill={"#BF3115"} className={"w-8 aspect-square"} />
          )}
        </div>
      </div>
    </div>
  );
}

export default PoolSection;
