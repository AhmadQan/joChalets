import React from "react";
import FireIcon from "../../client/assets/icons/FireIcon";
import KitchenIcon from "../../client/assets/icons/KitchenIcon";
import SliverWareIcon from "../../client/assets/icons/SliverWareIcon";
import WaterIcon from "../../client/assets/icons/WaterIcon";
import UtilsIcon from "../molecules/UtilsIcon";

function KitchenUtilsItem({ item, title }) {
  return (
    <div className=" relative border bg-opacity-60 backdrop-blur-md border-primary80 border-opacity-60 w-[90%] overflow-hidden  aspect-square shadow-flat rounded-lg gap-[8%]   flex flex-col p-6 ">
      <div className="flex justify-between items-center">
        <div className="flex flex-col gap-0">
          <p className="text-xl font-bold font text-primary80 ">{title}</p>
          <p className="text-base font-normal text-primary90 "> info </p>
        </div>
        <UtilsIcon className={"bg-primary80 border border-primary10 "}>
          <KitchenIcon fill={"#dce7f7"} className={"w-8 aspect-square"} />
        </UtilsIcon>
      </div>
      <div className="flex justify-between">
        {item?.isWater && (
          <div className="flex w-[45%] flex-col items-start gap-3  border-b  border-primary40">
            <p className="text-lg text-primary90 font-semibold">Water</p>
            <WaterIcon
              fill={"rgb(6, 141, 219)"}
              className={"w-8 aspect-square"}
            />
          </div>
        )}
        {item?.isFire && (
          <div className="flex w-[45%] flex-col items-start gap-3  border-b  border-primary40">
            <p className="text-lg text-primary90 font-semibold">Cooking Gas</p>
            <FireIcon
              fill={"rgb(6, 141, 219)"}
              className={"w-8 aspect-square"}
            />
          </div>
        )}
      </div>
      <div className="flex justify-between">
        {item?.isSliverWare && (
          <div className="flex w-[45%] flex-col items-start gap-3  border-b  border-primary40">
            <p className="text-lg text-primary90 font-semibold">Silver Ware</p>
            <SliverWareIcon
              fill={"rgb(6, 141, 219)"}
              className={"w-8 aspect-square"}
            />
          </div>
        )}
      </div>

      <KitchenIcon
        fill={"#97B7E8"}
        className={
          "absolute w-2/3 aspect-square blur-sm -right-7 bottom-0 opacity-25 "
        }
      />
    </div>
  );
}

export default KitchenUtilsItem;
