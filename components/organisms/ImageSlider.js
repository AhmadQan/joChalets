import React, { useState } from "react";
import { motion } from "framer-motion";
import ExportOutlineIcon from "../../client/assets/icons/ExportOutlineIcon";

export default function ImageSlider({ imagesList, onClick }) {
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
    <motion.div
      onClick={onClick}
      className="self-baseline shadow-imagesSlider  w-max  h-full overflow-hidden border border-primary40 rounded-20 "
    >
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
        className="w-full relative h-full flex"
      >
        {imgList.map((img, i) => (
          <div className="w-card lg:w-[25vw] ">
            <div className="absolute top-0 w-full h-full bluegradientoverlay flex flex-col">
              <div className="flex w-card justify-end px-5 py-5">
                <ExportOutlineIcon
                  fill={"#fff"}
                  className={"w-8 aspect-square justify-self-end"}
                />
              </div>
            </div>
            <img
              key={img._id}
              className=" object-cover h-full w-card lg:w-[25vw] aspect-square"
              src={img.img}
              alt={img.img}
            />
          </div>
        ))}
      </motion.div>
    </motion.div>
  );
}
