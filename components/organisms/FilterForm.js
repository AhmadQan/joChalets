import React, { useState } from "react";

import { useDispatch } from "react-redux";
import { toggleFilterModel } from "../../storeSlices/settingSlice";
import { fetchPlaces } from "../../storeSlices/placesSlice";
import { useForm, Controller } from "react-hook-form";

import "react-date-range/dist/styles.css"; // main style file
import "react-date-range/dist/theme/default.css"; // theme css file

import CloseCirculeIcon from "../../client/assets/icons/CloseCirculeIcon";

import { Calendar } from "react-date-range";
import CalenderSearch from "../../client/assets/icons/calenderSearch";
import SunFilledIcon from "../../client/assets/icons/SunFilledIcon";
import MoonFilledIcon from "../../client/assets/icons/MoonFilledIcon";
import GlobalSearchIcon from "../../client/assets/icons/GlobalSearchIcon";
import LoaderDrops from "../molecules/LoaderDrops";

export default function FilterForm({ loading, placesRef }) {
  //calender controll
  const [fromCalenderOpen, setFromCalenderOpen] = useState(false);
  const [toCalenderOpen, setToCalenderOpen] = useState(false);

  const dispatch = useDispatch();

  const {
    register,
    handleSubmit,
    watch,
    control,
    formState: { errors },
  } = useForm();

  //logic for the API
  const searchHandler = async (data) => {
    const fromDate = new Date(data?.from?.startDate);
    const toDate = new Date(data?.to?.startDate);

    if (data?.from?.DayTime === "morning") {
      fromDate.setHours(10, 0, 0);
    } else {
      fromDate.setHours(22, 0, 0);
    }

    if (data?.to?.DayTime === "morning") {
      toDate.setHours(10, 0, 0);
    } else {
      toDate.setHours(22, 0, 0);
    }
    const dataToApi = {
      startDate: fromDate.getTime(),
      endDate: toDate.getTime(),
      city: data?.city,
    };

    dispatch(fetchPlaces(0, dataToApi));
  };

  const submitHandler = async (data) => {
    await searchHandler(data);

    dispatch(toggleFilterModel());
  };

  return (
    <div className=" w-full h-full bg-black bg-opacity-25 flex justify-center items-center">
      {loading ? (
        <LoaderDrops />
      ) : (
        <div className="flex flex-col  w-[86.511vw] h-full pt-6 gap-6">
          <div className="w-full ">
            <div
              onClick={async () => {
                dispatch(toggleFilterModel());
              }}
              className="bg-white w-10 aspect-square rounded-full flex justify-center items-center shadow-flat"
            >
              <CloseCirculeIcon
                fill={"rgb(239, 68, 68)"}
                className={"w-9  aspect-square"}
              />
            </div>
          </div>

          <form
            onSubmit={handleSubmit(submitHandler)}
            className="flex-1 w-full box-border overflow-y-scroll  justify-start flex overflow-hidden items-center flex-col gap-[5.1%] pt-3"
          >
            <div className="w-full  flex flex-col bg-white border  border-primary40 rounded-xl py-6 px-4">
              <p className="font-semibold text-lg">Start Date</p>

              <div
                className={` ${
                  fromCalenderOpen ? "" : "hidden"
                } absolute top-0 left-0 z-20 w-full h-screen bg-primary90 bg-opacity-40 backdrop-blur-md flex flex-col justify-center `}
              >
                <Controller
                  control={control}
                  rules={{ required: "Please select the starting Date" }}
                  name={"from.startDate"}
                  render={({ field: { onChange, value } }) => (
                    <Calendar
                      rangeColors={["#C8F9D1", "#C8F9D1", "#C8F9D1"]}
                      minDate={new Date()}
                      date={value}
                      onChange={onChange}
                    />
                  )}
                />
                <button
                  onClick={() => {
                    setFromCalenderOpen(!fromCalenderOpen);
                  }}
                  className="w-full aspect-longBton bg-secondry50 rounded-xl"
                >
                  Confirm
                </button>
              </div>

              <div className="w-full flex justify-between">
                <div className="w-[65.5%] flex flex-col gap-4">
                  <div
                    onClick={() => {
                      setFromCalenderOpen(!fromCalenderOpen);
                    }}
                    className={` border w-full ${
                      errors?.from?.startDate
                        ? "border-red-500"
                        : "border-primary50"
                    }  flex items-center justify-between px-6 py-3 rounded-xl shadow-flat `}
                  >
                    <CalenderSearch
                      fill={"rgb(3 77 119)"}
                      className={"w-8 aspect-square"}
                    />
                    <p>start Date</p>
                  </div>
                  {watch("from.startDate") ? (
                    <p className="text-secondry80 font-semibold text-lg">
                      {new Date(watch("from.startDate"))?.toLocaleDateString()}
                    </p>
                  ) : (
                    <p className="text-gray-400">please select a date</p>
                  )}
                  {errors?.from?.DayTime && (
                    <p className="text-red-500 text-xs font-semibold">
                      {errors?.from?.DayTime?.message}
                    </p>
                  )}
                  {errors?.from?.startDate && (
                    <p className="text-red-500 text-xs font-semibold">
                      {errors?.from?.startDate?.message}
                    </p>
                  )}
                </div>
                <div className="w-[25.5%] flex flex-col gap-4">
                  <div
                    className={`w-full border ${
                      errors?.from?.DayTime
                        ? "border-red-500"
                        : "border-primary50"
                    }  flex items-center justify-between px-2 py-2 rounded-xl shadow-flat `}
                  >
                    <SunFilledIcon
                      fill={"#FBE205"}
                      className={"w-6 aspect-square"}
                    />
                    <input
                      {...register("from.DayTime", {
                        required: "Please choose Morning or night",
                      })}
                      value={"morning"}
                      type={"radio"}
                    />
                  </div>
                  <div
                    className={`w-full border ${
                      errors?.from?.DayTime
                        ? "border-red-500"
                        : "border-primary50"
                    }  flex items-center justify-between px-2 py-2 rounded-xl shadow-flat `}
                  >
                    <MoonFilledIcon
                      fill={"rgb(3 77 119)"}
                      className={"w-6 aspect-square"}
                    />
                    <input
                      {...register("from.DayTime")}
                      value={"nigth"}
                      type={"radio"}
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="w-full  flex flex-col bg-white border  border-primary40 rounded-xl py-6 px-4">
              <p className="font-semibold text-lg">End Date</p>

              <div
                className={` ${
                  toCalenderOpen ? "" : "hidden"
                } absolute top-0 left-0 z-20 w-full h-screen bg-primary90 bg-opacity-40 backdrop-blur-md flex flex-col justify-center `}
              >
                <Controller
                  control={control}
                  rules={{ required: "Please select the starting Date" }}
                  name={"to.startDate"}
                  render={({ field: { onChange, value } }) => (
                    <Calendar
                      rangeColors={["#C8F9D1", "#C8F9D1", "#C8F9D1"]}
                      minDate={new Date()}
                      date={value}
                      onChange={onChange}
                    />
                  )}
                />
                <button
                  onClick={() => {
                    setToCalenderOpen(!toCalenderOpen);
                  }}
                  className="w-full aspect-longBton bg-secondry50 rounded-xl"
                >
                  Confirm
                </button>
              </div>

              <div className="w-full flex justify-between">
                <div className="w-[65.5%] flex flex-col gap-4">
                  <div
                    onClick={() => {
                      setToCalenderOpen(!toCalenderOpen);
                    }}
                    className={` border w-full ${
                      errors?.to?.startDate
                        ? "border-red-500"
                        : "border-primary50"
                    }  flex items-center justify-between px-6 py-3 rounded-xl shadow-flat `}
                  >
                    <CalenderSearch
                      fill={"rgb(3 77 119)"}
                      className={"w-8 aspect-square"}
                    />
                    <p>End Date</p>
                  </div>
                  {watch("to.startDate") ? (
                    <p className="text-secondry80 font-semibold text-lg">
                      {new Date(watch("to.startDate"))?.toLocaleDateString()}
                    </p>
                  ) : (
                    <p className="text-gray-400">please select a date</p>
                  )}
                  {errors?.to?.DayTime && (
                    <p className="text-red-500 text-xs font-semibold">
                      {errors?.to?.DayTime?.message}
                    </p>
                  )}
                  {errors?.to?.startDate && (
                    <p className="text-red-500 text-xs font-semibold">
                      {errors?.to?.startDate?.message}
                    </p>
                  )}
                </div>
                <div className="w-[25.5%] flex flex-col gap-4">
                  <div
                    className={`w-full border ${
                      errors?.to?.DayTime
                        ? "border-red-500"
                        : "border-primary50"
                    }  flex items-center justify-between px-2 py-2 rounded-xl shadow-flat `}
                  >
                    <SunFilledIcon
                      fill={"#FBE205"}
                      className={"w-6 aspect-square"}
                    />
                    <input
                      {...register("to.DayTime", {
                        required: "Please choose Morning or night",
                      })}
                      value={"morning"}
                      type={"radio"}
                    />
                  </div>
                  <div
                    className={`w-full border ${
                      errors?.to?.DayTime
                        ? "border-red-500"
                        : "border-primary50"
                    }  flex items-center justify-between px-2 py-2 rounded-xl shadow-flat `}
                  >
                    <MoonFilledIcon
                      fill={"rgb(3 77 119)"}
                      className={"w-6 aspect-square"}
                    />
                    <input
                      {...register("to.DayTime")}
                      value={"nigth"}
                      type={"radio"}
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="w-full relative">
              <select
                defaultValue={""}
                className="w-full aspect-textField pl-[18%] bg-white rounded-xl border border-primary50 shadow-flat"
                {...register("city", {})}
              >
                <option value={""}>All Places</option>
                <option value={"DeadSea"}>Dead Sea</option>
                <option value={"Amman"}>Amman</option>
                <option value={"Alaghwar"}>Alaghwar</option>
                <option value={"Madaba"}>Madaba</option>
                <option value={"Jerash"}>Jerash</option>
                <option value={"Ajloun"}>Ajloun</option>
                <option value={"Zarqa"}>Zarqa</option>
                <option value={"Irbid"}>Irbid</option>
                <option value={"Alkarak"}>Alkarak</option>
                <option value={"Almafraq"}>Almafraq</option>
                <option value={"Ma'an"}>Ma'an</option>
                <option value={"Aqaba"}>Aqaba</option>
                <option value={"Balqa"}>Balqa</option>
                <option value={"Tafilah"}>Tafilah</option>
              </select>
              <GlobalSearchIcon
                fill={"#333"}
                className={"w-7 aspect-square absolute left-[5%] top-[15%]"}
              />
            </div>

            <div className="w-full flex justify-between">
              <button className="w-[48%] font-bold text-primary90 bg-gray-200 aspect-btn rounded-xl shadow-lg border border-gray-500">
                Cancel
              </button>
              <button
                className="w-[48%] font-bold text-primary90 bg-secondry50 aspect-btn rounded-xl shadow-lg border border-secondry80 "
                type="submit"
              >
                Next
              </button>
            </div>
          </form>
        </div>
      )}
    </div>
  );
}
