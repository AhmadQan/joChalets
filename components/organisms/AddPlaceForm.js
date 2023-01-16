import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useRouter } from "next/router";

import { createPlaces, toggleAddModel } from "../../storeSlices/placesSlice";
// import { UploadImages, FetchImages } from "../../client/helpers/imagesHelper";

export default function AddPlaceForm() {
  const PlacesStore = useSelector((state) => state.places);
  const { idToEdit, loading, err } = PlacesStore;
  const router = useRouter();

  const [formData, setformData] = useState({});

  const dispatch = useDispatch();

  //creating a place function
  const handleSubmit = async (e) => {
    e.preventDefault();
    dispatch(createPlaces(formData));
  };

  useEffect(() => {
    if (idToEdit) {
      router.push(`/places/${idToEdit}/createProcess`);
    }
  }, [idToEdit]);

  const inputStyle = "p-5 rounded";

  return (
    <React.Fragment>
      <form onSubmit={handleSubmit} className="flex flex-col gap-5 p-8  h-auto">
        <h3 className="font-Koulen text-accent text-2xl">Add New Place</h3>

        <input
          required
          onChange={(e) =>
            setformData({
              ...formData,
              ...{ name: e.target.value },
            })
          }
          className={inputStyle}
          placeholder="name"
          type={"text"}
        ></input>
        <input
          required
          onChange={(e) =>
            setformData({
              ...formData,
              ...{ description: e.target.value },
            })
          }
          className={inputStyle}
          placeholder="descrption"
          type={"text"}
        ></input>
        <input
          required
          onChange={(e) =>
            setformData({
              ...formData,
              ...{ address: e.target.value },
            })
          }
          className={inputStyle}
          placeholder="address"
          type={"text"}
        ></input>
        <button
          className=" border-accent border-2 font-IBMPlexSans text-accent p-4 rounded-md"
          type="submit"
        >
          Contine
        </button>
      </form>
      <button
        onClick={() => {
          dispatch(toggleAddModel());
        }}
        className=" h-auto w-full bg-accent border-2 font-IBMPlexSans text-grayDark p-4 rounded-md"
      >
        Cancel
      </button>
    </React.Fragment>
  );
}
