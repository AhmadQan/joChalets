import React, { useState } from "react";
import Spline from "@splinetool/react-spline";
import TypingText from "../molecules/TypingText";
import { motion } from "framer-motion";

function Hero() {
  const [loaded, setloaded] = useState(false);

  return (
    <div className="flex flex-col py-16 pt-28 gap-7  relative items-center z-10 h-auto overflow-hidden">
      <div className="gradient-02 h-full w-full" />
      <div className="gradient-04 h-full w-1/3 absolute top-0 left-0" />
      <div className="flex flex-col px-5 gap-6 z-10 w-11/12 ">
        <TypingText
          title={"time for summer fun"}
          classes={"font-Koulen font-semibold text-5xl text-secondryDark"}
        />
        <TypingText
          delay={0.3}
          title={
            "our places collection is the top places to have a good summer fun"
          }
          classes={
            "font-Koulen font-thin text-lg text-primaryBase text-opacity-75"
          }
        />
      </div>
      <div className="w-screen h-full flex flex-col items-center justify-center relative">
        <img
          className=" aspect-square w-11/12 object-fill  opacity-90 z-10 "
          src="https://firebasestorage.googleapis.com/v0/b/qanadilodesign.appspot.com/o/other%2FHeroChaletSqure.png?alt=media&token=ffb05d0d-d99d-4d8f-9ed3-279d47c1c45c"
        />
        <div className="w-doubleScreen  h-32 shadow-hole  absolute z-0 overflow-hidden ">
          <motion.img
            animate={{
              scale: [1, 1.19, 1.1, 1.13, 1],

              x: [0, 15, -15, 0, 5],
              transition: {
                type: "tween",
                duration: 20,
                repeat: Infinity,
              },
            }}
            className="object-fill w-full h-48 opacity-60  "
            src="https://firebasestorage.googleapis.com/v0/b/qanadilodesign.appspot.com/o/other%2Fpool%20water.jfif?alt=media&token=8d05a367-55fa-4275-9de5-2faca9fa3a24"
          />
        </div>
      </div>
    </div>
  );
}

export default Hero;
