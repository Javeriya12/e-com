
import { initializeApp } from "firebase/app";
import {getStorage} from "firebase/storage";
import {getDatabase} from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyD1nk8OnzfQVOnS8odpbLPWksqWjxV6pVM",
  authDomain: "full-stack-example-22405.firebaseapp.com",
  databaseURL: "https://full-stack-example-22405-default-rtdb.firebaseio.com",
  projectId: "full-stack-example-22405",
  storageBucket: "full-stack-example-22405.appspot.com",
  messagingSenderId: "66340861554",
  appId: "1:66340861554:web:ba5284182738c2872874eb",
  measurementId: "G-FDF43X2N3L"
};


const app = initializeApp(firebaseConfig);
export const firebaseStorage=getStorage(app);
export const firebaseDatabase=getDatabase(app);