import React from "react";
import { useRouter } from "next/router";
import { motion } from "framer-motion";

import HomeAppBar from "../../../components/organisms/HomeAppBar";
import QuickActionNav from "../../../components/organisms/QuickActionNav";
import PlaceAboutUS from "../../../components/sections/PlaceAboutUS";
import PlaceUtils from "../../../components/sections/PlaceUtils";
import PlaceDetailImageSlider from "../../../components/sections/PlaceDetailImageSlider";
import PlaceFeedback from "../../../components/sections/PlaceFeedback";

import { stylesObj } from "../../../styles/stylesSpecific";

import BookIcon from "../../../client/assets/icons/BookIcon";
import HeartIcon from "../../../client/assets/icons/HeartIcon";

export default function PlaceDetailPage() {
  const router = useRouter();
  const { placeID } = router.query;

  return (
    <section className="flex flex-col ">
      <HomeAppBar />
      <PlaceDetailImageSlider />
      <QuickActionNav />
      <PlaceAboutUS />
      <PlaceUtils />
      <PlaceFeedback />
    </section>
  );
}
