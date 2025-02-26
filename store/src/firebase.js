// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import{ getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCGDhaGC259yyT2lY2w4f_ePfLuXpjFUZM",
  authDomain: "transport-app-6c689.firebaseapp.com",
  projectId: "transport-app-6c689",
  storageBucket: "transport-app-6c689.appspot.com",
  messagingSenderId: "1016500893492",
  appId: "1:1016500893492:web:139308ff10577b498d9761",
  measurementId: "G-GLB63WWE1J"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth =getAuth(app);
export { app, auth }

