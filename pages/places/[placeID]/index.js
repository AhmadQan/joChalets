import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { useDispatch, useSelector } from "react-redux";
import { useUser } from "@auth0/nextjs-auth0/client";
import { useForm } from "react-hook-form";

import {
  fetchSelectedPlace,
  updatePlaces,
} from "../../../storeSlices/placeDetailSlice";

import HomeAppBar from "../../../components/organisms/HomeAppBar";
import QuickActionNav from "../../../components/organisms/QuickActionNav";
import PlaceAboutUS from "../../../components/sections/PlaceAboutUS";
import PlaceUtils from "../../../components/sections/PlaceUtils";
import PlaceDetailImageSlider from "../../../components/sections/PlaceDetailImageSlider";
import PlaceFeedback from "../../../components/sections/PlaceFeedback";
import PlaceInstruction from "../../../components/sections/PlaceInstruction";
import BookingGrid from "../../../components/organisms/BookingGrid";
import AvailablityCalender from "../../../components/organisms/AvailablityCalender";
import PlaceUtilsForm from "../../../components/organisms/PlaceUtilsForm";

import BookIcon from "../../../client/assets/icons/BookIcon";
import BookingOutlineIcon from "../../../client/assets/icons/BookingOutlineIcon";
import EditOutlineIcon from "../../../client/assets/icons/EditOutlineIcon";

export default function PlaceDetailPage() {
  const { user, error, isLoading } = useUser();

  //store state management area
  const dispatch = useDispatch();
  const PlaceState = useSelector((state) => state.placeDetail);
  const { placeSelected, err, loading } = PlaceState;

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      ...placeSelected,
    },
  });

  const [showCalender, setShowCalender] = useState(false);
  const [showBookingList, setShowBookingList] = useState(false);
  const [isEditMode, setIsEditMode] = useState(false);

  const router = useRouter();
  const { placeID } = router.query;

  useEffect(() => {
    if (!placeSelected && placeID) {
      dispatch(fetchSelectedPlace(placeID));
    }
  }, [placeSelected, placeID]);
  console.log(errors);

  const editSubmitHandler = (data) => {
    console.log(data);
    dispatch(updatePlaces(placeSelected?._id, data));
  };

  return (
    <section className="flex flex-col relative">
      <HomeAppBar />
      <PlaceDetailImageSlider />
      {user?.dbinfo?.role === "admin" && <div></div>}
      <QuickActionNav />
      <form onSubmit={handleSubmit(editSubmitHandler)}>
        <div className="w-full aspect-longBton border-y flex font-bold  justify-between items-center px-6 bg-opacity-60 backdrop-blur-md  border-secondry90 text-secondry90  bg-secondry40 shadow-elvatedCard z-10">
          place Price{" "}
          <EditOutlineIcon
            onClick={() => {
              setIsEditMode(!isEditMode);
            }}
            fill={"rgb(12, 110, 30)"}
            className={"w-8 aspect-square"}
          />
        </div>
        {isEditMode ? (
          <div className="flex flex-col pt-4 gap-6">
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
              className="h-[25vh] border border-primary40"
            />
            <div className="w-full flex justify-end">
              <button
                type="submit"
                className="w-[26%] bg-secondry80 text-secondry10 font-bold  aspect-btn border border-primary40 rounded-lg"
              >
                save
              </button>
            </div>
          </div>
        ) : (
          <PlaceAboutUS description={placeSelected?.description} />
        )}
        {isEditMode ? (
          <PlaceUtilsForm errors={errors} register={register} />
        ) : (
          <PlaceUtils utils={placeSelected?.utils} />
        )}

        <PlaceFeedback />
        <PlaceInstruction />
      </form>
      <div className="absolute top-[10%] w-full justify-between flex px-[3%]">
        <div
          onClick={async () => {
            setShowCalender(!showCalender);
          }}
          className="h-full w-[40%] bg-white rounded-xl bg-opacity-60 backdrop-blur-sm z-20 border border-primary30 flex flex-col justify-center  shadow-elvatedCard items-center"
        >
          <div className="flex flex-col w-full justify-center items-center gap-2">
            <BookIcon fill={"#023350"} className={"w-10 aspect-square "} />
            <h3 className="text-lg font-medium text-primary100 ">
              <span className="text-lg font-bold text-primary100 ">
                {" "}
                availablity
              </span>
            </h3>
          </div>
        </div>
        {user?.dbinfo?.role === "admin" && (
          <div
            onClick={async () => {
              setShowBookingList(!showBookingList);
            }}
            className="h-full w-[40%] bg-white rounded-xl bg-opacity-60 backdrop-blur-sm z-20 border border-primary30 flex flex-col justify-center  shadow-elvatedCard items-center"
          >
            <div className="flex flex-col w-full justify-center items-center gap-2">
              <BookingOutlineIcon
                fill={"#023350"}
                className={"w-10 aspect-square "}
              />
              <h3 className="text-lg font-medium text-primary100 ">
                <span className="text-lg font-bold text-primary100 ">
                  Booking
                </span>
              </h3>
            </div>
          </div>
        )}
      </div>
      {showCalender && (
        <AvailablityCalender
          placeID={placeID}
          closeHandler={() => {
            setShowCalender(!showCalender);
          }}
        />
      )}
      {showBookingList && user?.dbinfo?.role === "admin" && (
        <BookingGrid
          close={() => {
            setShowBookingList(!showBookingList);
          }}
        />
      )}
    </section>
  );
}
