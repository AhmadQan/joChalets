import React, { useState } from "react";
import { motion } from "framer-motion";
import { useMedia } from "react-use";
import { useForm, Controller } from "react-hook-form";

import { useDispatch, useSelector } from "react-redux";

import MoonFilledIcon from "../../client/assets/icons/MoonFilledIcon";
import SunFilledIcon from "../../client/assets/icons/SunFilledIcon";
import CalenderSearch from "../../client/assets/icons/calenderSearch";
import { Calendar } from "react-date-range";
import { fetchPlaces } from "../../storeSlices/placesSlice";

import "react-date-range/dist/styles.css"; // main style file
import "react-date-range/dist/theme/default.css"; // theme css file
import LoaderDrops from "../molecules/LoaderDrops";

function Hero() {
  const dispatch = useDispatch();

  const PlacesStore = useSelector((state) => state.places);
  const { allPlaces, filterData, loading, err, totalCount } = PlacesStore;
  // const isMobile = useMedia("(max-width: 768px)");

  const [fromCalenderOpen, setFromCalenderOpen] = useState(false);
  const [toCalenderOpen, setToCalenderOpen] = useState(false);

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
    // console.log(data);
  };

  const {
    register,
    handleSubmit,
    watch,
    control,
    formState: { errors },
  } = useForm();

  return (
    <motion.div
      style={{
        background: `url(https://firebasestorage.googleapis.com/v0/b/qanadilodesign.appspot.com/o/other%2FHeroNew.png?alt=media&token=5df4e2d6-7e9f-4b70-9af6-168cbf1d2fca)`,
      }}
      animate={{ opacity: 1, height: filterData ? "58vh" : "96vh" }}
      transition={{ duration: 0.5 }}
      className={`pt-[16%] w-full bg-cover relative `}
    >
      <div className="w-full h-full blackOverlay absolute top-0 left-0" />
      <div className="w-full h-full flex flex-col gap-12 relative justify-center items-center z-20 ">
        <motion.div
          initial={"hidden"}
          whileInView={"show"}
          variants={{
            hidden: {
              x: -90,
              opacity: 0,
            },
            show: {
              x: 0,
              opacity: 1,
              transition: {
                type: "tween",
                duration: 0.8,
                delay: 0.2,
              },
            },
          }}
          exit={{ opacity: 0 }}
          className={`w-[86%] self-center  flex flex-col ${
            filterData ? "hidden" : ""
          }`}
        >
          <p className="capitalize text-base font-medium text-white">
            ready for summer ?
          </p>
          <p className="uppercase text-4xl font-black text-secondry50">
            find Jordan top summer places with ease
          </p>
        </motion.div>
        <motion.div
          initial={"hidden"}
          whileInView={"show"}
          variants={{
            hidden: {
              x: 90,
              opacity: 0,
            },
            show: {
              x: 0,
              opacity: 1,
              transition: {
                type: "tween",
                duration: 0.8,
                delay: 0.2,
              },
            },
          }}
          className="w-[96%]  border-8 rounded-20  px-1 py-4 "
        >
          <form
            onSubmit={handleSubmit(submitHandler)}
            className="w-full flex flex-col gap-[1.4vh] justify-around"
          >
            <div className="w-full  flex flex-col bg-white border  border-primary40 rounded-xl py-3 px-3">
              {/* <p className="font-semibold text-lg">Start Date</p> */}

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
                  onClick={(e) => {
                    e?.preventDefault();
                    setFromCalenderOpen(!fromCalenderOpen);
                  }}
                  className="w-full aspect-longBton bg-secondry50 rounded-xl"
                >
                  Confirm
                </button>
              </div>

              <div className="w-full flex justify-between">
                <div className="w-[45.5%] flex flex-col gap-4">
                  <div
                    onClick={() => {
                      setFromCalenderOpen(!fromCalenderOpen);
                    }}
                    className={` border w-full ${
                      errors?.from?.startDate
                        ? "border-red-500"
                        : "border-primary50"
                    }  flex items-center justify-between py-3 px-3 rounded-xl shadow-flat `}
                  >
                    <CalenderSearch
                      fill={`${
                        watch("from.startDate") ? "#5AED75" : "rgb(3 77 119)"
                      }  `}
                      className={"w-8 aspect-square"}
                    />
                    <p className="uppercase text-sm">
                      {watch("from.startDate")
                        ? new Date(
                            watch("from.startDate")
                          )?.toLocaleDateString()
                        : "start Date"}
                    </p>
                  </div>
                </div>
                <div className="w-[45.5%] flex gap-2 ">
                  <div
                    className={`w-full border ${
                      errors?.from?.DayTime
                        ? "border-red-500"
                        : "border-primary50"
                    }  flex items-center  justify-between px-2 py-2 rounded-xl shadow-flat `}
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
            <div className="w-full  flex flex-col bg-white border  border-primary40 rounded-xl py-3 px-3">
              <div
                className={` ${
                  toCalenderOpen ? "" : "hidden"
                } absolute top-0 left-0 z-20 w-full h-screen bg-primary90 bg-opacity-40 backdrop-blur-md flex flex-col justify-center `}
              >
                <Controller
                  control={control}
                  rules={{ required: "Please select the End date" }}
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
                  onClick={(e) => {
                    e?.preventDefault();
                    setToCalenderOpen(!toCalenderOpen);
                  }}
                  className="w-full aspect-longBton bg-secondry50 rounded-xl"
                >
                  Confirm
                </button>
              </div>

              <div className="w-full flex justify-between">
                <div className="w-[45.5%] flex flex-col gap-4">
                  <div
                    onClick={() => {
                      setToCalenderOpen(!toCalenderOpen);
                    }}
                    className={` border w-full ${
                      errors?.to?.startDate
                        ? "border-red-500"
                        : "border-primary50"
                    }  flex items-center justify-between py-3 px-3 rounded-xl shadow-flat `}
                  >
                    <CalenderSearch
                      fill={`${
                        watch("to.startDate") ? "#5AED75" : "rgb(3 77 119)"
                      }  `}
                      className={"w-8 aspect-square"}
                    />
                    <p className="uppercase text-sm">
                      {watch("to.startDate")
                        ? new Date(watch("to.startDate"))?.toLocaleDateString()
                        : "end Date"}
                    </p>
                  </div>
                </div>
                <div className="w-[45.5%] flex gap-2 ">
                  <div
                    className={`w-full border ${
                      errors?.to?.DayTime
                        ? "border-red-500"
                        : "border-primary50"
                    }  flex items-center  justify-between px-2 py-2 rounded-xl shadow-flat `}
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
            <div className="flex justify-between">
              <select
                defaultValue={""}
                className="w-[46%] aspect-btn pl-[8%] bg-white rounded-lg border border-primary50 shadow-flat"
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
              <button className="w-[46%] flex justify-center items-center aspect-btn bg-secondry50 rounded-lg border border-white text-xl font-bold text-secondry100 shadow-md">
                {loading ? <LoaderDrops /> : "Find"}
              </button>
            </div>
          </form>
        </motion.div>
      </div>
    </motion.div>
  );
}

export default Hero;
