import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { createPlaces } from "../../storeSlices/placesSlice";
import { UploadImages, FetchImages } from "../../client/helpers/imagesHelper";

export default function createPlace() {
  //to do 1- seprate the form to create a new place from the uploading images to different places

  //accesing the store
  const PlacesStore = useSelector((state) => state.places);
  const { idToEdit, loading, err } = PlacesStore;
  const dispatch = useDispatch();
  //upload images states
  const [files, setfiles] = useState(null);
  const [imgList, setimgList] = useState(null);

  //create a place form data
  const [formData, setformData] = useState({});

  //creating a place function
  const handleSubmit = async (e) => {
    e.preventDefault();

    dispatch(createPlaces(formData));
    console.log(idToEdit);
  };

  //uploading images to firebase function
  const imagesHandler = async (e) => {
    e.preventDefault();
    if (imgList || !files) return;

    for (const index in files) {
      if (files[index]?.size) {
        await UploadImages(idToEdit, files[index]);
      }
    }
    const data = await FetchImages(idToEdit);
    setimgList(data);
  };

  //fetch images from firebase
  const getAllImages = async () => {
    const data = await FetchImages(idToEdit);
    setimgList(data);
    console.log("imgList", imgList);
  };

  //styles for the form data
  const inputStyle = "p-5 rounded";
  return (
    <div>
      {idToEdit ? (
        <div className="flex flex-col justify-center items-center">
          <h1>Header</h1>
          <form
            onSubmit={imagesHandler}
            className="bg-slate-600 h-auto p-6 flex flex-col gap-6 "
          >
            <input
              type="file"
              className="bg-white"
              multiple
              onChange={(e) => {
                setfiles(e.target.files);
              }}
            ></input>
            <button className=" bg-white rounded-md py-3" type="submit">
              SAVE
            </button>
            <button
              onClick={getAllImages}
              className=" bg-white rounded-md py-3"
            >
              getImages
            </button>
          </form>
          {/* <img src={file}></img> */}
        </div>
      ) : (
        <form
          onSubmit={handleSubmit}
          className="flex flex-col gap-5 p-8 bg-primary h-screen"
        >
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
      )}
    </div>
  );
}
