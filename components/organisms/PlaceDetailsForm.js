import React from "react";
import { useUser } from "@auth0/nextjs-auth0/client";
import { useForm, useFieldArray } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";

import { updatePlaces } from "../../storeSlices/placeDetailSlice";

import HouseBoldIcon from "../../client/assets/icons/HouseBoldIcon";
import BedRoomIcon from "../../client/assets/icons/BedRoomIcon";
import BedBoldIcon from "../../client/assets/icons/BedBoldIcon";
import BathHubIcon from "../../client/assets/icons/BathHubIcon";
import GardenIcon from "../../client/assets/icons/GardenIcon";
import SoccerIcon from "../../client/assets/icons/SoccerIcon";
import GrillPlaceIcon from "../../client/assets/icons/GrillPlaceIcon";
import MusicBoxIcon from "../../client/assets/icons/MusicBoxIcon";
import PoolIcon from "../../client/assets/icons/PoolIcon";
import HotTopIcon from "../../client/assets/icons/HotTopIcon";
import KitchenIcon from "../../client/assets/icons/KitchenIcon";
import WaterIcon from "../../client/assets/icons/WaterIcon";
import SliverWareIcon from "../../client/assets/icons/SliverWareIcon";
import FireIcon from "../../client/assets/icons/FireIcon";
import CirculeAddIcon from "../../client/assets/icons/CirculeAddIcon";
import TrashIcon from "../../client/assets/icons/TrashIcon";
import DollarCirculeIcon from "../../client/assets/icons/DollarCirculeIcon";
import LoaderDrops from "../molecules/LoaderDrops";

function PlaceDetailsForm({ placeInfo, placeID, closeHandler, loading }) {
  const dispatch = useDispatch();

  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm({
    defaultValues: {
      city: placeInfo?.name,
      price: placeInfo?.price,
      description: placeInfo?.description,
      utils: placeInfo?.utils?.length || {},
      rules: placeInfo?.rules,
    },
  });

  const { fields, append, remove } = useFieldArray({
    control,
    name: "rules",
  });

  const updateHandler = async (placeID, data) => {
    dispatch(updatePlaces(placeID, data));
  };

  const editSubmitHandler = async (data) => {
    await updateHandler(placeID, data);
    closeHandler();
  };

  return (
    <div className="flex flex-col pt-4 gap-6 w-full bg-white">
      {loading ? (
        <div className="h-screen">
          <LoaderDrops />
        </div>
      ) : (
        <form
          onSubmit={handleSubmit(editSubmitHandler)}
          className="w-full flex flex-col gap-8"
        >
          <div className="w-full flex flex-col gap-5">
            <p className=" px-6 font-bold font-Koulen text-3xl text-primary90">
              Genral Info
            </p>
            {errors?.city && (
              <p className="text-red-500 font-semibold">
                {errors?.city?.message}
              </p>
            )}
            <div className="flex flex-col gap-2">
              <p className="text-lg font-bold text-primary90 ml-3">City</p>
              <input
                type={"text"}
                {...register("city", {
                  required: "Please enter place City",
                })}
                className="aspect-textField w-full border rounded-xl border-primary40"
              />
            </div>
            <div className="flex flex-col gap-2">
              <p className="text-lg font-bold text-primary90 ml-3">weekends</p>
              <div className="flex gap-2">
                <DollarCirculeIcon
                  fill={"#22B36B"}
                  className={"w-8 aspect-square"}
                />
                <input
                  type={"number"}
                  {...register("price.weekend", {
                    required: "Please enter place City",
                  })}
                  className=" flex-1 aspect-textField border  border-primary40 rounded-lg"
                />
              </div>
            </div>
            <div className="flex flex-col gap-2">
              <p className="text-lg font-bold text-primary90 ml-3">
                Normal Days
              </p>
              <div className="flex gap-2">
                <DollarCirculeIcon
                  fill={"#22B36B"}
                  className={"w-8 aspect-square"}
                />
                <input
                  type={"number"}
                  {...register("price.normalDays", {
                    required: "Please enter place City",
                  })}
                  className="flex-1 aspect-textField border  border-primary40 rounded-lg"
                />
              </div>
            </div>
          </div>
          <div className="w-full flex flex-col gap-5">
            <p className=" px-6 font-bold font-Koulen text-3xl text-primary90">
              About Us
            </p>
            {errors?.description && (
              <p className="text-red-500 font-semibold">
                {errors?.description?.message}
              </p>
            )}
            <textarea
              {...register("description", {
                required: "Please enter description",
              })}
              className="h-[25vh] w-full border border-primary40"
            />
          </div>

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
                  <GrillPlaceIcon
                    fill={"#333"}
                    className={"w-8 aspect-square"}
                  />
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
            <div className="flex flex-col gap-6 items-start w-full">
              <div className="flex bg-primary30 w-full justify-start p-5 gap-4 font-bold items-center">
                <KitchenIcon fill={"#333"} className={"w-8 aspect-square"} />
                Kitchen Info
              </div>
              <div className="flex flex-col px-[8%]  gap-4">
                <div className="flex justify-start   gap-6">
                  <WaterIcon fill={"#333"} className={"w-8 aspect-square"} />
                  <input
                    placeholder="2"
                    type={"checkbox"}
                    {...register("utils.kitchen.isWater", {})}
                    className="aspect-square w-6 border border-primary40 rounded-md "
                  />
                </div>
                <div className="flex justify-start gap-6">
                  <SliverWareIcon
                    fill={"#333"}
                    className={"w-8 aspect-square"}
                  />
                  <input
                    placeholder="2"
                    type={"checkbox"}
                    {...register("utils.kitchen.isSliverWare", {})}
                    className="aspect-square w-6 border border-primary40 rounded-md "
                  />
                </div>
                <div className="flex justify-start gap-6">
                  <FireIcon fill={"#333"} className={"w-8 aspect-square"} />
                  <input
                    placeholder="2"
                    type={"checkbox"}
                    {...register("utils.kitchen.isFire", {})}
                    className="aspect-square w-6 border border-primary40 rounded-md "
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-4">
            <p className=" px-6 font-bold font-Koulen text-3xl text-primary90">
              Place Rules
            </p>
            <div
              onClick={() => {
                append({ rules: "Example Rule 1" });
              }}
              className="w-[42%] rounded-xl shadow-flat aspect-btn border border-secondry50 flex justify-center items-center "
            >
              Add New Rule
              <CirculeAddIcon
                fill={"#92C344"}
                className={"w-6 aspect-square"}
              />
            </div>

            {fields?.map((field, i) => {
              return (
                <div
                  className="flex justify-between h-[6vh] w-full"
                  id={field.id}
                >
                  <input
                    {...register(`rules.${i}`)}
                    className="h-full aspect-textField border border-primary40 rounded-lg"
                    id={field.id}
                  ></input>
                  <div
                    onClick={() => {
                      remove(i);
                    }}
                    className="w-8 aspect-square "
                  >
                    <TrashIcon
                      className={"w-full aspect-square"}
                      fill={"rgb(239, 68, 68)"}
                    />
                  </div>
                </div>
              );
            })}
            <div className="w-full flex justify-end">
              <button className="w-[26%] bg-red-400 text-secondry10 font-bold  aspect-btn border border-primary40 rounded-lg">
                Cancel
              </button>
              <button
                type="submit"
                className="w-[26%] bg-secondry80 text-secondry10 font-bold  aspect-btn border border-primary40 rounded-lg"
              >
                save
              </button>
            </div>
          </div>
        </form>
      )}
    </div>
  );
}

export default PlaceDetailsForm;
