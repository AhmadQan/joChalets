import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { fetchPlaces } from "../../storeSlices/placesSlice";
import PlacesGridItem from "../organisms/PlacesGridItem";

function PlacesGrid() {
  const PlacesStore = useSelector((state) => state.places);
  const { allPlaces, loading, err, totalCount } = PlacesStore;

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchPlaces(0));
  }, []);
  return (
    <div className="w-full flex py-8 lg:py-[8vh] justify-center bg-primary20">
      <div className="w-[92%]  grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-y-11 gap-x-8  items-center">
        {allPlaces.map((place) => (
          <PlacesGridItem key={place._id} data={place} />
        ))}
      </div>
    </div>
  );
}

export default PlacesGrid;
