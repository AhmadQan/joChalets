import React from "react";
import { motion } from "framer-motion";

import { useDispatch } from "react-redux";
import { toggleFilterModel } from "../../storeSlices/settingSlice";

import BubbleRow from "../molecules/BubbleRow";
import SunSetIcon from "../../client/assets/icons/SunSetIcon";
import HouseBoldIcon from "../../client/assets/icons/HouseBoldIcon";
import { navVariants } from "../../client/utils/motion";
function Hero() {
  const dispatch = useDispatch();

  return (
    <div className="h-screen w-full bg-white shadow-hole flex flex-col justify-between  items-center overflow-hidden relative">
      <img
        alt="jochalets bubble background"
        src="https://firebasestorage.googleapis.com/v0/b/qanadilodesign.appspot.com/o/other%2Fstream.png?alt=media&token=76ecbf51-5ec3-4e33-9880-2fa5fb60f8cf"
        className={"w-full object-cover absolute top-0"}
      />
      <BubbleRow />
      <BubbleRow />
      <BubbleRow />
      <SunSetIcon
        fill={"#F9FFB7"}
        className={"w-1/2 aspect-square absolute top-[12vh] right-0"}
      />
      <div className="h-[91.549vh] w-full absolute top-0  flex flex-col items-center justify-end gap-[9.4vh] ">
        <h3 className=" text-primary90 text-base font-medium  ">
          Jordan <br />
          <span className="text-xl font-bold">Places For Summer Time</span>
        </h3>
        <motion.div
          initial="hidden"
          whileInView={"show"}
          variants={navVariants}
          className="h-[60.128%] w-[93.606%] bluegradientBg border border-primary50 backdrop-blur-md rounded-20 flex flex-col gap-8 items-center justify-between"
        >
          <div
            onClick={() => {
              dispatch(toggleFilterModel());
            }}
            className="w-[70%] aspect-btnOutlined mt-[3%] bg-white rounded-full border cursor-pointer border-primary50 shadow-flat flex justify-start gap-3 items-center px-6"
          >
            <HouseBoldIcon fill={"#35E956"} className={"h-10 aspect-square "} />
            <p className="text-lg font-bold text-primary90">
              Book Now
              <br />
              <span className="font-normal text-primary100 text-base">
                only 3 steps for
              </span>
            </p>
          </div>
          <div className="w-full relative aspect-square rounded-20 border-2 shadow-elvatedCard border-primary20 bg-white overflow-hidden">
            <img
              alt="kid enjoying a swim in the pool"
              className="w-full aspect-square object-cover"
              src="https://images.pexels.com/photos/9044049/pexels-photo-9044049.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            />
            <div className="w-full h-[80%] imgOverlayColor absolute z-10 bottom-0 flex justify-start p-10 items-end">
              <p className="text-xl font-semibold text-white">
                Fun Family <br />
                <span className="text-primary90 text-lg">memorys</span>
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

export default Hero;
