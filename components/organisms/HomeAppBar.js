import React, { useState } from "react";
import { motion } from "framer-motion";
import { useDispatch } from "react-redux";
import Link from "next/link";
import { useSelector } from "react-redux";

import { toggleAddModel } from "../../storeSlices/placesSlice";
import { toggleFilterModel } from "../../storeSlices/settingSlice";
import { useUser } from "@auth0/nextjs-auth0/client";
import { stylesObj } from "../../styles/stylesSpecific/index";
import FilterForm from "./FilterForm";

export default function HomeAppBar() {
  const dispatch = useDispatch();
  const seetingStore = useSelector((state) => state.settings);
  const { showFilterModel } = seetingStore;

  const [isopen, setisopen] = useState(false);

  const { user, error, isLoading } = useUser();

  console.log(user, isLoading, error);

  const LogedinButtons = (
    <div className="flex flex-col justify-center items-center  gap-5 ">
      {user?.dbinfo?.role === "customer" ? (
        <Link
          href={""}
          className={`${stylesObj.buttons.textBTN} text-secondryDark border-b-2 pb-1`}
        >
          profile
        </Link>
      ) : user?.dbinfo?.role === "admin" ? (
        <>
          <Link
            href={""}
            className={`${stylesObj.buttons.textBTN} text-secondryDark border-b-2 pb-1`}
          >
            admin
          </Link>
          ,
          <button
            onClick={() => {
              dispatch(toggleAddModel());
            }}
            className={`${stylesObj.buttons.textBTN} text-secondryDark border-b-2 pb-1`}
          >
            add Place
          </button>
          ,
        </>
      ) : user?.dbinfo?.role === "owner" ? (
        <Link
          href={""}
          className={`${stylesObj.buttons.textBTN} text-secondryDark border-b-2 pb-1`}
        >
          dashboard
        </Link>
      ) : (
        <></>
      )}
      <Link
        className={`${stylesObj.buttons.textBTN} text-red border-b-2 pb-1`}
        href="/api/auth/logout"
      >
        Logout
      </Link>
    </div>
  );

  const LogedoutButtons = (
    <div className=" text-primaryDark font-bold cursor-pointer font-Koulen">
      <Link
        className={`${stylesObj.buttons.textBTN} text-secondryDark border-b-2 pb-1`}
        href="/api/auth/login"
      >
        Login
      </Link>
    </div>
  );

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

  const variants = {
    open: { opacity: 1, x: 0 },
    closed: { opacity: 0, x: "-100%" },
  };

  return (
    <motion.nav
      className=" shadow-secondryligth  bg-gray-200 bg-opacity-30 backdrop-blur-md shadow-md rounded-b-2xl flex flex-col w-full z-20 fixed top-0"
      initial="hidden"
      whileInView={"show"}
      variants={navVariant}
    >
      <div className="p-5  flex justify-start gap-3 items-center ">
        <button
          className={`${stylesObj.buttons.textBTN} text-primaryDark font-bold  font-IBMPlexSansArabic`}
        >
          JoChalets
        </button>
        <div className="flex-1">
          <button
            className={`flex-1 w-1/2 ${
              showFilterModel ? "bg-secondry" : "bg-secondryBase"
            }  p-2 shadow-md rounded-full`}
            onClick={() => {
              dispatch(toggleFilterModel());
              console.log(showFilterModel);
            }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6 text-secondryDark"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
              />
            </svg>
          </button>
        </div>
        {user ? (
          <svg
            className="text-secondryDark w-8"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            onClick={(e) => {
              e.preventDefault();
              setisopen((isopen) => !isopen);
            }}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3.75 5.25h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5"
            />
          </svg>
        ) : (
          LogedoutButtons
        )}
      </div>
      {isopen && user && (
        <motion.nav
          className="w-auto h-auto bg-secondryligth  backdrop-blur-sm bg-opacity-25 py-6 "
          initial="hidden"
          whileInView={"show"}
          animate={isopen ? "open" : "closed"}
          variants={variants}
        >
          {user ? LogedinButtons : LogedoutButtons}
        </motion.nav>
      )}
      {showFilterModel && <FilterForm />}
    </motion.nav>
  );
}
