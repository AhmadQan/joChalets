import React, { useState } from "react";
import { Calendar } from "react-date-range";
import { useForm, Controller } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";

import CalenderSearch from "../../client/assets/icons/calenderSearch";
import MoonFilledIcon from "../../client/assets/icons/MoonFilledIcon";
import SunFilledIcon from "../../client/assets/icons/SunFilledIcon";

import { loadFormsData } from "../../storeSlices/placeDetailSlice";

function BookingStep1() {
  //calender controll
  const [fromCalenderOpen, setFromCalenderOpen] = useState(false);
  const [toCalenderOpen, setToCalenderOpen] = useState(false);

  //store logic
  const dispatch = useDispatch();
  const bookingState = useSelector((state) => {
    return state.placeDetail;
  });

  const { err, loading, placeAvailablity } = bookingState;
  const {
    disabledDates = [],
    onlyAvailableAtEvening = [],
    onlyAvailableAtMorning = [],
  } = placeAvailablity;

  const datesToDisaple = disabledDates?.map((date) => {
    return new Date(date.date);
  });
  function renderCustomDayContent(day) {
    // Here you can add any custom content for the day cell

    const isAvailableMorning = onlyAvailableAtMorning?.filter((date) => {
      return (
        new Date(date?.date).toLocaleDateString() ===
        new Date(day).toLocaleDateString()
      );
    });
    const isAvailableEvening = onlyAvailableAtEvening?.filter((date) => {
      return (
        new Date(date?.date).toLocaleDateString() ===
        new Date(day).toLocaleDateString()
      );
    });

    return (
      <div
        className={`rounded-md   ${
          isAvailableMorning.length
            ? "bg-yellow-100  text-black border border-yellow-300"
            : isAvailableEvening.length
            ? "bg-blue-200 text-white border border-primary40"
            : ""
        } w-full`}
      >
        <span>{day.getDate()}</span>
      </div>
    );
  }

  //use Form Logic
  const {
    register,
    handleSubmit,
    control,
    watch,
    formState: { errors },
  } = useForm();

  const loadStoreFormFun = async (obj) => {
    dispatch(loadFormsData(obj));
  };

  ///form 1////

  const submitHandler = async (data) => {
    await loadStoreFormFun({
      step: 1,
      data: data,
    });
  };

  return (
    <form
      onSubmit={handleSubmit(submitHandler)}
      className="flex-1 w-full box-border overflow-y-scroll  justify-start flex overflow-hidden items-center flex-col gap-[5.1%] pt-3"
    >
      <div className="w-full  flex flex-col bg-white border  border-primary40 rounded-xl py-6 px-4">
        <p className="font-semibold text-lg">Start Date</p>

        <div
          className={` ${
            fromCalenderOpen ? "" : "hidden"
          } absolute top-0 left-0 w-full h-screen bg-primary90 bg-opacity-40 backdrop-blur-md flex flex-col justify-center `}
        >
          <Controller
            control={control}
            rules={{ required: "Please select the starting Date" }}
            name={"from.startDate"}
            render={({ field: { onChange, value } }) => (
              <Calendar
                disabledDates={datesToDisaple}
                dayContentRenderer={renderCustomDayContent}
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
                errors?.from?.startDate ? "border-red-500" : "border-primary50"
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
                errors?.from?.DayTime ? "border-red-500" : "border-primary50"
              }  flex items-center justify-between px-2 py-2 rounded-xl shadow-flat `}
            >
              <SunFilledIcon fill={"#FBE205"} className={"w-6 aspect-square"} />
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
                errors?.from?.DayTime ? "border-red-500" : "border-primary50"
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
          } absolute top-0 left-0 w-full h-screen bg-primary90 bg-opacity-40 backdrop-blur-md flex flex-col justify-center `}
        >
          <Controller
            control={control}
            rules={{ required: "Please select the starting Date" }}
            name={"to.startDate"}
            render={({ field: { onChange, value } }) => (
              <Calendar
                disabledDates={datesToDisaple}
                dayContentRenderer={renderCustomDayContent}
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
                errors?.to?.startDate ? "border-red-500" : "border-primary50"
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
                errors?.to?.DayTime ? "border-red-500" : "border-primary50"
              }  flex items-center justify-between px-2 py-2 rounded-xl shadow-flat `}
            >
              <SunFilledIcon fill={"#FBE205"} className={"w-6 aspect-square"} />
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
                errors?.to?.DayTime ? "border-red-500" : "border-primary50"
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
  );
}

export default BookingStep1;
