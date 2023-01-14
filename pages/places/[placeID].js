import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { ref, uploadBytes, listAll, getDownloadURL } from "firebase/storage";
import { v4 } from "uuid";

import { storage } from "../../client/utils/firebase";

export default function PlaceDetailPage() {
  const router = useRouter();
  const { placeID } = router.query;

  const [file, setfile] = useState(null);
  const ListOfUrls = [];

  const placeImagesRef = ref(storage, `images/${placeID}/`);

  const fetchImages = async () => {
    const response = await listAll(placeImagesRef);
    response.items.forEach(async (item) => {
      const url = await getDownloadURL(item);
      ListOfUrls.push(url);
    });
  };
  const handleSubmit = async (e) => {
    // modify this so that it bulk upload all the files
    e.preventDefault();

    if (!file) {
      return;
    }
    const uploadRef = ref(storage, `images/${placeID}/${file[0].name + v4()}`);
    const response = await uploadBytes(uploadRef, file[0]);
    console.log(response);
  };

  useEffect(() => {
    fetchImages();
  }, [placeImagesRef]);

  return (
    <section className="flex flex-col justify-center items-center">
      <h1>Header</h1>
      <form
        onSubmit={(e) => {
          handleSubmit(e);
        }}
        className="bg-slate-600 h-auto p-6 flex flex-col gap-6 "
      >
        <input
          type="file"
          className="bg-white"
          multiple
          onChange={(e) => {
            setfile(e.target.files);
          }}
        ></input>
        <button className=" bg-white rounded-md py-3" type="submit">
          SAVE
        </button>
      </form>
      <img src={file}></img>
    </section>
  );
}
