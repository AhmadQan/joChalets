import { storage } from "../utils/firebase";
import { ref, uploadBytes, listAll, getDownloadURL } from "firebase/storage";
import { v4 } from "uuid";

const UploadImages = async (placeId, file) => {
  const uploadRef = ref(storage, `images/${placeId}/${file.name + v4()}`);
  const response = await uploadBytes(uploadRef, file);
  console.log(response);
};

export const getImages = async (placeId) => {
  let data = [];
  // const storage = getStorage();
  const listRef = ref(storage, `images/${placeId}/`);
  const res = await listAll(listRef);

  const promises = res.items.map((itemRef) => getDownloadURL(itemRef));
  data = await Promise.all(promises);

  return data;
};

export { UploadImages };
