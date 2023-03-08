import React, { useEffect } from "react";
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

export default function PlaceDetailPage() {
  const { user, error, isLoading } = useUser();
  console.log(user);
  const router = useRouter();
  const { placeID } = router.query;

  const dispatch = useDispatch();
  const PlaceState = useSelector((state) => state.places);
  const { placeSelected, err, loading } = PlaceState;

  useEffect(() => {
    if (!placeSelected && placeID) {
      dispatch(fetchSelectedPlace(placeID));
    }
  }, [placeSelected, placeID]);

  return (
    <section className="flex flex-col ">
      <HomeAppBar />
      <PlaceDetailImageSlider />
      <QuickActionNav />
      <PlaceAboutUS />
      <PlaceUtils />
      <PlaceFeedback />
      <PlaceInstruction />
    </section>
  );
}
