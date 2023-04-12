import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useMedia } from "react-use";

import { useDispatch } from "react-redux";
import { toggleFilterModel } from "../../storeSlices/settingSlice";

import BubbleRow from "../molecules/BubbleRow";
import SunSetIcon from "../../client/assets/icons/SunSetIcon";
import HouseBoldIcon from "../../client/assets/icons/HouseBoldIcon";

import CalenderBoldIcon from "../../client/assets/icons/CalenderBoldIcon";
import LockBoldIcon from "../../client/assets/icons/LockBoldIcon";
import CupBoldIcon from "../../client/assets/icons/CupBoldIcon";
import FilterBoldIcon from "../../client/assets/icons/FilterBoldIcon";

import { navVariants } from "../../client/utils/motion";

const initial = {
  child1: {
    scale: 1,
  },
  child2: {
    scale: 0.3,
  },
  child3: {
    scale: 0.1,
  },
};

function Hero() {
  const dispatch = useDispatch();
  const isMobile = useMedia("(max-width: 768px)");

  return (
    <div
      style={{
        background: "linear-gradient(to left, #0077be, #3fc3ee)",
      }}
      className="h-screen w-full shadow-hole flex justify-center  items-end  overflow-hidden rounded-b-20 "
    >
      <div className="w-full lg:w-[92%] h-[82%] flex flex-col items-end lg:flex-row  relative justify-end">
        <div className="lg:w-[42%] hidden lg:h-full lg:flex lg:flex-col gap-[8vh]">
          <div className="w-full flex flex-col gap-2">
            <p className="lg:text-3xl font-normal font-Koulen text-primary10">
              Escape Your Daily Routine
            </p>
            <p className="lg:text-6xl font-medium font-Koulen">
              Rent a Luxurious Pool House in Jordan Today!
            </p>
          </div>
          <div className="w-full flex flex-col gap-4 text-primary10">
            <div className="w-full flex justify-start gap-2">
              <LockBoldIcon fill={"#292D32"} className={"w-6 aspect-square"} />
              <p className="text-lg font-medium">
                secure and safe way to rent a pool house
              </p>
            </div>
            <div className="w-full flex justify-start gap-2">
              <CupBoldIcon fill={"#292D32"} className={"w-6 aspect-square"} />
              <p className="text-lg font-medium">
                only the best places pre approved by our team
              </p>
            </div>
            <div className="w-full flex justify-start gap-2">
              <FilterBoldIcon
                fill={"#292D32"}
                className={"w-6 aspect-square"}
              />
              <p className="text-lg font-medium">
                search filters to meet your needs
              </p>
            </div>
            <div className="w-full flex justify-start gap-2">
              <CalenderBoldIcon
                fill={"#292D32"}
                className={"w-6 aspect-square"}
              />
              <p className="text-lg font-medium">
                search based on availability know when your favorite place is
                available
              </p>
            </div>
          </div>
        </div>
        <div className=" h-[40%]  px-6 lg:hidden ">
          <div className="w-full flex flex-col gap-[5vh]">
            <div className="w-full flex flex-col gap-1">
              <p className="text-base font-normal  text-primary10">
                Escape Your Daily Routine
              </p>
              <p className="text-2xl font-bold font-IBMPlexSans">
                Rent a Luxurious Pool House in Jordan Today!
              </p>
            </div>
            <div
              onClick={() => {
                dispatch(toggleFilterModel());
              }}
              className="w-full z-20 py-3 aspect-longBton bg-secondry40 mx-auto rounded-2xl border cursor-pointer border-secondry10 shadow-flat flex justify-start gap-3 items-center px-6"
            >
              <HouseBoldIcon fill={"#ffff"} className={"h-10 aspect-square "} />
              <div className="flex flex-col gap-0 items-start">
                <p className="text-lg font-bold text-primary90">Book Now</p>
                <p className="text-sm font-medium text-primary90">
                  only 3 steps for
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="lg:w-[68%] w-full h-[62%] lg:h-full relative">
          <AnimatePresence>
            <motion.div
              initial={initial.child1}
              animate={{
                top: isMobile ? [30, 20, 0, 30] : [300, 220, 0, 300],
                left: isMobile ? [100, 50, 18, 60] : [500, 250, 0, 500],
                scale: [0.1, 0.3, 1, 0.1],
                opacity: [0, 0.4, 1, 0],
              }}
              transition={{
                duration: 15.5,
                repeat: Infinity,
                repeatType: "loop",
                ease: "easeInOut",
              }}
              className="w-[84%] lg:w-[58%]  absolute top-0   aspect-square rounded-20 border-2 shadow-elvatedCard border-primary20 bg-white overflow-hidden"
            >
              <div className="w-full h-full relative">
                <img
                  alt="kid enjoying a swim in the pool"
                  className="w-full aspect-square object-cover"
                  src="https://firebasestorage.googleapis.com/v0/b/qanadilodesign.appspot.com/o/other%2FFamilyPoolTime.jpg?alt=media&token=610ee37f-d6d8-4398-8303-512e76582ba7"
                />
                <div className="w-full h-[80%] imgOverlayColor absolute  bottom-0 flex justify-start p-10 items-end">
                  <p className="text-xl font-semibold text-white">
                    Fun Family <br />
                    <span className="text-primary90 text-lg">memorys</span>
                  </p>
                </div>
              </div>
            </motion.div>
            <motion.div
              initial={initial.child2}
              animate={{
                top: isMobile ? [20, 0, 30, 20] : [220, 0, 300, 250],
                left: isMobile ? [20, 18, 30, 20] : [250, 0, 500, 250],
                scale: [0.3, 1, 0.1, 0.3],
                opacity: [0.4, 1, 0, 0.4],
              }}
              transition={{
                duration: 15.5,
                repeat: Infinity,
                repeatType: "loop",
                ease: "easeInOut",
              }}
              className="w-[84%] lg:w-[58%]  absolute top-0   aspect-square rounded-20 border-2 shadow-elvatedCard border-primary20 bg-white overflow-hidden"
            >
              <div className="w-full h-full relative">
                <img
                  alt="kid enjoying a swim in the pool"
                  className="w-full aspect-square object-cover"
                  src="https://firebasestorage.googleapis.com/v0/b/qanadilodesign.appspot.com/o/other%2Frafael-hoyos-weht-Aqot8S_Keb8-unsplash.jpg?alt=media&token=0134da9a-b1ce-4860-b2f4-ce2c23e3449c"
                />
                <div className="w-full h-[80%] imgOverlayColor absolute  bottom-0 flex justify-start p-10 items-end">
                  <p className="text-xl font-semibold text-white">
                    Fun Family <br />
                    <span className="text-primary90 text-lg">memorys</span>
                  </p>
                </div>
              </div>
            </motion.div>
            <motion.div
              initial={initial.child3}
              animate={{
                top: isMobile ? [0, 30, 20, 0] : [0, 300, 220, 0],
                left: isMobile ? [18, 30, 20, 18] : [0, 500, 250, 0],
                scale: [1, 0.1, 0.3, 1],
                opacity: [1, 0, 0.4, 1],
              }}
              transition={{
                duration: 15.5,
                repeat: Infinity,
                repeatType: "loop",
                ease: "easeInOut",
              }}
              className="w-[84%] lg:w-[58%]  absolute top-0   aspect-square rounded-20 border-2 shadow-elvatedCard border-primary20 bg-white overflow-hidden"
            >
              <div className="w-full h-full relative">
                <img
                  alt="kid enjoying a swim in the pool"
                  className="w-full aspect-square object-cover"
                  src="https://images.pexels.com/photos/9044049/pexels-photo-9044049.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                />
                <div className="w-full h-[80%] imgOverlayColor absolute  bottom-0 flex justify-start p-10 items-end">
                  <p className="text-xl font-semibold text-white">
                    Fun Family <br />
                    <span className="text-primary90 text-lg">memorys</span>
                  </p>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
      <div className="absolute w-full h-full top-0 left-0 ">
        <div
          className="w-full h-full absolute top-0"
          style={{
            background: `url('https://firebasestorage.googleapis.com/v0/b/qanadilodesign.appspot.com/o/other%2Fstream.png?alt=media&token=76ecbf51-5ec3-4e33-9880-2fa5fb60f8cf')`,
          }}
        />
        <BubbleRow />
        <BubbleRow />
        <BubbleRow />
      </div>
    </div>
  );
}

export default Hero;
