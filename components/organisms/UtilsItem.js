import React from "react";
import BathHubIcon from "../../client/assets/icons/BathHubIcon";
import BedBoldIcon from "../../client/assets/icons/BedBoldIcon";
import BedRoomIcon from "../../client/assets/icons/BedRoomIcon";
import HouseBoldIcon from "../../client/assets/icons/HouseBoldIcon";
import UtilsIcon from "../molecules/UtilsIcon";

function UtilsItem({ item, title }) {
  return (
    <div className=" relative border bg-opacity-60 backdrop-blur-md border-primary80 border-opacity-60 w-[90%] overflow-hidden  aspect-square shadow-flat rounded-lg gap-[8%]   flex flex-col p-6 ">
      <div className="flex justify-between items-center">
        <div className="flex flex-col gap-0">
          <p className="text-xl font-bold font text-primary80 ">{title}</p>
          <p className="text-base font-normal text-primary90 "> info </p>
        </div>
        <UtilsIcon className={"bg-primary80 border border-primary10 "}>
          <HouseBoldIcon fill={"#dce7f7"} className={"w-8 aspect-square"} />
        </UtilsIcon>
      </div>
      <div className="flex justify-between">
        <div className="flex w-[45%] flex-col items-start gap-3  border-b  border-primary40">
          <p className="text-lg text-primary90 font-semibold">Bed Rooms</p>
          <div className="flex gap-2 items-end">
            <p className="text-lg font-semibold text-primary80">
              {item?.bedRooms || "0"}
            </p>
            <BedRoomIcon
              fill={"rgb(6, 141, 219)"}
              className={"w-8 aspect-square"}
            />
          </div>
        </div>
        <div className="flex w-[45%] flex-col items-start gap-2  border-b  border-primary40">
          <p className="text-lg text-primary90 font-semibold">Beds</p>
          <div className="flex gap-2 items-end">
            <p className="text-lg font-semibold text-primary80">
              {item?.beds || "0"}
            </p>
            <BedBoldIcon
              fill={"rgb(6, 141, 219)"}
              className={"w-8 aspect-square"}
            />
          </div>
        </div>
      </div>
      <div className="flex justify-between">
        <div className="flex w-[45%] flex-col items-start gap-3  border-b  border-primary40">
          <p className="text-lg text-primary90 font-semibold">Bath Rooms</p>
          <div className="flex gap-2 items-end">
            <p className="text-lg font-semibold text-primary80">
              {item?.bathrooms || "0"}
            </p>
            <BathHubIcon
              fill={"rgb(6, 141, 219)"}
              className={"w-8 aspect-square"}
            />
          </div>
        </div>
      </div>

      <HouseBoldIcon
        fill={"#97B7E8"}
        className={
          "absolute w-2/3 aspect-square blur-sm -right-7 bottom-0 opacity-25 "
        }
      />
    </div>
  );
}

export default UtilsItem;
