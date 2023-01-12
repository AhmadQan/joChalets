import React, { useEffect } from "react";
import { fetchPlaces } from "../../storeSlices/placesSlice";
import { useDispatch, useSelector } from "react-redux";

export default function PlacesGrid() {
  const PlacesStore = useSelector((state) => state.places);
  const { allPlaces, loading, err, totalCount } = PlacesStore;

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchPlaces(5, 1));
  }, []);

  return <div>PlacesGrid</div>;
}
