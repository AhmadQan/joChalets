import React, { useEffect, useState } from "react";
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
import SunFogBoldIcon from "../../client/assets/icons/SunFogBoldIcon";

const initial = {
  child1: { x: -160, opacity: 0 },
  child2: {},
  child3: {},
};

function Hero() {
  const [activeDiv, setActiveDiv] = useState(0);

  const divs = [
    {
      key: 1,
      src: "https://firebasestorage.googleapis.com/v0/b/qanadilodesign.appspot.com/o/other%2FFamilyPoolTime.jpg?alt=media&token=610ee37f-d6d8-4398-8303-512e76582ba7",
      content: "For The Family",
      paragraph: "let the Summer fun begin",
    },
    {
      key: 2,
      src: "https://firebasestorage.googleapis.com/v0/b/qanadilodesign.appspot.com/o/other%2FUntitled%20design.png?alt=media&token=9acef2f1-0905-4d61-8d05-2cc266eb5ea1",
      content: "Firing up the grill ",
      paragraph: "for a sizzling summer party ",
    },
    {
      key: 3,
      src: "https://firebasestorage.googleapis.com/v0/b/qanadilodesign.appspot.com/o/other%2FManWorkingByThePool.png?alt=media&token=c750e462-3985-4cd1-b2e0-2539b66ada1d",
      content: "Work with a view",
      paragraph: "soak up the sun by your favorite office",
    },
  ];

  useEffect(() => {
    const intervalId = setInterval(() => {
      setActiveDiv((prevActiveDiv) => (prevActiveDiv + 1) % divs.length);
    }, 4000); // Change this value to adjust the interval between div switches

    return () => clearInterval(intervalId);
  }, []);
  const dispatch = useDispatch();
  const isMobile = useMedia("(max-width: 768px)");

  return (
    <div
      style={{
        background:
          "linear-gradient(169.63deg, #0077BE 1.07%, rgba(63, 195, 238, 0.4) 100.08%)",
      }}
      className="h-screen bg-white w-full shadow-hole flex justify-center  items-end  overflow-hidden rounded-b-20 "
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
        <div className=" h-[40%]  w-full px-6 lg:hidden ">
          <div className="w-full h-full flex flex-col justify-center pt-8 gap-[5vh]">
            <div
              onClick={() => {
                dispatch(toggleFilterModel());
              }}
              className="w-full z-20 py-3 aspect-textField bg-secondry40 mx-auto rounded-2xl border cursor-pointer border-secondry10 shadow-flat flex justify-start gap-3 items-center px-6"
            >
              <FilterBoldIcon
                fill={"#ffff"}
                className={"h-10 aspect-square "}
              />
              <div className="flex flex-col gap-0 items-start">
                <p className="text-lg font-bold text-primary90">Book Now</p>
                <p className="text-sm font-medium text-primary90">
                  only 3 steps for
                </p>
              </div>
            </div>
            <SunFogBoldIcon
              fill={"#F9FFB7"}
              className={"absolute top-0 right-0 w-[58%] aspect-square"}
            />
          </div>
        </div>
        <div className="lg:w-[68%] w-full h-[68%] lg:h-full relative">
          <AnimatePresence>
            {divs.map((div, index) => (
              <>
                {activeDiv === index && (
                  <div className="w-full h-full justify-end">
                    <motion.div
                      className="z-20 absolute top-0 px-3 flex flex-col"
                      initial={initial.child1}
                      animate={{
                        x: isMobile ? [-160, 0, 0, 160] : [-500, -250, 0, 500],
                        opacity: [0, 1, 1, 0],
                      }}
                      transition={{
                        duration: 3.8,
                        repeatType: "mirror",
                        ease: "easeIn",
                      }}
                    >
                      <p className="text-3xl text-white font-bold ">
                        {div?.content}
                      </p>
                      <p className="text-xl text-white font-medium mx-5 ">
                        {div?.paragraph}
                      </p>
                    </motion.div>
                    <motion.div
                      key={div.key}
                      initial={initial.child1}
                      animate={{
                        x: isMobile ? [160, 20, 20, -160] : [500, 250, 0, -500],
                        opacity: [0, 1, 1, 0],
                      }}
                      transition={{
                        duration: 3.8,
                        repeatType: "mirror",
                        ease: "easeIn",
                      }}
                      className="w-[84%] lg:w-[58%]  absolute bottom-0 aspect-square rounded border-2 shadow-elvatedCard border-primary20 bg-white overflow-hidden"
                    >
                      <div className="w-full h-full relative">
                        <img
                          alt="kid enjoying a swim in the pool"
                          className="w-full aspect-square object-cover"
                          src={`${div?.src}`}
                        />
                      </div>
                    </motion.div>
                  </div>
                )}
              </>
            ))}
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
