import { storage } from "../utils/firebase";
import { ref, uploadBytes, listAll, getDownloadURL } from "firebase/storage";
import { v4 } from "uuid";

const UploadImages = async (placeId, file) => {
  const uploadRef = ref(storage, `images/${placeId}/${file.name + v4()}`);
  const response = await uploadBytes(uploadRef, file);
};

const FetchImages = async (placeId) => {
  const placeImagesRef = ref(storage, `images/${placeId}/`);
  const ListOfUrls = [];

  const response = await listAll(placeImagesRef);
  response.items.forEach(async (item) => {
    const url = await getDownloadURL(item);
    ListOfUrls.push(url);
  });
  return ListOfUrls;
};

export { UploadImages, FetchImages };
