// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-blog-693f1.firebaseapp.com",
  projectId: "mern-blog-693f1",
  storageBucket: "mern-blog-693f1.appspot.com",
  messagingSenderId: "849069337706",
  appId: "1:849069337706:web:f0d7ef9db6e8ed48d06e13"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);

