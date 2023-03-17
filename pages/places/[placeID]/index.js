import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { useDispatch, useSelector } from "react-redux";
import { useUser } from "@auth0/nextjs-auth0/client";

import { fetchSelectedPlace } from "../../../storeSlices/placeDetailSlice";

import HomeAppBar from "../../../components/organisms/HomeAppBar";
import QuickActionNav from "../../../components/organisms/QuickActionNav";
import PlaceAboutUS from "../../../components/sections/PlaceAboutUS";
import PlaceUtils from "../../../components/sections/PlaceUtils";
import PlaceDetailImageSlider from "../../../components/sections/PlaceDetailImageSlider";
import PlaceFeedback from "../../../components/sections/PlaceFeedback";
import PlaceInstruction from "../../../components/sections/PlaceInstruction";
import BookingGrid from "../../../components/organisms/BookingGrid";

import BookIcon from "../../../client/assets/icons/BookIcon";
import BookingOutlineIcon from "../../../client/assets/icons/BookingOutlineIcon";
import AvailablityCalender from "../../../components/organisms/AvailablityCalender";

export default function PlaceDetailPage() {
  const { user, error, isLoading } = useUser();
  console.log("user", user?.dbinfo?.role);
  const [showCalender, setShowCalender] = useState(false);
  const [showBookingList, setShowBookingList] = useState(false);

  const router = useRouter();
  const { placeID } = router.query;

  const dispatch = useDispatch();
  const PlaceState = useSelector((state) => state.placeDetail);
  const { placeSelected, err, loading } = PlaceState;

  useEffect(() => {
    if (!placeSelected && placeID) {
      dispatch(fetchSelectedPlace(placeID));
    }
  }, [placeSelected, placeID]);

  return (
    <section className="flex flex-col relative">
      <HomeAppBar />
      <PlaceDetailImageSlider />
      {user?.dbinfo?.role === "admin" && <div></div>}
      <QuickActionNav />
      <PlaceAboutUS />
      <PlaceUtils />
      <PlaceFeedback />
      <PlaceInstruction />
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
      </div>
      {showCalender && (
        <AvailablityCalender
          placeID={placeID}
          closeHandler={() => {
            setShowCalender(!showCalender);
          }}
        />
      )}
      {showBookingList && (
        <BookingGrid
          close={() => {
            setShowBookingList(!showBookingList);
          }}
        />
      )}
    </section>
  );
}
