import React from "react";
import HotTopIcon from "../../client/assets/icons/HotTopIcon";
import PoolIcon from "../../client/assets/icons/PoolIcon";
import UtilsIcon from "../molecules/UtilsIcon";

function PoolUtilsItem({ title, item }) {
  return (
    <div className=" relative border bg-opacity-60 backdrop-blur-md border-primary80 border-opacity-60 w-[90%] overflow-hidden  aspect-square shadow-flat rounded-lg gap-[8%]   flex flex-col p-6 ">
      <div className="flex justify-between items-center">
        <div className="flex flex-col gap-0">
          <p className="text-xl font-bold font text-primary80 ">{title}</p>
          <p className="text-base font-normal text-primary90 "> info </p>
        </div>
        <UtilsIcon className={"bg-primary80 border border-primary10 "}>
          <PoolIcon fill={"#dce7f7"} className={"w-8 aspect-square"} />
        </UtilsIcon>
      </div>
      <div className="flex justify-between">
        <div className="flex w-[45%] flex-col items-start gap-3  border-b  border-primary40">
          <p className="text-lg text-primary90 font-semibold">height</p>
          <div className="flex gap-2 items-end">
            <p className="text-lg font-semibold text-primary80">
              {item?.height || "0"}
            </p>
          </div>
        </div>
        <div className="flex w-[45%] flex-col items-start gap-2  border-b  border-primary40">
          <p className="text-lg text-primary90 font-semibold">width</p>
          <div className="flex gap-2 items-end">
            <p className="text-lg font-semibold text-primary80">
              {item?.width || "0"}
            </p>
          </div>
        </div>
      </div>
      <div className="flex justify-between">
        <div className="flex w-[45%] flex-col items-start gap-3  border-b  border-primary40">
          <p className="text-lg text-primary90 font-semibold">depth</p>
          <div className="flex gap-2 items-end">
            <p className="text-lg font-semibold text-primary80">
              {item?.depth || "0"}
            </p>
          </div>
        </div>
        {item?.isHeated && (
          <div className="flex w-[45%] flex-col items-start gap-3  border-b  border-primary40">
            <p className="text-lg text-primary90 font-semibold">Heated</p>
            <div className="flex gap-2 items-end">
              <p className="text-lg font-semibold text-primary80"></p>
              <HotTopIcon
                fill={"rgb(6, 141, 219)"}
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
