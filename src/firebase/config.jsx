import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import {getStorage} from  'firebase/storage';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD573-JcWdfYHKRAHTRDBwW13As9Q8qzOI",
  authDomain: "firegallery-71993.firebaseapp.com",
  projectId: "firegallery-71993",
  storageBucket: "firegallery-71993.appspot.com",
  messagingSenderId: "34179663313",
  appId: "1:34179663313:web:0081113ec28865a17e0cf0",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const storage = getStorage(app); 
