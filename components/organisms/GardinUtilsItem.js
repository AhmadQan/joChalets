import React from "react";
import SoccerIcon from "../../client/assets/icons/SoccerIcon";
import GrillPlaceIcon from "../../client/assets/icons/GrillPlaceIcon";
import MusicBoxIcon from "../../client/assets/icons/MusicBoxIcon";
import GardenIcon from "../../client/assets/icons/GardenIcon";
import UtilsIcon from "../molecules/UtilsIcon";

function GardinUtilsItem({ item, title }) {
  return (
    <div className="bg-white relative border gap-8  border-primary80 border-opacity-60 w-[90%] overflow-hidden   shadow-hole rounded-20 min-h-[50vh]  flex flex-col ">
      <div className="flex justify-between  px-6 py-5 items-center border-b border-primary90 border-opacity-60">
        <div className="flex flex-col gap-0">
          <p className="text-xl font-bold font text-primary90 ">{title}</p>
          <p className="text-base font-normal text-primary90 "> info </p>
        </div>
        <UtilsIcon className={"bg-primary80 border border-primary10 "}>
          <GardenIcon
            fill={"rgb(3, 77, 119)"}
            className={"w-8 aspect-square"}
          />
        </UtilsIcon>
      </div>
      <div className="flex justify-between px-4">
        {item?.isPlayGround && (
          <div className="flex w-[45%] flex-col items-start gap-3  ">
            <p className="text-lg text-primary90 font-semibold">Play ground</p>
            <SoccerIcon
              fill={"rgb(3, 77, 119)"}
              className={"w-8 aspect-square"}
            />
          </div>
        )}
        {item?.isGrillPlace && (
          <div className="flex w-[45%] flex-col items-start gap-3  ">
            <p className="text-lg text-primary90 font-semibold">Grill Place</p>
            <GrillPlaceIcon
              fill={"rgb(3, 77, 119)"}
              className={"w-8 aspect-square"}
            />
          </div>
        )}
      </div>
      <div className="flex justify-between px-4">
        {item?.isDj && (
          <div className="flex w-[45%] flex-col items-start gap-3  ">
            <p className="text-lg text-primary90 font-semibold">Music DJ</p>
            <MusicBoxIcon
              fill={"rgb(3, 77, 119)"}
              className={"w-8 aspect-square"}
            />
          </div>
        )}
      </div>

      <GardenIcon
        fill={"#97B7E8"}
        className={
          "absolute w-2/3 aspect-square blur-sm -right-7 bottom-0 opacity-25 "
        }
      />
    </div>
  );
}

export default GardinUtilsItem;
