import React, { useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";

import { FilterfetchPlaces, fetchPlaces } from "../../storeSlices/placesSlice";
import PlacesGridItem from "../organisms/PlacesGridItem";

import FilterRemoveIcon from "../../client/assets/icons/FilterRemoveIcon";
import LoaderDrops from "../molecules/LoaderDrops";

function PlacesGrid() {
  const PlacesStore = useSelector((state) => state.places);
  const { allPlaces, filterData, loading, err, totalCount, pageNumber } =
    PlacesStore;
  const viewMoreButtonRef = useRef(null);

  const dispatch = useDispatch();

  useEffect(() => {
    if (allPlaces) return;
    dispatch(fetchPlaces(pageNumber));
  });

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          dispatch(fetchPlaces(pageNumber + 1, filterData));
        }
      },
      { threshold: 1 }
    );

    if (viewMoreButtonRef.current) {
      observer.observe(viewMoreButtonRef.current);
    }

    return () => {
      if (viewMoreButtonRef.current) {
        observer.unobserve(viewMoreButtonRef.current);
      }
    };
  }, [viewMoreButtonRef.current]);

  return (
    <div className="relative w-full flex flex-col gap-4 pb-8 bg-gray-100 lg:py-[8vh] justify-center  ">
      <div className=" z-20 w-full sticky justify-between h-[8vh] bg-gray-100 flex  items-center text-primary90 px-3 border-y shadow-flat border-gray-500">
        {totalCount && (
          <p className="text-lg font-semibold">{totalCount} places</p>
        )}
        {filterData && (
          <button
            onClick={(e) => {
              e.preventDefault();
              dispatch(FilterfetchPlaces(0, null));
            }}
            className="text-lg text-red-400 font-semibold flex gap-1"
          >
            Reset search{" "}
            <FilterRemoveIcon
              fill={"#EA5B3F"}
              className={"w-6 aspect-square"}
            />
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
      {loading ? (
        <LoaderDrops />
      ) : (
        <button
          ref={viewMoreButtonRef}
          className={`${
            allPlaces?.length === totalCount ? "hidden" : ""
          } text-xl font-Koulen font-bold`}
        >
          View More
        </button>
      )}
    </div>
  );
}

export default PlacesGrid;
