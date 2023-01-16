import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { fetchPlaces } from "../../storeSlices/placesSlice";
import PlacesGridItem from "../organisms/PlacesGridItem";

function PlacesGrid() {
  const PlacesStore = useSelector((state) => state.places);
  const { allPlaces, loading, err, totalCount } = PlacesStore;

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchPlaces(5, 0));
  }, []);
  return (
    <div className="flex flex-col gap-7 px-5 items-center">
      <div className="bg-secondry w-full rounded-full flex  overflow-hidden ">
        <input className="p-5" placeholder="Where" />
        <input className="" placeholder="From" />
        <input className="" placeholder="To" />
      </div>
      {allPlaces.map((place) => (
        <PlacesGridItem key={place._id} data={place} />
      ))}
    </div>
  );
}

export default PlacesGrid;
