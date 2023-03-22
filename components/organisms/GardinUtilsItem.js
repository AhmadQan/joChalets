import React from "react";
import SoccerIcon from "../../client/assets/icons/SoccerIcon";
import GrillPlaceIcon from "../../client/assets/icons/GrillPlaceIcon";
import MusicBoxIcon from "../../client/assets/icons/MusicBoxIcon";
import GardenIcon from "../../client/assets/icons/GardenIcon";
import UtilsIcon from "../molecules/UtilsIcon";

function GardinUtilsItem({ item, title }) {
  return (
    <div className=" relative border bg-opacity-60 backdrop-blur-md border-primary80 border-opacity-60 w-[90%] overflow-hidden  aspect-square shadow-flat rounded-lg gap-[8%]   flex flex-col p-6 ">
      <div className="flex justify-between items-center">
        <div className="flex flex-col gap-0">
          <p className="text-xl font-bold font text-primary80 ">{title}</p>
          <p className="text-base font-normal text-primary90 "> info </p>
        </div>
        <UtilsIcon className={"bg-primary80 border border-primary10 "}>
          <GardenIcon fill={"#dce7f7"} className={"w-8 aspect-square"} />
        </UtilsIcon>
      </div>
      <div className="flex justify-between">
        {item?.isPlayGround && (
          <div className="flex w-[45%] flex-col items-start gap-3  border-b  border-primary40">
            <p className="text-lg text-primary90 font-semibold">Play ground</p>
            <SoccerIcon
              fill={"rgb(6, 141, 219)"}
              className={"w-8 aspect-square"}
            />
          </div>
        )}
        {item?.isGrillPlace && (
          <div className="flex w-[45%] flex-col items-start gap-3  border-b  border-primary40">
            <p className="text-lg text-primary90 font-semibold">Grill Place</p>
            <GrillPlaceIcon
              fill={"rgb(6, 141, 219)"}
              className={"w-8 aspect-square"}
            />
          </div>
        )}
      </div>
      <div className="flex justify-between">
        {item?.isDj && (
          <div className="flex w-[45%] flex-col items-start gap-3  border-b  border-primary40">
            <p className="text-lg text-primary90 font-semibold">Music DJ</p>
            <MusicBoxIcon
              fill={"rgb(6, 141, 219)"}
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
