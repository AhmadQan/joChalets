import React from "react";
import { useRouter } from "next/router";
import { useDispatch, useSelector } from "react-redux";

import ImageSlider from "./ImageSlider";
import { fetchSelectedPlace } from "../../storeSlices/placeDetailSlice";
import AddNoteIcon from "../../client/assets/icons/AddNoteIcon";
import StarOutlineIcon from "../../client/assets/icons/StarOutlineIcon";
import EyeSlashIcon from "../../client/assets/icons/EyeSlashIcon";
import ExportOutlineIcon from "../../client/assets/icons/ExportOutlineIcon";

export default function PlacesGridItem({ data }) {
  const dispatch = useDispatch();

  const router = useRouter();
  return (
    <div className="w-full shadow-elvatedCard aspect-placeCard overflow-hidden rounded-3xl flex flex-col relative bg-white border border-primary40">
      <div className="h-[79.58%] relative">
        <ImageSlider
          onClick={() => {
            router.push(`/places/${data._id}`);
            dispatch(fetchSelectedPlace(data._id));
          }}
          imagesList={data.images}
        />
        <div className="flex w-card justify-end px-5 py-5">
          <ExportOutlineIcon
            fill={"#fff"}
            className={"w-8 aspect-square absolute top-[4%] right-[4%]"}
          />
          <div className="w-full px-5 h-1/3 items-start absolute bottom-0 left-0 flex flex-col ">
            <p className="text-xl font-bold text-primary20">{data?.name}</p>
            <p className="text-base font-normal text-primary100">
              {data?.city}
            </p>
          </div>
        </div>
      </div>

      <div className="w-full flex-1 flex justify-center items-center">
        <div className="w-[88.46%] h-[66.7%] flex justify-center gap-[3.2%] ">
          <div
            onClick={() => {
              alert("close me");
            }}
            className="h-full aspect-square rounded-full flex justify-center items-center shadow-flat"
          >
            <AddNoteIcon fill={"#034D77"} className={"h-1/2 aspect-square "} />
          </div>
          <div className="h-full aspect-square rounded-full shadow-flat flex justify-center items-center">
            <StarOutlineIcon
              fill={"#034D77"}
              className={"h-1/2 aspect-square "}
            />
          </div>
          <div className="h-full aspect-square rounded-full shadow-flat flex justify-center items-center">
            <EyeSlashIcon fill={"#034D77"} className={"h-1/2 aspect-square "} />
          </div>
        </div>
      </div>
    </div>
  );
}
