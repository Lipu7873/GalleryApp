import React,{useState} from "react";
import {ref, uploadBytes, getDownloadURL} from 'firebase/storage'
import { storage, db } from "../firebase/config";
import { collection, addDoc, Timestamp } from "firebase/firestore";



const UploadImage = () => {

    const [image, setImage] = useState(null);
    const [errorMsg, setErrorMsg] = useState("");
    const [isLoading, setIsLoading] = useState(false)



    // Image uploading
    const types = ["image/png", "image/jpeg", "image/jpg"];

    const handleImage = (e) => {
        let selected = e.target.files[0];

        if (selected && types.includes(selected.type)) {
          setImage(selected);
          setErrorMsg("");
        } else {
          setImage(null);
          setErrorMsg("Please select an image file (png, jpeg, jpg)");
        }
    }

    // Image submiting
    const handleSubmit = (e) =>{
        e.preventDefault();
        setIsLoading(true);
        const storageRef = ref(storage, `images/${image.name + Date.now()}`);
        uploadBytes(storageRef, image).then((snapshot) => {
            getDownloadURL(snapshot.ref)
            .then((url) => {
                addDoc(collection(db, "images"),{
                    url,
                    createdAt : Timestamp.fromDate(new Date()),
                });
            })
            .then(() => {
                setIsLoading(false)
            })
            .catch((error) => {
                setErrorMsg(error.message);
                setIsLoading(false)
            });
        });
        setImage(null)
    };


  return (
  <form action="" onSubmit={handleSubmit}>
    <label>
    <input type="file" onChange={handleImage} accept="image/*"/>
    <span>+</span>
    </label>
    <button type="submit">{isLoading ? "uploading..." : "upload"}</button>
    {errorMsg && <p>{errorMsg}</p>}
  </form>
  );
};

export default UploadImage;
