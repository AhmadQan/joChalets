import React, { useState } from "react";
import { motion } from "framer-motion";

export default function ImageSlider({ imagesList }) {
  const [imgList, setimgList] = useState([...imagesList]);

  const swipeConfidenceThreshold = 10000;
  const swipePower = (offset, velocity) => {
    return Math.abs(offset) * velocity;
  };

  const paginate = (newDirection) => {
    if (newDirection > 0) {
      const lsitDummy = imgList;

      const element = lsitDummy.splice(0, 1)[0];
      lsitDummy.push(element);

      setimgList([...lsitDummy]);
    } else if (newDirection < 0) {
      const lsitDummy = imgList;

      const element = lsitDummy.splice(imgList?.length - 1, 1)[0];
      lsitDummy.unshift(element);

      setimgList([...lsitDummy]);
    }
  };

  return (
    <motion.div className="self-baseline  w-max  h-auto ">
      <motion.div
        transition={{
          x: { type: "spring", stiffness: 300, damping: 30 },
          opacity: { duration: 0.2 },
        }}
        drag="x"
        dragConstraints={{ left: 0, right: 0 }}
        dragElastic={1}
        onDragEnd={(e, { offset, velocity }) => {
          const swipe = swipePower(offset.x, velocity.x);

          if (swipe < -swipeConfidenceThreshold) {
            paginate(1);
          } else if (swipe > swipeConfidenceThreshold) {
            paginate(-1);
          }
        }}
        className="w-full relative  flex  "
      >
        {imgList.map((img, i) => (
          <img
            key={img._id}
            className=" object-cover w-card aspect-square"
            src={img.img}
            alt={img.img}
          />
        ))}
      </motion.div>
    </motion.div>
  );
}
