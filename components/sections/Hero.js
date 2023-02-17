import React from "react";
import { motion } from "framer-motion";

function Hero() {
  const initialBubblesState = {
    y: 0,
    scale: 0.5,
    opacity: 1,
  };
  const endBubbleState = {
    y: -600,
    scale: 1,
    opacity: 0.8,
  };
  return (
    <div className="h-screen w-full bg-bgGray shadow-hole flex flex-col justify-between  items-center ">
      <div className="h-auto w-full flex justify-between">
        <motion.div
          initial={initialBubblesState}
          animate={endBubbleState}
          transition={{ duration: 9, repeat: Infinity, type: "tween" }}
          className="w-20 aspect-square rounded-full bubblerGradient border border-blue-200"
        />
        <motion.div
          initial={initialBubblesState}
          animate={endBubbleState}
          transition={{
            duration: 9,
            repeat: Infinity,
            type: "tween",
            delay: 0.3,
          }}
          className="w-16 aspect-square rounded-full bubblerGradient border border-blue-200"
        />
        <motion.div
          initial={initialBubblesState}
          animate={endBubbleState}
          transition={{ duration: 9, repeat: Infinity, type: "tween" }}
          className="w-20 aspect-square rounded-full bubblerGradient border border-blue-200"
        />
        <motion.div
          initial={initialBubblesState}
          animate={endBubbleState}
          transition={{
            duration: 9,
            repeat: Infinity,
            type: "tween",
            delay: 0.6,
          }}
          className="w-20 aspect-square rounded-full bubblerGradient border border-blue-200"
        />
      </div>
      <div className="h-auto w-full flex justify-between">
        <motion.div
          initial={initialBubblesState}
          animate={endBubbleState}
          transition={{ duration: 9, repeat: Infinity, type: "tween" }}
          className="w-20 aspect-square rounded-full bubblerGradient border border-blue-200"
        />
        <motion.div
          initial={initialBubblesState}
          animate={endBubbleState}
          transition={{
            duration: 9,
            repeat: Infinity,
            type: "tween",
            delay: 0.3,
          }}
          className="w-16 aspect-square rounded-full bubblerGradient border border-blue-200"
        />
        <motion.div
          initial={initialBubblesState}
          animate={endBubbleState}
          transition={{ duration: 9, repeat: Infinity, type: "tween" }}
          className="w-20 aspect-square rounded-full bubblerGradient border border-blue-200"
        />
        <motion.div
          initial={initialBubblesState}
          animate={endBubbleState}
          transition={{
            duration: 9,
            repeat: Infinity,
            type: "tween",
            delay: 0.6,
          }}
          className="w-20 aspect-square rounded-full bubblerGradient border border-blue-200"
        />
      </div>
      <div className="h-auto w-full flex justify-between">
        <motion.div
          initial={initialBubblesState}
          animate={endBubbleState}
          transition={{ duration: 9, repeat: Infinity, type: "tween" }}
          className="w-20 aspect-square rounded-full bubblerGradient border border-blue-200"
        />
        <motion.div
          initial={initialBubblesState}
          animate={endBubbleState}
          transition={{
            duration: 9,
            repeat: Infinity,
            type: "tween",
            delay: 0.3,
          }}
          className="w-16 aspect-square rounded-full bubblerGradient border border-blue-200"
        />
        <motion.div
          initial={initialBubblesState}
          animate={endBubbleState}
          transition={{ duration: 9, repeat: Infinity, type: "tween" }}
          className="w-20 aspect-square rounded-full bubblerGradient border border-blue-200"
        />
        <motion.div
          initial={initialBubblesState}
          animate={endBubbleState}
          transition={{
            duration: 9,
            repeat: Infinity,
            type: "tween",
            delay: 0.6,
          }}
          className="w-20 aspect-square rounded-full bubblerGradient border border-blue-200"
        />
      </div>
      <div className="h-auto w-full flex justify-between">
        <motion.div
          initial={initialBubblesState}
          animate={endBubbleState}
          transition={{ duration: 9, repeat: Infinity, type: "tween" }}
          className="w-20 aspect-square rounded-full bubblerGradient border border-blue-200"
        />
        <motion.div
          initial={initialBubblesState}
          animate={endBubbleState}
          transition={{
            duration: 9,
            repeat: Infinity,
            type: "tween",
            delay: 0.3,
          }}
          className="w-16 aspect-square rounded-full bubblerGradient border border-blue-200"
        />
        <motion.div
          initial={initialBubblesState}
          animate={endBubbleState}
          transition={{ duration: 9, repeat: Infinity, type: "tween" }}
          className="w-20 aspect-square rounded-full bubblerGradient border border-blue-200"
        />
        <motion.div
          initial={initialBubblesState}
          animate={endBubbleState}
          transition={{
            duration: 9,
            repeat: Infinity,
            type: "tween",
            delay: 0.6,
          }}
          className="w-20 aspect-square rounded-full bubblerGradient border border-blue-200"
        />
      </div>
      <div className="h-auto w-full flex justify-between">
        <motion.div
          initial={initialBubblesState}
          animate={endBubbleState}
          transition={{ duration: 9, repeat: Infinity, type: "tween" }}
          className="w-20 aspect-square rounded-full bubblerGradient border border-blue-200"
        />
        <motion.div
          initial={initialBubblesState}
          animate={endBubbleState}
          transition={{
            duration: 9,
            repeat: Infinity,
            type: "tween",
            delay: 0.3,
          }}
          className="w-16 aspect-square rounded-full bubblerGradient border border-blue-200"
        />
        <motion.div
          initial={initialBubblesState}
          animate={endBubbleState}
          transition={{ duration: 9, repeat: Infinity, type: "tween" }}
          className="w-20 aspect-square rounded-full bubblerGradient border border-blue-200"
        />
        <motion.div
          initial={initialBubblesState}
          animate={endBubbleState}
          transition={{
            duration: 9,
            repeat: Infinity,
            type: "tween",
            delay: 0.6,
          }}
          className="w-20 aspect-square rounded-full bubblerGradient border border-blue-200"
        />
      </div>
      <div className="h-auto w-full flex justify-between">
        <motion.div
          initial={initialBubblesState}
          animate={endBubbleState}
          transition={{ duration: 9, repeat: Infinity, type: "tween" }}
          className="w-20 aspect-square rounded-full bubblerGradient border border-blue-200"
        />
        <motion.div
          initial={initialBubblesState}
          animate={endBubbleState}
          transition={{
            duration: 9,
            repeat: Infinity,
            type: "tween",
            delay: 0.3,
          }}
          className="w-16 aspect-square rounded-full bubblerGradient border border-blue-200"
        />
        <motion.div
          initial={initialBubblesState}
          animate={endBubbleState}
          transition={{ duration: 9, repeat: Infinity, type: "tween" }}
          className="w-20 aspect-square rounded-full bubblerGradient border border-blue-200"
        />
        <motion.div
          initial={initialBubblesState}
          animate={endBubbleState}
          transition={{
            duration: 9,
            repeat: Infinity,
            type: "tween",
            delay: 0.6,
          }}
          className="w-20 aspect-square rounded-full bubblerGradient border border-blue-200"
        />
      </div>
      <div className="h-auto w-full flex justify-between">
        <motion.div
          initial={initialBubblesState}
          animate={endBubbleState}
          transition={{ duration: 9, repeat: Infinity, type: "tween" }}
          className="w-20 aspect-square rounded-full bubblerGradient border border-blue-200"
        />
        <motion.div
          initial={initialBubblesState}
          animate={endBubbleState}
          transition={{
            duration: 9,
            repeat: Infinity,
            type: "tween",
            delay: 0.3,
          }}
          className="w-16 aspect-square rounded-full bubblerGradient border border-blue-200"
        />
        <motion.div
          initial={initialBubblesState}
          animate={endBubbleState}
          transition={{ duration: 9, repeat: Infinity, type: "tween" }}
          className="w-20 aspect-square rounded-full bubblerGradient border border-blue-200"
        />
        <motion.div
          initial={initialBubblesState}
          animate={endBubbleState}
          transition={{
            duration: 9,
            repeat: Infinity,
            type: "tween",
            delay: 0.6,
          }}
          className="w-20 aspect-square rounded-full bubblerGradient border border-blue-200"
        />
      </div>
      <div className="h-auto w-full flex justify-between">
        <motion.div
          initial={initialBubblesState}
          animate={endBubbleState}
          transition={{ duration: 9, repeat: Infinity, type: "tween" }}
          className="w-20 aspect-square rounded-full bubblerGradient border border-blue-200"
        />
        <motion.div
          initial={initialBubblesState}
          animate={endBubbleState}
          transition={{
            duration: 9,
            repeat: Infinity,
            type: "tween",
            delay: 0.3,
          }}
          className="w-16 aspect-square rounded-full bubblerGradient border border-blue-200"
        />
        <motion.div
          initial={initialBubblesState}
          animate={endBubbleState}
          transition={{ duration: 9, repeat: Infinity, type: "tween" }}
          className="w-20 aspect-square rounded-full bubblerGradient border border-blue-200"
        />
        <motion.div
          initial={initialBubblesState}
          animate={endBubbleState}
          transition={{
            duration: 9,
            repeat: Infinity,
            type: "tween",
            delay: 0.6,
          }}
          className="w-20 aspect-square rounded-full bubblerGradient border border-blue-200"
        />
      </div>
    </div>
  );
}

export default Hero;
