import React from "react";

import { useDispatch } from "react-redux";
import { toggleFilterModel } from "../../storeSlices/settingSlice";
import { fetchPlaces } from "../../storeSlices/placesSlice";
import { useForm, Controller } from "react-hook-form";

import "react-date-range/dist/styles.css"; // main style file
import "react-date-range/dist/theme/default.css"; // theme css file

import CloseCirculeIcon from "../../client/assets/icons/CloseCirculeIcon";
import GlobalSearchIcon from "../../client/assets/icons/GlobalSearchIcon";
import SearchOutline from "../../client/assets/icons/SearchOutline";

import TimeToggle from "../molecules/TimeToggle";

export default function FilterForm() {
  const dispatch = useDispatch();
  const {
    register,
    handleSubmit,
    watch,
    control,
    formState: { errors },
  } = useForm();

  //logic for the API
  const searchHandler = async (e) => {
    e.preventDefault();
    const data = {
      startDate: dateRanges.start.getTime(),
      endDate: dateRanges.end.getTime(),
      city: city,
    };
    dispatch(fetchPlaces(0, data));
  };

  const onSubmit = (data) => {};

  return (
    <div className="w-full h-full bg-primary100 bg-opacity-30 flex justify-center items-center fixed backdrop-blur-md overflow-hidden z-20 ">
      <div className="h-[89.177%] w-[80.81%]  relative flex flex-col justify-between">
        <CloseCirculeIcon
          onClick={() => {
            dispatch(toggleFilterModel());
          }}
          fill={"#EA5B3F"}
          className={"w-10 aspect-square"}
        />
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="h-[87.7%] w-full flex flex-col gap-[4.3%]"
        >
          <div className="flex flex-col w-full gap-3">
            <div className="flex gap-2">
              <GlobalSearchIcon
                fill={"#023350"}
                className={"w-6 aspect-square"}
              />

              <p className="text-lg font-bold text-white"> Select a Place</p>
            </div>

            <select
              className="w-full aspect-longBton rounded-lg border border-secondry20 "
              {...register("city", { required: "this field is required" })}
            >
              <option className="text-gray-300" disabled selected>
                Please select City{" "}
              </option>
              <option value={"Dead Sea"}>Dead Sea </option>
              <option value={"amman"}>Amman</option>
            </select>
          </div>
          <div className="flex h-[30%] px-2 w-full justify-between ">
            <Controller
              name="FromSlot"
              control={control}
              rules={{
                required: true,
              }}
              defaultValue={"Morning"}
              render={({ field }) => (
                <TimeToggle
                  field={field}
                  id={"from"}
                  text={"From"}
                  control={control}
                  chosenDate={
                    watch("fromDate")?.toLocaleDateString() || "Choose A day"
                  }
                />
              )}
            />
            <Controller
              name="ToSlot"
              control={control}
              rules={{
                required: true,
              }}
              defaultValue={"Morning"}
              render={({ field }) => (
                <TimeToggle
                  field={field}
                  id={"to"}
                  text={"To"}
                  control={control}
                  chosenDate={
                    watch("toDate")?.toLocaleDateString() || "Choose A day"
                  }
                />
              )}
            />
          </div>
          <button
            className="w-full flex justify-center items-center gap-3  aspect-longBton rounded-xl bg-primary90 shadow-xl font-bold text-white border border-primary70 "
            type="submit"
          >
            <SearchOutline fill={"#fff "} className={"w-8 aspect-square"} />
            <p> Submit</p>
          </button>
        </form>
      </div>
    </div>
  );
}
