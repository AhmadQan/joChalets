import React from "react";

import BathHubIcon from "../../client/assets/icons/BathHubIcon";
import BedBoldIcon from "../../client/assets/icons/BedBoldIcon";
import BedRoomIcon from "../../client/assets/icons/BedRoomIcon";
import GardenIcon from "../../client/assets/icons/GardenIcon";
import GrillPlaceIcon from "../../client/assets/icons/GrillPlaceIcon";
import HotTopIcon from "../../client/assets/icons/HotTopIcon";

import HouseBoldIcon from "../../client/assets/icons/HouseBoldIcon";
import MusicBoxIcon from "../../client/assets/icons/MusicBoxIcon";
import PoolIcon from "../../client/assets/icons/PoolIcon";
import SoccerIcon from "../../client/assets/icons/SoccerIcon";

function PlaceUtilsForm({ register, errors }) {
  return (
    <div className="flex flex-col pt-4 gap-6 w-full">
      <p className=" px-6 font-bold font-Koulen text-3xl text-primary90">
        Place Utils
      </p>
      {errors?.description && (
        <p className="text-red-500 font-semibold">
          {errors?.description?.message}
        </p>
      )}
      <div className="flex flex-col gap-6 items-start w-full">
        <div className="flex bg-primary30 w-full justify-start p-5 gap-4 font-bold items-center">
          <HouseBoldIcon fill={"#333"} className={"w-8 aspect-square"} />
          Place Info
        </div>
        <div className="flex flex-col px-[8%]  gap-4">
          <div className="flex justify-start gap-6">
            <BedRoomIcon fill={"#333"} className={"w-8 aspect-square"} />
            <input
              placeholder="2"
              type={"number"}
              {...register("utils.bulding.bedRooms", {
                min: {
                  value: 1,
                  message: "At least one bed or more",
                },
              })}
              className="h-[5vh] w-1/2 border border-primary40 rounded-md "
            />
          </div>
          <div className="flex justify-start gap-6">
            <BedBoldIcon fill={"#333"} className={"w-8 aspect-square"} />
            <input
              placeholder="2"
              type={"number"}
              {...register("utils.bulding.beds", {
                min: {
                  value: 1,
                  message: "At least one bed or more",
                },
              })}
              className="h-[5vh] w-1/2 border border-primary40 rounded-md "
            />
          </div>
          <div className="flex justify-start gap-6">
            <BathHubIcon fill={"#333"} className={"w-8 aspect-square"} />
            <input
              placeholder="2"
              type={"number"}
              {...register("utils.bulding.bathrooms", {
                min: {
                  value: 1,
                  message: "At least one bed or more",
                },
              })}
              className="h-[5vh] w-1/2 border border-primary40 rounded-md "
            />
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-6 items-start w-full">
        <div className="flex bg-primary30 w-full justify-start p-5 gap-4 font-bold items-center">
          <GardenIcon fill={"#333"} className={"w-8 aspect-square"} />
          Garden Info
        </div>
        <div className="flex flex-col px-[8%]  gap-4">
          <div className="flex justify-start   gap-6">
            <SoccerIcon fill={"#333"} className={"w-8 aspect-square"} />
            <input
              placeholder="2"
              type={"checkbox"}
              {...register("utils.garden.isPlayGround", {})}
              className="aspect-square w-6 border border-primary40 rounded-md "
            />
          </div>
          <div className="flex justify-start gap-6">
            <GrillPlaceIcon fill={"#333"} className={"w-8 aspect-square"} />
            <input
              placeholder="2"
              type={"checkbox"}
              {...register("utils.garden.isGrillPlace", {})}
              className="aspect-square w-6 border border-primary40 rounded-md "
            />
          </div>
          <div className="flex justify-start gap-6">
            <MusicBoxIcon fill={"#333"} className={"w-8 aspect-square"} />
            <input
              placeholder="2"
              type={"checkbox"}
              {...register("utils.garden.isDj", {})}
              className="aspect-square w-6 border border-primary40 rounded-md "
            />
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-6 items-start w-full">
        <div className="flex bg-primary30 w-full justify-start p-5 gap-4 font-bold items-center">
          <PoolIcon fill={"#333"} className={"w-8 aspect-square"} />
          Pool Info
        </div>
        <div className="flex flex-col px-[8%]  gap-4">
          <div className="flex justify-start   gap-6">
            <p className="text-sm font-bold">height</p>
            <input
              placeholder="2"
              type={"number"}
              {...register("utils.pool.height", {
                min: {
                  value: 1,
                  message: "min value is 1",
                },
              })}
              className="h-[5vh] w-1/2 border border-primary40 rounded-md "
            />
          </div>
          <div className="flex justify-start   gap-6">
            <p className="text-sm font-bold">width</p>
            <input
              placeholder="2"
              type={"number"}
              {...register("utils.pool.width", {
                min: {
                  value: 1,
                  message: "min value is 1",
                },
              })}
              className="h-[5vh] w-1/2 border border-primary40 rounded-md "
            />
          </div>
          <div className="flex justify-start   gap-6">
            <p className="text-sm font-bold">depth</p>
            <input
              placeholder="2"
              type={"number"}
              {...register("utils.pool.depth", {
                min: {
                  value: 1,
                  message: "min value is 1",
                },
              })}
              className="h-[5vh] w-1/2 border border-primary40 rounded-md "
            />
          </div>

          <div className="flex justify-start gap-6">
            <HotTopIcon fill={"#333"} className={"w-8 aspect-square"} />
            <input
              placeholder="2"
              type={"checkbox"}
              {...register("utils.pool.isHeated", {})}
              className="aspect-square w-6 border border-primary40 rounded-md "
            />
          </div>
        </div>
      </div>
      <div className="w-full flex justify-end">
        <button
          type="submit"
          className="w-[26%] bg-secondry80 text-secondry10 font-bold  aspect-btn border border-primary40 rounded-lg"
        >
          save
        </button>
      </div>
    </div>
  );
}

export default PlaceUtilsForm;
