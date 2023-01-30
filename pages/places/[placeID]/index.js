import React from "react";
import { useRouter } from "next/router";
import { motion } from "framer-motion";

import HomeAppBar from "../../../components/organisms/HomeAppBar";
import QuickActionNav from "../../../components/organisms/QuickActionNav";

import { stylesObj } from "../../../styles/stylesSpecific";

import BookIcon from "../../../client/assets/icons/BookIcon";
import HeartIcon from "../../../client/assets/icons/HeartIcon";

export default function PlaceDetailPage() {
  const router = useRouter();
  const { placeID } = router.query;

  return (
    <section className="flex flex-col min-h-[200vh]">
      <HomeAppBar />
      <div className="h-[63vh] w-screen bg-secondryDark relative">
        <motion.img
          className="h-full object-cover absolute top-0 z-0"
          src={`https://firebasestorage.googleapis.com/v0/b/qanadilodesign.appspot.com/o/images%2F63cc28528963c01baf7c3dbf%2FIMG-20220808-WA0132.jpg6624171c-11bd-454d-8521-34b87f33c45d?alt=media&token=adea94bd-6303-4b37-9a2d-a4821b65e7f6`}
        />
        <div
          style={{
            background:
              "linear-gradient(180deg, rgba(82, 136, 216, 0) 10%, #5288D8 100%)",
          }}
          className="h-2/3 justify-end w-full p-9 flex flex-col gap-9 absolute bottom-0  z-10"
        >
          <BookIcon fill={"#94ebc0"} className={"w-1/5 aspect-square "} />
          <div className="flex justify-between items-end">
            <h2 className="text-3xl font-IBMPlexSans font-normal text-white">
              Welcome To <br /> {`  Place name`}
            </h2>
            <div>
              <HeartIcon fill={"#BF3115"} className={"w-8 aspect-square "} />
              <p className="text-white">235 people</p>
            </div>
          </div>
        </div>
      </div>
      <QuickActionNav />
    </section>
  );
}
