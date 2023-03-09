import React, { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { useSelector, useDispatch } from "react-redux";

import { useUser } from "@auth0/nextjs-auth0/client";
import { createPlaces, toggleAddModel } from "../../storeSlices/placesSlice";

import NotificationIcon from "../../client/assets/icons/NotificationIcon";
import { navVariants } from "../../client/utils/motion";
import MenuOutlineIcon from "../../client/assets/icons/MenuOutlineIcon";

export default function HomeAppBar() {
  const dispatch = useDispatch();
  const [avatarMenu, setAvatarMenu] = useState(false);

  const { user, error, isLoading } = useUser();

  return (
    <motion.nav
      initial="hidden"
      whileInView={"show"}
      variants={navVariants}
      className="w-full h-[12.206vh]  fixed top-0 z-10 flex justify-center items-end"
    >
      <div className="w-[93.606%] h-[69.23%] bluegradientBg rounded-xl backdrop-blur-md shadow-flat border-primary50 border flex justify-between px-4 items-center">
        <div className="flex justify-center items-center w-12 aspect-square bg-secondryBase rounded-full border border-primary50 shadow-flat">
          <Link href={"/"}>
            <img
              className="w-10  object-cover"
              alt="jochalets logo"
              src="https://firebasestorage.googleapis.com/v0/b/qanadilodesign.appspot.com/o/other%2Fjochaletfullwhiteblue.png?alt=media&token=f5ac7ee2-a809-44ba-b1b8-09125065393d"
            />
          </Link>
        </div>
        <div className="flex gap-2 w-auto relative">
          <NotificationIcon fill={"#5AED75"} className={"w-8 aspect-square "} />

          <div className="w-auto h-12 bg-white rounded-full border border-primary50 shadow-flat flex justify-center items-center">
            {user?.picture ? (
              <div
                onClick={() => {
                  setAvatarMenu(!avatarMenu);
                }}
                className="flex justify-center items-center gap-8 will-change-auto p-2 h-full w-full"
              >
                <div className="w-8 flex justify-center items-center rounded-lg aspect-square bg-secondryBase rounded-8">
                  <MenuOutlineIcon
                    fill={"#fff"}
                    className={"w-6 aspect-square"}
                  />
                </div>
                <p>{user?.given_name}</p>
              </div>
            ) : (
              <Link
                className={`text-sm font-bold text-primary90 px-6`}
                href="/api/auth/login"
              >
                Login
              </Link>
            )}
          </div>
          {avatarMenu && (
            <div className="w-[32.99vw] flex flex-col gap-4 h-auto px-2 py-2 bg-white absolute text-xs font-bold text-primary90 top-full right-0 border-primary50 border shadow-flat rounded-md">
              <Link href={"/api/auth/logout"}>Log Out</Link>
              {user?.dbinfo?.role === "admin" && (
                <div className="w-full  ">
                  <button
                    onClick={() => {
                      dispatch(toggleAddModel());
                    }}
                  >
                    Register Place
                  </button>
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </motion.nav>
  );
}
