import React,{useEffect,useState} from "react";
import { db } from "../firebase/config";
import { collection, orderBy, query, onSnapshot } from "firebase/firestore";
import {motion} from 'framer-motion'


const ImagesGrid = () => {

    const [images, setImages] = useState([])

    useEffect(() =>{
        const collectionRef = collection(db, "images")
        const q = query(collectionRef,orderBy("createdAt", "desc"))
        const unsub =  onSnapshot(q, (querySnapshot) => {
          const docs = [];
          querySnapshot.forEach((doc) => {
            docs.push({ ...doc.data(), id: doc.id });
          });
          setImages(docs);
        });
        return unsub;
    }, [])



  return (
    <div className="img-grid">
      {images &&
        images.map((img) => (
          <motion.div
            className="img-wrap"
            key={img.id}
            layout
            whileHover={{ opacity: 1 }}
          >
            <motion.img
              src={img.url}
              alt="uploaded pic"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1 }}
            />
          </motion.div>
        ))}
    </div>
  );
};

export default ImagesGrid;
