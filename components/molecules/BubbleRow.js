import React from "react";
import { motion } from "framer-motion";

function BubbleRow() {
  const initialBubblesState = (isIncrese = true) => {
    return { y: 0, scale: isIncrese ? 0.5 : 1, opacity: 1 };
  };
  const endBubbleState = (isIncrese = true) => {
    return { y: -800, scale: isIncrese ? 1 : 0.5, opacity: 0.8 };
  };

  const bubbleTransition = (delay = 0) => {
    return {
      duration: 16,
      repeat: Infinity,
      type: "tween",
      delay: delay,
    };
  };
  return (
    <div className="h-auto w-full flex justify-btween bg-transparent pt-[10vh]">
      <motion.div
        initial={initialBubblesState(false)}
        animate={endBubbleState(false)}
        transition={bubbleTransition(3)}
        className="w-20 aspect-square rounded-full bubblerGradient border border-blue-200"
      />
      <motion.div
        initial={initialBubblesState(true)}
        animate={endBubbleState(true)}
        transition={bubbleTransition(0)}
        className="w-20 aspect-square rounded-full bubblerGradient border border-blue-200"
      />
      <motion.div
        initial={initialBubblesState(true)}
        animate={endBubbleState(true)}
        transition={bubbleTransition(6)}
        className="w-20 aspect-square rounded-full bubblerGradient border border-blue-200"
      />
      <motion.div
        initial={initialBubblesState(false)}
        animate={endBubbleState(false)}
        transition={bubbleTransition(0)}
        className="w-20 aspect-square rounded-full bubblerGradient border border-blue-200"
      />
      <motion.div
        initial={initialBubblesState(false)}
        animate={endBubbleState(false)}
        transition={bubbleTransition(9)}
        className="w-20 aspect-square rounded-full bubblerGradient border border-blue-200"
      />
    </div>
  );
}

export default BubbleRow;
