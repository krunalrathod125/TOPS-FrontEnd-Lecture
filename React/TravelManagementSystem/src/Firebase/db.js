// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAIFI6Aa_crJb4e4jdc_-MQLmAOGMuK1Ew",
  authDomain: "travel-managment-system-15b80.firebaseapp.com",
  projectId: "travel-managment-system-15b80",
  storageBucket: "travel-managment-system-15b80.firebasestorage.app",
  messagingSenderId: "1022101391389",
  appId: "1:1022101391389:web:9049bfb999cb1590179ef4",
  measurementId: "G-81TMCYS1FS"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default db = getFirestore(app);