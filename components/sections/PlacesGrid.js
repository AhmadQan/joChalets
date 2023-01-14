import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { fetchPlaces } from "../../storeSlices/placesSlice";
import PlacesGridItem from "../organisms/PlacesGridItem";

function PlacesGrid() {
  const PlacesStore = useSelector((state) => state.places);
  const { allPlaces, loading, err, totalCount } = PlacesStore;

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchPlaces(5, 1));
  }, []);
  return (
    <div className="flex flex-col px-5 items-center">
      {allPlaces.map((place) => (
        <PlacesGridItem data={place} />
      ))}
    </div>
  );
}

export default PlacesGrid;
