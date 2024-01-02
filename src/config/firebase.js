// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDELZAbSVyNo2Xq5toGmLS3Wpi7v4nhoi8",
  authDomain: "apod-akshat.firebaseapp.com",
  projectId: "apod-akshat",
  storageBucket: "apod-akshat.appspot.com",
  messagingSenderId: "273199781326",
  appId: "1:273199781326:web:aaeeb93fea6a5170fe479f",
  measurementId: "G-0RL5E4GSLN"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);