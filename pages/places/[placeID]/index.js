import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { useDispatch, useSelector } from "react-redux";
import { useUser } from "@auth0/nextjs-auth0/client";

import { fetchSelectedPlace } from "../../../storeSlices/placeDetailSlice";

import HomeAppBar from "../../../components/organisms/HomeAppBar";
import PlaceAboutUS from "../../../components/sections/PlaceAboutUS";
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
import PoolSection from "../../../components/sections/PoolSection";

import PlaceDetailsForm from "../../../components/organisms/PlaceDetailsForm";
import PlaceGallery from "../../../components/organisms/PlaceGallery";
import HouseSection from "../../../components/sections/HouseSection";
import GardenSection from "../../../components/sections/GardenSection";
import Fotter from "../../../components/sections/Fotter";

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

  const [expandGallery, setExpandGallery] = useState(false);

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
      className="flex flex-col w-full relative "
    >
      <HomeAppBar />
      <div className="relative w-full h-[70vh] ">
        <img
          className="h-full  object-cover absolute top-0 left-0"
          src={`${placeSelected?.images[0]?.img}`}
        />
        <div className="absolute w-full h-[74%] bottom-0 left-0 bluegradientoverlay flex flex-col gap-4 justify-end pb-[25%] px-6">
          <div
            onClick={() => {
              setExpandGallery(!expandGallery);
            }}
            className=" w-[22%] aspect-placeCard relative"
          >
            <img
              alt=""
              src={`${placeSelected?.images[0]?.img}`}
              className="w-full absolute top-0 left-0 object-cover -rotate-12 rounded-lg shadow-sm shadow-primary10 aspect-placeCard bg-cover border border-primary10"
            />
            <img
              alt=""
              src={`${placeSelected?.images[1]?.img}`}
              className="w-full absolute top-0 rotate-12 left-2 object-cover rounded-lg shadow-sm shadow-primary10 aspect-placeCard bg-cover border border-primary10"
            />
            <img
              alt=""
              src={`${placeSelected?.images[2]?.img}`}
              className="w-full absolute top-0 left-0   object-cover rounded-lg shadow-sm shadow-primary10 aspect-placeCard bg-cover border border-primary10"
            />
          </div>
          {user?.dbinfo?.role === "admin" && (
            <div
              onClick={async () => {
                setShowBookingList(!showBookingList);
              }}
              className=" w-[40%]  rounded-xl   flex gap-2 justify-start items-center"
            >
              <div className="flex flex-col  justify-center items-center bg-secondry50 border border-primary90 rounded-full w-14 aspect-square">
                <BookingOutlineIcon
                  fill={"rgb(4 37 10 )"}
                  className={"w-8 aspect-square "}
                />
              </div>
              <h3 className="text-lg font-bold text-primary10 ">Booking</h3>
            </div>
          )}

          <div
            onClick={async () => {
              setShowCalender(!showCalender);
            }}
            className="  rounded-xl  flex  gap-2 justify-start  items-center"
          >
            <div className="flex flex-col  justify-center items-center bg-secondry50 border border-secondry10 rounded-full w-14 aspect-square">
              <BookIcon
                fill={"rgb(4 37 10 )"}
                className={"w-8 aspect-square "}
              />
            </div>
            <div></div>
            <h3 className="text-lg font-bold text-white ">Availablity</h3>
          </div>
        </div>
      </div>
      {expandGallery && (
        <PlaceGallery
          closeHandler={() => {
            setExpandGallery(!expandGallery);
          }}
        />
      )}

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
        {user?.dbinfo?.role === "admin" && (
          <>
            {placeSelected?.contactNumber ? (
              <a
                className="font-bold bg-secondry50 px-6 py-2 rounded w-1/2 border border-secondry10 shadow-flat"
                href={`tel:+${placeSelected?.contactNumber}`}
              >
                {placeSelected?.contactNumber}
              </a>
            ) : (
              <p>No Number Yet</p>
            )}
          </>
        )}

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
        <div className="fixed top-0 left-0 z-40 w-full h-screen bg-black bg-opacity-70 backdrop-blur-md">
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
          <div className="w-full h-1 bg-opacity-40 bg-black my-8" />
          <PoolSection utils={placeSelected?.utils} />
          <div className="w-full h-1 bg-opacity-40 bg-black my-8" />
          <HouseSection utils={placeSelected?.utils} />
          <div className="w-full h-1 bg-opacity-40 bg-black my-8" />
          <GardenSection utils={placeSelected?.utils} />

          {/* <PlaceFeedback reviews={placeSelected?.placeReviews} /> */}

          <PlaceInstruction rules={placeSelected?.rules} />
        </div>
      )}

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
      <Fotter />
    </section>
  );
}
