import { message } from "antd";
import { FirebaseError } from "firebase/app";
import { getDownloadURL, getStorage, ref, uploadBytes } from "firebase/storage";
const storage = getStorage();
export const uploadFileToStorage = async (bytes: ArrayBuffer, path: string) => {
  const storageRef = ref(
    storage,
    path,
  );
  try {
    await uploadBytes(storageRef, bytes);
    const url = await getDownloadURL(storageRef);
    return url;
  } catch (error) {
    const err = error as FirebaseError;
    message.error(err.message);
    switch (err.code) {
      case "storage/unauthorized":
        // User doesn't have permission to access the object
        break;
      case "storage/canceled":
        // User canceled the upload
        break;

      // ...

      case "storage/unknown":
        // Unknown error occurred, inspect error.serverResponse
        break;
    }
  }
};
