import * as React from "react";
import { motion } from "framer-motion";
import { useDispatch } from "react-redux";

import { toggleAddModel } from "../../storeSlices/placesSlice";

export default function HomeAppBar() {
  const dispatch = useDispatch();

  const navVariant = {
    hidden: {
      opacity: 0,
      y: -50,
      transition: {
        type: "tween",
      },
    },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        type: "tween",
      },
    },
  };
  return (
    <motion.nav
      className="border-b-2 border-secondryligth bg-primaryBase bg-opacity-25 backdrop-blur-sm shadow-lg rounded-b-2xl"
      initial="hidden"
      whileInView={"show"}
      variants={navVariant}
    >
      <div className="p-5  flex justify-between items-center">
        <h1 className="text-secondryligth font-Koulen  font-normal text-2xl">
          JoChalets
        </h1>
        <button
          onClick={() => {
            dispatch(toggleAddModel());
          }}
          className="font-Koulen text-secondryligth"
        >
          add Place
        </button>
        <svg
          className="text-secondryligth w-8"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M3.75 5.25h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5"
          />
        </svg>
      </div>{" "}
    </motion.nav>
  );
}
