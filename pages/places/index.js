import React, { useEffect } from "react";
import axios from "axios";
import { fetchPlaces } from "../../storeSlices/placesSlice";
import { useDispatch, useSelector } from "react-redux";

export default function PlacesGrid() {
  const dispatch = useDispatch();
  const PlacesStore = useSelector((state) => state.places);
  const { allPlaces, loading, err, totalCount } = PlacesStore;

  console.log(totalCount);

  useEffect(() => {
    dispatch(fetchPlaces(5, 1));
  }, []);

  return <div>PlacesGrid</div>;
}
