import React, { useState } from "react";
import Spline from "@splinetool/react-spline";
import TypingText from "../molecules/TypingText";
import { motion } from "framer-motion";

function Hero() {
  const [loaded, setloaded] = useState(false);

  return (
    <div className="flex flex-col py-16 pt-28 gap-7  relative items-center z-10 h-auto overflow-hidden">
      <div className="gradient-02 h-full w-full" />
      <div className="gradient-04 h-full w-1/3 absolute bottom-0 right-0" />
      <div className="flex flex-col px-5 gap-6 z-10 w-11/12 ">
        <TypingText
          title={"time for summer fun"}
          classes={"font-Koulen font-semibold text-5xl text-primary"}
        />
        <TypingText
          delay={0.3}
          title={
            "our places collection is the top places to have a good summer fun"
          }
          classes={
            "font-Koulen font-thin text-lg text-secondry text-opacity-75"
          }
        />
      </div>
      <div className="w-screen h-full flex flex-col items-center justify-center">
        <img
          className="z-0 opacity-90 w-11/12 object-fill "
          src="https://firebasestorage.googleapis.com/v0/b/qanadilodesign.appspot.com/o/other%2Fherochalet.png?alt=media&token=066383dd-6408-464c-b482-1d5d03fac447"
        />
        <div className="w-full bg-white h-32 shadow-hole  rounded-blob overflow-hidden ">
          <motion.img
            animate={{
              scale: [1, 1.2, 1.1, 1.3, 1],
              rotate: [0, 7.5, -5, 0, 10],
              x: [0, 5, -3, 0, 0],
              transition: {
                type: "spring",
                duration: 35,
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
