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
import { getPlaceAvailablity } from "../../../storeSlices/placesSlice";

import {
  getThisMonthArray,
  checkDatesAvilablity,
} from "../../../client/helpers/datesHelper";

import "react-date-range/dist/styles.css"; // main style file
import "react-date-range/dist/theme/default.css"; // theme css file

export default function PlaceDetailPage() {
  const { user, error, isLoading } = useUser();
  const [availablityLs, setAvailablityLs] = useState([]);
  const [showCalender, setShowCalender] = useState(false);

  const router = useRouter();
  const { placeID } = router.query;

  const dispatch = useDispatch();
  const PlaceState = useSelector((state) => state.places);
  const { placeSelected, err, loading, placeAvailablity } = PlaceState;

  const disabledDates = placeAvailablity
    ?.filter((item) => {
      return !item?.availableMorning && !item?.availableEvening;
    })
    .map((item) => {
      return new Date(item.date);
    });

  const availableAtEvening = placeAvailablity
    ?.filter((item) => {
      return !item?.availableMorning && item?.availableEvening;
    })
    .map((item) => {
      return new Date(item.date);
    });

  const availableAtMorning = placeAvailablity
    ?.filter((item) => {
      return item?.availableMorning && !item?.availableEvening;
    })
    .map((item) => {
      return new Date(item.date);
    });

  useEffect(() => {
    if (!placeSelected && placeID) {
      dispatch(fetchSelectedPlace(placeID));
    }
  }, [placeSelected, placeID]);

  function renderCustomDayContent(day) {
    // Here you can add any custom content for the day cell

    let isMorning = false;
    let isEvening = false;

    availableAtMorning?.forEach((date) => {
      if (date.toDateString() === day.toDateString()) {
        isMorning = true;
      }
    });
    availableAtEvening?.forEach((date) => {
      if (date.toDateString() === day.toDateString()) {
        isEvening = true;
      }
    });

    return (
      <div
        className={`text-green-700 ${
          isMorning ? "bg-yellow-100" : isEvening ? "bg-blue-400" : ""
        } w-full`}
      >
        <span>{day.getDate()}</span>
      </div>
    );
  }

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
          dispatch(getPlaceAvailablity(placeID));
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
            disabledDates={disabledDates}
            dayContentRenderer={renderCustomDayContent}
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
