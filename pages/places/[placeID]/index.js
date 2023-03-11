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
import BookIcon from "../../../client/assets/icons/BookIcon";

import AvailablityCalender from "../../../components/organisms/AvailablityCalender";

export default function PlaceDetailPage() {
  // const { user, error, isLoading } = useUser();
  const [showCalender, setShowCalender] = useState(false);

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
      <QuickActionNav />
      <PlaceAboutUS />
      <PlaceUtils />
      <PlaceFeedback />
      <PlaceInstruction />
      <div
        onClick={async () => {
          setShowCalender(!showCalender);
        }}
        className="h-[3%] w-[60%] bg-white  rounded-xl bg-opacity-60 backdrop-blur-sm absolute top-[10%] z-20 border border-primary30 left-8 flex flex-col justify-center px-2 shadow-elvatedCard"
      >
        <div className="flex w-full justify-start gap-4">
          <BookIcon fill={"#023350"} className={"w-1/4 aspect-square "} />
          <h3 className="text-lg font-medium text-primary100 ">
            Check <br />{" "}
            <span className="text-lg font-bold text-primary100 ">
              {" "}
              availablity
            </span>
          </h3>
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
    </section>
  );
}
