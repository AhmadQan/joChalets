import React from "react";

export default function PlacesGridItem({ data }) {
  return (
    <div className="w-3/4  border-secondry border-2 font-IBMPlexSans text-grayDark p-6 my-3 rounded-3xl">
      <div className="aspect-square   "></div>
      <div className="flex flex-col">
        <div className="flex flex-row justify-between">
          <h4>{data.name}</h4>
          <p>{data.name}</p>
        </div>
      </div>
    </div>
  );
}
