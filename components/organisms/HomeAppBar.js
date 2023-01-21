import React, { useState } from "react";
import { motion } from "framer-motion";
import { useDispatch } from "react-redux";

import { toggleAddModel } from "../../storeSlices/placesSlice";
import { useUser } from "@auth0/nextjs-auth0/client";
import { stylesObj } from "../../styles/stylesSpecific/index";

export default function HomeAppBar() {
  const dispatch = useDispatch();

  const [isopen, setisopen] = useState(false);

  const { user, error, isLoading } = useUser();

  console.log(user, isLoading, error);

  const LogedinButtons = (
    <div className="flex flex-col justify-center items-center  gap-5 ">
      {user?.dbinfo?.role === "customer" ? (
        [
          <a
            className={`${stylesObj.buttons.textBTN} text-secondryDark border-b-2 pb-1`}
          >
            profile
          </a>,
        ]
      ) : user?.dbinfo?.role === "admin" ? (
        [
          <a
            className={`${stylesObj.buttons.textBTN} text-secondryDark border-b-2 pb-1`}
          >
            admin
          </a>,
          <button
            onClick={() => {
              dispatch(toggleAddModel());
            }}
            className={`${stylesObj.buttons.textBTN} text-secondryDark border-b-2 pb-1`}
          >
            add Place
          </button>,
        ]
      ) : user?.dbinfo?.role === "owner" ? (
        [
          <a
            className={`${stylesObj.buttons.textBTN} text-secondryDark border-b-2 pb-1`}
          >
            dashboard
          </a>,
        ]
      ) : (
        <></>
      )}
      <a
        className={`${stylesObj.buttons.textBTN} text-red border-b-2 pb-1`}
        href="/api/auth/logout"
      >
        Logout
      </a>
    </div>
  );

  const LogedoutButtons = (
    <div className=" text-primaryDark font-bold cursor-pointer font-Koulen">
      <a
        className={`${stylesObj.buttons.textBTN} text-secondryDark border-b-2 pb-1`}
        href="/api/auth/login"
      >
        Login
      </a>
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
      className="border-b-2 border-secondry bg-primaryBase bg-opacity-25 backdrop-blur-sm shadow-lg rounded-b-2xl flex flex-col w-full z-20 fixed top-0"
      initial="hidden"
      whileInView={"show"}
      variants={navVariant}
    >
      <div className="p-5  flex justify-between items-center ">
        <button
          className={`${stylesObj.buttons.textBTN} text-primaryDark font-bold  font-IBMPlexSansArabic`}
        >
          JoChalets
        </button>
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
          {/* <Toggle onClick={() => setisopen((isopen) => !isopen)} /> */}
          {/* <Items /> */}
          {user ? LogedinButtons : LogedoutButtons}
        </motion.nav>
      )}
    </motion.nav>
  );
}
