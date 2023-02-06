import React, { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import { useSelector } from "react-redux";

import BookIcon from "../../client/assets/icons/BookIcon";
import HeartIcon from "../../client/assets/icons/HeartIcon";
import CirculeArrow from "../../client/assets/icons/CirculeArrow";

const SliderOverlay = ({ className, title }) => (
  <div
    style={{
      background:
        "linear-gradient(180deg, rgba(82, 136, 216, 0) 10%, #5288D8 100%)",
    }}
    className={className}
  >
    <div className="w-full flex justify-between">
      <CirculeArrow fill={"#fff"} className={`w-[12%] aspect-square`} />
      <CirculeArrow
        fill={"#fff"}
        className={`w-[12%] aspect-square rotate-180`}
      />
    </div>
    <BookIcon fill={"#94ebc0"} className={"w-1/5 aspect-square "} />
    <div className="flex justify-between items-end">
      <h2 className="text-3xl font-IBMPlexSans font-normal bg-gr text-white">
        Welcome To <br /> {`${title}`}
      </h2>
      <div>
        <HeartIcon fill={"#BF3115"} className={"w-8 aspect-square "} />
        <p className="text-white">235 people</p>
      </div>
    </div>
  </div>
);

function PlaceDetailImageSlider() {
  const PlacesStore = useSelector((state) => state.places);
  const { placeSelected, loading, err } = PlacesStore;

  const imagesList = placeSelected?.images || [];

  const SliderRef = useRef();
  const [sliderWidth, setsliderWidth] = useState(0);

  const sliderRefWidth = SliderRef.current?.clientWidth;
  useEffect(() => {
    if (sliderRefWidth) {
      setsliderWidth(sliderRefWidth * (imagesList.length - 1));
    }
  }, [sliderRefWidth]);

  return (
    <div className="w-screen overflow-hidden relative">
      <motion.div
        ref={SliderRef}
        transition={{
          x: {
            type: "spring",
            stiffness: 300,
            damping: 30,
          },
          opacity: { duration: 0.2 },
        }}
        drag="x"
        dragConstraints={{ left: -sliderWidth, right: 0 }}
        dragElastic={1}
        className="h-[63vh] w-auto bg-secondryDark   relative"
      >
        <div className={`absolute top-0  flex h-full`}>
          {imagesList.map((img, i) => (
            <div key={i} className="w-screen h-full relative">
              <motion.img
                initial="start"
                whileInView={"end"}
                variants={{
                  start: {
                    opacity: 0,
                    scale: 0.9,
                  },
                  end: {
                    opacity: 1,
                    scale: 1,
                  },
                }}
                className=" object-cover w-full h-full "
                src={img.img}
                alt={img.img}
              />
              <SliderOverlay
                title={placeSelected?.name}
                className={
                  "h-2/3 justify-start w-full p-9 flex flex-col gap-9 absolute bottom-0  z-10"
                }
              />
            </div>
          ))}
        </div>
      </motion.div>
    </div>
  );
}

export default PlaceDetailImageSlider;
