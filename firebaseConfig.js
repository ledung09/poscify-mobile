// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBuWMxr0Lvf_uQxQJRwWYZV8lxI-fQKQIE",
  authDomain: "poscify.firebaseapp.com",
  projectId: "poscify",
  storageBucket: "poscify.appspot.com",
  messagingSenderId: "927597251581",
  appId: "1:927597251581:web:b4918e80ab76654174e794",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app)
