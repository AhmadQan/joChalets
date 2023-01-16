import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";

import { UploadImages, getImages } from "../../../client/helpers/imagesHelper";
import ImageGrid from "../../../components/organisms/ImageGrid";

export default function createProcess() {
  const router = useRouter();
  const { placeID } = router.query;

  const [imgList, setimgList] = useState(null);
  const identifier = placeID;

  //upload images states
  const [files, setfiles] = useState(null);

  //fetch images from firebase
  const getAllImages = async (id) => {
    const imagesData = await getImages(id);
    setimgList(imagesData);
  };

  //uploading images to firebase function
  const imagesHandler = async (e) => {
    console.log(imgList, files);
    e.preventDefault();
    if (!files) return;

    for (const index in files) {
      console.log("uploading", files[index]);
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
    console.log(imgList);
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
            className=" bg-primary text-grayLight rounded-md py-3"
            type="submit"
          >
            Upload
          </button>
        </form>
      </div>
      <button
        className=" bg-accent w-full text-grayDark rounded-md py-3"
        onClick={(e) => {
          e.preventDefault();
          attachImagesToDBHandler();
        }}
      >
        Next
      </button>
      <button
        className=" bg-accent text-grayDark w-full rounded-md py-3"
        type="submit"
      >
        Cancel
      </button>
    </section>
  );
}
