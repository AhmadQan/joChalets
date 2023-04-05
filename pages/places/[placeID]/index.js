import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { useDispatch, useSelector } from "react-redux";
import { useUser } from "@auth0/nextjs-auth0/client";
import { useForm, useFieldArray } from "react-hook-form";

import {
  fetchSelectedPlace,
  updatePlaces,
} from "../../../storeSlices/placeDetailSlice";

import HomeAppBar from "../../../components/organisms/HomeAppBar";
import PlaceAboutUS from "../../../components/sections/PlaceAboutUS";
import PlaceUtils from "../../../components/sections/PlaceUtils";
import PlaceDetailImageSlider from "../../../components/sections/PlaceDetailImageSlider";
import PlaceFeedback from "../../../components/sections/PlaceFeedback";
import PlaceInstruction from "../../../components/sections/PlaceInstruction";
import BookingGrid from "../../../components/organisms/BookingGrid";
import AvailablityCalender from "../../../components/organisms/AvailablityCalender";

import BookingOutlineIcon from "../../../client/assets/icons/BookingOutlineIcon";
import EditOutlineIcon from "../../../client/assets/icons/EditOutlineIcon";
import BookIcon from "../../../client/assets/icons/BookIcon";
import LocationBoldIcon from "../../../client/assets/icons/LocationBoldIcon";
import DollarCirculeIcon from "../../../client/assets/icons/DollarCirculeIcon";
import BookingForm from "../../../components/sections/BookingForm";

import PlaceDetailsForm from "../../../components/organisms/PlaceDetailsForm";

export default function PlaceDetailPage() {
  const { user, error, isLoading } = useUser();

  //store state management area
  const dispatch = useDispatch();
  const PlaceState = useSelector((state) => state.placeDetail);
  const { placeSelected, err, loading } = PlaceState;

  const [showCalender, setShowCalender] = useState(false);
  const [showBookingList, setShowBookingList] = useState(false);

  const [expanded, setExpanded] = useState(false);

  const [isEditMode, setIsEditMode] = useState(false);

  const router = useRouter();
  const { placeID } = router.query;

  useEffect(() => {
    if (!placeSelected && placeID) {
      dispatch(fetchSelectedPlace(placeID));
    }
  }, [placeSelected, placeID]);

  return (
    <section
      // style={{
      //   background: " linear-gradient(90deg, #98FB98, #00FF7F)",
      // }}
      className="flex flex-col relative bg-primary20"
    >
      <HomeAppBar />
      <PlaceDetailImageSlider />
      <div className="w-full h-auto shadow-elvatedCard bg-white -translate-y-5 z-20 rounded-20 border border-primary40 flex flex-col gap-6 px-4 py-5">
        <div className="flex justify-between">
          <p className="text-xl font-bold text-primary90">
            {placeSelected?.name}
          </p>
          {user?.dbinfo?.role === "admin" && (
            <EditOutlineIcon
              onClick={() => {
                setIsEditMode(!isEditMode);
              }}
              fill={"rgb(36 171 249)"}
              className={"w-8 aspect-square"}
            />
          )}
        </div>
        <div className="flex justify-between">
          <div className="flex gap-1 items-center">
            <LocationBoldIcon
              fill={"#068DDB"}
              className={"w-4 aspect-square"}
            />
            <p className="text-sm font-medium">{placeSelected?.address}</p>
          </div>
          <div className="flex flex-col gap-3">
            <div className="flex gap-1">
              <DollarCirculeIcon
                fill={"#22B36B"}
                className={"w-4 aspect-square"}
              />
              <p className="text-sm ">Weekends:</p>
              <p className="text-sm font-medium">
                {placeSelected?.price?.weekend || "On Call"}
              </p>
            </div>
            <div className="flex gap-1">
              <DollarCirculeIcon
                fill={"#22B36B"}
                className={"w-4 aspect-square"}
              />
              <p className="text-sm ">Normal Days:</p>
              <p className="text-sm font-medium">
                {placeSelected?.price?.normalDays || "On Call"}
              </p>
            </div>
          </div>
        </div>
        <div
          onClick={() => [setExpanded(!expanded)]}
          className="w-[91.14%] aspect-longBton bg-secondry50 border border-secondry20 rounded-xl self-center text-secondry90 font-bold text-lg flex justify-center items-center shadow-xl"
        >
          Book Now
        </div>
      </div>
      {expanded && (
        <div className="fixed top-0 left-0 z-40 w-full h-screen bg-primary70 bg-opacity-60 backdrop-blur-md">
          <BookingForm
            windowCloseHandler={() => {
              setExpanded(!expanded);
            }}
          />
        </div>
      )}

      {/* <QuickActionNav /> */}
      {isEditMode ? (
        <PlaceDetailsForm
          loading={loading}
          placeInfo={placeSelected}
          placeID={placeSelected?._id}
          closeHandler={() => {
            setIsEditMode(!isEditMode);
          }}
        />
      ) : (
        <div className="flex flex-col ">
          <PlaceAboutUS description={placeSelected?.description} />

          <PlaceUtils utils={placeSelected?.utils} />

          <PlaceFeedback />

          <PlaceInstruction rules={placeSelected?.rules} />
        </div>
      )}

      <div className="absolute top-[40vh] left-[8vw] gap-2 w-full justify-between flex flex-col items-start ">
        <div
          onClick={async () => {
            setShowCalender(!showCalender);
          }}
          className="h-full w-[40%] rounded-xl z-20 flex  gap-2 justify-start shadow-flat items-center"
        >
          <div className="flex flex-col  justify-center items-center bg-primary10 border border-primary90 rounded-full w-14 aspect-square">
            <BookIcon fill={"#023350"} className={"w-8 aspect-square "} />
          </div>
          <h3 className="text-lg font-bold text-primary10 ">Availablity</h3>
        </div>
        {user?.dbinfo?.role === "admin" && (
          <div
            onClick={async () => {
              setShowBookingList(!showBookingList);
            }}
            className="h-full w-[40%]  rounded-xl shadow-flat z-20 flex gap-2 justify-start items-center"
          >
            <div className="flex flex-col  justify-center items-center bg-primary10 border border-primary90 rounded-full w-14 aspect-square">
              <BookingOutlineIcon
                fill={"#023350"}
                className={"w-8 aspect-square "}
              />
            </div>
            <h3 className="text-lg font-bold text-primary10 ">Booking</h3>
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
