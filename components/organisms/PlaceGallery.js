import React, { useState } from "react";
import { useSelector } from "react-redux";
import CloseCirculeIcon from "../../client/assets/icons/CloseCirculeIcon";

function PlaceGallery({ closeHandler }) {
  const PlacesStore = useSelector((state) => state.placeDetail);
  const { placeSelected, loading, err } = PlacesStore;

  const [currentIdx, setCurrentIdx] = useState(null);

  const imagesList = placeSelected?.images || [];

  return (
    <div className="fixed w-full h-full flex flex-col bg-black z-30 bg-opacity-70 gap-7 pt-4 ">
      <CloseCirculeIcon
        onClick={() => {
          if (currentIdx !== null) {
            setCurrentIdx(null);
          } else {
            closeHandler();
          }
        }}
        fill={"#fff"}
        className={"w-11 aspect-square ml-4"}
      />
      <div className=" w-full h-[90%] pb-6 overflow-scroll grid grid-cols-2 gap-3">
        {imagesList?.map((image, idx) => {
          return (
            <img
              onClick={() => {
                setCurrentIdx(idx);
              }}
              className="border border-primary10 "
              src={`${image?.img}`}
              alt=""
            />
          );
        })}

        {currentIdx !== null && (
          <div className="absolute w-full h-full flex flex-col bg-black z-30 bg-opacity-60 gap-7">
            <div className="w-full h-full ">
              <img
                className="w-full  object-cover border border-primary10 shadow-flat shadow-primary20"
                alt=""
                src={imagesList[currentIdx]?.img}
              />
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default PlaceGallery;
