// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAikrvr_lfs5q6JHtKKblarH8_nr9ZPyuo",
  authDomain: "simple-firebase-5dc99.firebaseapp.com",
  projectId: "simple-firebase-5dc99",
  storageBucket: "simple-firebase-5dc99.firebasestorage.app",
  messagingSenderId: "1072828854195",
  appId: "1:1072828854195:web:3037c2504840a35e5125c6",
  measurementId: "G-FFB0YRRQVL"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);
export default auth;