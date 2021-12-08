// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getDatabase } from "@firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyBi0b122s3IsB9p4ffBXlDMYsy8vqu4AGg",
  authDomain: "construction-jobs-3c10c.firebaseapp.com",
  databaseURL: "https://construction-jobs-3c10c-default-rtdb.firebaseio.com",
  projectId: "construction-jobs-3c10c",
  storageBucket: "construction-jobs-3c10c.appspot.com",
  messagingSenderId: "727624315160",
  appId: "1:727624315160:web:4b17aabd45ac428d566e6d",
  measurementId: "G-KVZ223MCBE"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const firedb = getDatabase(app);

export default firedb;