import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useRouter } from "next/router";
import { useForm, Controller } from "react-hook-form";

import { createPlaces, toggleAddModel } from "../../storeSlices/placesSlice";
// import { UploadImages, FetchImages } from "../../client/helpers/imagesHelper";

export default function AddPlaceForm() {
  const {
    handleSubmit,
    register,
    control,
    formState: { errors },
  } = useForm();
  const PlacesStore = useSelector((state) => state.places);
  const { idToEdit, loading, err } = PlacesStore;
  const router = useRouter();

  const dispatch = useDispatch();

  //creating a place function
  const submitHandler = async (data) => {
    console.log(data);
    dispatch(createPlaces(data));
  };

  useEffect(() => {
    if (idToEdit) {
      router.push(`/places/${idToEdit}/createProcess`);
    }
  }, [idToEdit]);

  const inputStyle = " rounded w-full aspect-textField text-black";

  return (
    <React.Fragment>
      <form
        onSubmit={handleSubmit(submitHandler)}
        className="flex flex-col gap-5 p-8 w-full h-auto"
      >
        <h3 className="font-Koulen text-accent text-2xl">Add New Place</h3>

        <input
          {...register("name", {
            required: "Please enter a name",
          })}
          className={" rounded w-full aspect-textField text-black"}
          placeholder="name"
          type={"text"}
        ></input>
        <input
          {...register("descrption", {
            required: "Please enter a descrption",
          })}
          className={inputStyle}
          placeholder="descrption"
          type={"text"}
        ></input>
        <input
          {...register("city", {
            required: "Please enter a address",
          })}
          className={inputStyle}
          placeholder="address"
          type={"text"}
        ></input>
        <button
          className=" border-accent border-2 font-IBMPlexSans bg-primary80 text-accent p-4 rounded-md"
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
