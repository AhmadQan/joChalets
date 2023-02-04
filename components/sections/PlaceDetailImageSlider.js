import React, { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import BookIcon from "../../client/assets/icons/BookIcon";
import HeartIcon from "../../client/assets/icons/HeartIcon";

function PlaceDetailImageSlider() {
  const imagesList = [
    "https://firebasestorage.googleapis.com/v0/b/qanadilodesign.appspot.com/o/images%2F63cc28528963c01baf7c3dbf%2FIMG-20220808-WA0129.jpg578f2a83-9476-4872-9277-56a977566eb5?alt=media&token=8ce6503b-6c10-467c-9b4c-12e2bdc1510a",
    "https://firebasestorage.googleapis.com/v0/b/qanadilodesign.appspot.com/o/images%2F63cc28528963c01baf7c3dbf%2FIMG-20220808-WA0130.jpg0aac435a-6c26-4c10-8513-7772234a27e7?alt=media&token=d7f1d830-9550-40d7-a7e0-83db593a0c0f",
    "https://firebasestorage.googleapis.com/v0/b/qanadilodesign.appspot.com/o/images%2F63cc28528963c01baf7c3dbf%2FIMG-20220808-WA0131.jpg476e1138-63af-476b-bfce-b203d221f410?alt=media&token=673ad6f2-3491-45de-9504-9733bf0cfba1",
    "https://firebasestorage.googleapis.com/v0/b/qanadilodesign.appspot.com/o/images%2F63cc28528963c01baf7c3dbf%2FIMG-20220808-WA0132.jpg6624171c-11bd-454d-8521-34b87f33c45d?alt=media&token=adea94bd-6303-4b37-9a2d-a4821b65e7f6",
  ];

  const SliderRef = useRef();
  const [sliderWidth, setsliderWidth] = useState(0);

  const [currentIdx, setCurrentIdx] = useState(0);

  const sliderRefWidth = SliderRef.current?.clientWidth;
  useEffect(() => {
    if (sliderRefWidth) {
      setsliderWidth(sliderRefWidth * (imagesList.length - 1));
    }
  }, [sliderRefWidth]);

  const SliderOverlay = ({ className }) => (
    <div
      style={{
        background:
          "linear-gradient(180deg, rgba(82, 136, 216, 0) 10%, #5288D8 100%)",
      }}
      className={className}
    >
      <BookIcon fill={"#94ebc0"} className={"w-1/5 aspect-square "} />
      <div className="flex justify-between items-end">
        <h2 className="text-3xl font-IBMPlexSans font-normal text-white">
          Welcome To <br /> {`  Place name`}
        </h2>
        <div>
          <HeartIcon fill={"#BF3115"} className={"w-8 aspect-square "} />
          <p className="text-white">235 people</p>
        </div>
      </div>
    </div>
  );

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
                    scale: 0.5,
                  },
                  end: {
                    opacity: 1,
                    scale: 1,
                  },
                }}
                className=" object-cover w-full h-full "
                src={img}
                alt={img.img}
              />
              <SliderOverlay
                className={
                  "h-2/3 justify-end w-full p-9 flex flex-col gap-9 absolute bottom-0  z-10"
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
