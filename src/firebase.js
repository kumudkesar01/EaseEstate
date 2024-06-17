// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-estate-e7e5b.firebaseapp.com",
  projectId: "mern-estate-e7e5b",
  storageBucket: "mern-estate-e7e5b.appspot.com",
  messagingSenderId: "961022863301",
  appId: "1:961022863301:web:d2977827576bbca2e40dac"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
