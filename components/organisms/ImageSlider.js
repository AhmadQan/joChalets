import React, { useRef, useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function ImageSlider({ imgList }) {
  const [width, setWidth] = useState(0);
  const caroselref = useRef();

  useEffect(() => {
    console.log(imgList?.length);
    setWidth(caroselref.current?.clientWidth / imgList?.length);
  }, [imgList]);
  return (
    <motion.div ref={caroselref} className="  w-max  h-auto ">
      <motion.div
        drag={"x"}
        dragConstraints={{ right: 0, left: -width }}
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
