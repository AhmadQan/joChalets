import { motion } from "framer-motion";
import React from "react";

function LoaderDrops() {
  return (
    <div className="flex justify-center items-center h-full">
      <div className="flex justify-between w-20 h-10">
        {[...Array(5)].map((_, index) => (
          <motion.div
            key={index}
            className="w-2 h-2 rounded-full bg-primary50 "
            animate={{
              y: [-30, 0, -30],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              delay: index / 5,
            }}
          />
        ))}
      </div>
    </div>
  );
}

export default LoaderDrops;
