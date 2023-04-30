import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { fetchPlaces } from "../../storeSlices/placesSlice";
import PlacesGridItem from "../organisms/PlacesGridItem";

function PlacesGrid() {
  const PlacesStore = useSelector((state) => state.places);
  const { allPlaces, filterData, loading, err, totalCount } = PlacesStore;

  const dispatch = useDispatch();

  useEffect(() => {
    if (allPlaces) return;
    dispatch(fetchPlaces(0));
  });
  return (
    <div className="relative w-full flex flex-col gap-4  lg:py-[8vh] justify-center  ">
      <div className=" z-20 w-full sticky justify-between h-[8vh] bg-gray-100 flex  items-center text-primary90 px-3 border-y shadow-flat border-gray-500">
        {totalCount && (
          <p className="text-lg font-semibold">{totalCount} places</p>
        )}
        {filterData && (
          <button
            onClick={(e) => {
              e.preventDefault();
              dispatch(fetchPlaces(0, null));
            }}
            className="text-lg text-red-400 font-semibold"
          >
            clear search
          </button>
        )}
      </div>
      <div className="w-[92%] relative self-center grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-y-11 gap-x-8  items-center">
        {allPlaces?.map((place, idx) => {
          return (
            <div className="w-card lg:w-full" key={place._id}>
              <PlacesGridItem key={place._id} data={place} />
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default PlacesGrid;
