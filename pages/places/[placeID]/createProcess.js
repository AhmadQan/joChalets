//to do creat a canceltion function
//that deletes the place from the database
//and delete the images from the firebase

import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { useDispatch, useSelector } from "react-redux";

import { UploadImages, getImages } from "../../../client/helpers/imagesHelper";
import ImageGrid from "../../../components/organisms/ImageGrid";
import { updatePlaces } from "../../../storeSlices/placesSlice";

export default function CreateProcess() {
  const router = useRouter();
  const dispatch = useDispatch();
  const { placeID } = router.query;

  //this state is used for saving the list coming from firebase
  const [imgList, setimgList] = useState(null);

  const identifier = placeID;

  //upload images states
  const [files, setfiles] = useState(null);

  //fetch images from firebase
  const getAllImages = async (id) => {
    if (!id) return;
    const imagesData = await getImages(id);
    setimgList(imagesData);
  };

  //uploading images to firebase function
  const imagesHandler = async (e) => {
    e.preventDefault();
    if (!files || !identifier) return;
    for (const index in files) {
      if (files[index]?.size) {
        await UploadImages(identifier, files[index]);
      }
    }
    setfiles(null);
    getAllImages(identifier);
  };

  useEffect(() => {
    if (identifier && !imgList) {
      getAllImages(identifier);
    }
  }, [identifier]);

  //this function to pass for the image grid so we cann access the imagesList and change the state here
  const sortImagesHandler = (list) => {
    setimgList(list);
  };

  const attachImagesToDBHandler = () => {
    if (imgList.length === 0) return;
    const toBeUploadedList = [];
    imgList.map((image, index) => {
      toBeUploadedList.push({ imgIndex: index, img: image });
    });
    dispatch(updatePlaces(identifier, { images: toBeUploadedList }));

    router.push(`/places/${identifier}`);
  };

  return (
    <section className="bg-primary  flex flex-col justify-center items-center p-5 gap-4">
      <h1 className="text-3xl text-grayLight font-Koulen">
        Add Images to your place and Sort it
      </h1>
      <div className="flex flex-col justify-center items-center">
        {imgList && <ImageGrid list={imgList} handler={sortImagesHandler} />}
        <form
          onSubmit={imagesHandler}
          className="h-auto p-6 flex flex-col gap-6 bg-gray rounded-md"
        >
          <input
            type="file"
            className="bg-white"
            multiple
            onChange={(e) => {
              setfiles(e.target.files);
            }}
          ></input>
          <button
            className=" bg-primary70 text-grayLight rounded-md py-3"
            type="submit"
          >
            Upload
          </button>
        </form>
      </div>
      <button
        className=" bg-secondry70 w-full text-grayDark rounded-md py-3"
        onClick={(e) => {
          e.preventDefault();
          attachImagesToDBHandler();
        }}
      >
        Next
      </button>
      <button
        className=" border border-primary70 text-grayDark w-full rounded-md py-3"
        type="submit"
      >
        Cancel
      </button>
    </section>
  );
}
