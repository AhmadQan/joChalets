import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { useDispatch, useSelector } from "react-redux";
import { useUser } from "@auth0/nextjs-auth0/client";

import { fetchSelectedPlace } from "../../../storeSlices/placesSlice";

import HomeAppBar from "../../../components/organisms/HomeAppBar";
import QuickActionNav from "../../../components/organisms/QuickActionNav";
import PlaceAboutUS from "../../../components/sections/PlaceAboutUS";
import PlaceUtils from "../../../components/sections/PlaceUtils";
import PlaceDetailImageSlider from "../../../components/sections/PlaceDetailImageSlider";
import PlaceFeedback from "../../../components/sections/PlaceFeedback";
import PlaceInstruction from "../../../components/sections/PlaceInstruction";
import BookIcon from "../../../client/assets/icons/BookIcon";
import CloseCirculeIcon from "../../../client/assets/icons/CloseCirculeIcon";

import { Calendar } from "react-date-range";

import "react-date-range/dist/styles.css"; // main style file
import "react-date-range/dist/theme/default.css"; // theme css file

export default function PlaceDetailPage() {
  const { user, error, isLoading } = useUser();
  const [showCalender, setShowCalender] = useState(false);
  console.log(user);
  const router = useRouter();
  const { placeID } = router.query;

  const dispatch = useDispatch();
  const PlaceState = useSelector((state) => state.places);
  const { placeSelected, err, loading } = PlaceState;

  const { bookingList } = placeSelected;

  console.log(new Date(1676098800000).toLocaleString());

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
        onClick={() => {
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
        <div className="fixed bg-opacity-60 backdrop-blur-sm bg-re z-20 w-screen h-screen bg-primary90 flex flex-col justify-start gap-[20%]">
          <CloseCirculeIcon
            onClick={() => {
              setShowCalender(!showCalender);
            }}
            fill={"rgb(248, 113, 113)"}
            className={"w-10 aspect-square"}
          />
          <Calendar
            disabledDates={[new Date(1678863600000), new Date(1678258800000)]}
            dayContentRenderer={(date) => {}}
            rangeColors={["#C8F9D1", "#C8F9D1", "#C8F9D1"]}
            onChange={(date) => {
              console.log(date.toLocaleString());
            }}
            minDate={new Date()}
          />
        </div>
      )}
    </section>
  );
}
