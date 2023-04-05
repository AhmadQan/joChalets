import React from "react";
import HotTopIcon from "../../client/assets/icons/HotTopIcon";
import PoolIcon from "../../client/assets/icons/PoolIcon";
import UtilsIcon from "../molecules/UtilsIcon";

function PoolUtilsItem({ title, item }) {
  return (
    <div className=" relative border bg-white  border-primary80 border-opacity-60 w-[90%] overflow-hidden  min-h-[50vh] shadow-hole rounded-20 gap-8 flex flex-col ">
      <div className=" px-6 py-5 border-b border-primary90 border-opacity-60  flex justify-between items-center">
        <div className="flex flex-col gap-0">
          <p className="text-xl font-bold font text-primary90 ">{title}</p>
          <p className="text-base font-normal text-primary90 "> info </p>
        </div>
        <UtilsIcon className={"bg-primary80 border border-primary10 "}>
          <PoolIcon fill={"rgb(3, 77, 119)"} className={"w-8 aspect-square"} />
        </UtilsIcon>
      </div>
      <div className="flex justify-between px-5  ">
        <div className="flex w-[45%] flex-col items-start gap-3  ">
          <p className="text-lg text-primary90 font-semibold">height</p>
          <div className="flex gap-2 items-end">
            <p className="text-lg font-semibold text-primary90">
              {item?.height || "0"}
            </p>
          </div>
        </div>
        <div className="flex w-[45%] flex-col items-start gap-2  ">
          <p className="text-lg text-primary90 font-semibold">width</p>
          <div className="flex gap-2 items-end">
            <p className="text-lg font-semibold text-primary90">
              {item?.width || "0"}
            </p>
          </div>
        </div>
      </div>
      <div className="flex justify-between px-5 ">
        <div className="flex w-[45%] flex-col items-start gap-3  ">
          <p className="text-lg text-primary90 font-semibold">depth</p>
          <div className="flex gap-2 items-end">
            <p className="text-lg font-semibold text-primary90">
              {item?.depth || "0"}
            </p>
          </div>
        </div>
        {item?.isHeated && (
          <div className="flex w-[45%] flex-col items-start gap-3  ">
            <p className="text-lg text-primary90 font-semibold">Heated</p>
            <div className="flex gap-2 items-end">
              <p className="text-lg font-semibold text-primary90"></p>
              <HotTopIcon
                fill={"rgb(3, 77, 119)"}
                className={"w-8 aspect-square"}
              />
            </div>
          </div>
        )}
      </div>

      <PoolIcon
        fill={"#97B7E8"}
        className={
          "absolute w-2/3 aspect-square blur-sm -right-7 bottom-0 opacity-25 "
        }
      />
    </div>
  );
}

export default PoolUtilsItem;
