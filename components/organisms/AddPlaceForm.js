import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useRouter } from "next/router";
import { useForm, Controller } from "react-hook-form";

import { createPlaces, toggleAddModel } from "../../storeSlices/placesSlice";
import LoaderDrops from "../molecules/LoaderDrops";
// import { UploadImages, FetchImages } from "../../client/helpers/imagesHelper";

export default function AddPlaceForm() {
  const {
    handleSubmit,
    register,
    control,
    formState: { errors },
  } = useForm();
  const PlacesStore = useSelector((state) => state.places);
  const { newPlace, loading, err } = PlacesStore;
  const router = useRouter();

  const dispatch = useDispatch();

  //creating a place function
  const submitHandler = async (data) => {
    dispatch(createPlaces(data));
  };

  useEffect(() => {
    if (newPlace?._id) {
      router.push(`/places/${newPlace?._id}/createProcess`);
    }
  }, [newPlace]);

  const inputStyle = " rounded w-full aspect-textField text-black";

  return (
    <React.Fragment>
      {loading ? (
        <LoaderDrops />
      ) : (
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
          <select
            defaultValue={""}
            className="w-[46%] aspect-btn pl-[8%] bg-white text-black rounded-lg border border-primary50 shadow-flat"
            {...register("city", {})}
          >
            <option value={""}>All Places</option>
            <option value={"DeadSea"}>Dead Sea</option>
            <option value={"Amman"}>Amman</option>
            <option value={"Alaghwar"}>Alaghwar</option>
            <option value={"Madaba"}>Madaba</option>
            <option value={"Jerash"}>Jerash</option>
            <option value={"Ajloun"}>Ajloun</option>
            <option value={"Zarqa"}>Zarqa</option>
            <option value={"Irbid"}>Irbid</option>
            <option value={"Alkarak"}>Alkarak</option>
            <option value={"Almafraq"}>Almafraq</option>
            <option value={"Ma'an"}>Ma'an</option>
            <option value={"Aqaba"}>Aqaba</option>
            <option value={"Balqa"}>Balqa</option>
            <option value={"Tafilah"}>Tafilah</option>
          </select>

          <button
            className=" border-accent border-2 font-IBMPlexSans bg-primary80 text-accent p-4 rounded-md"
            type="submit"
          >
            Contine
          </button>
        </form>
      )}

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
