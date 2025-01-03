// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "real-estate-5fb60.firebaseapp.com",
  projectId: "real-estate-5fb60",
  storageBucket: "real-estate-5fb60.firebasestorage.app",
  messagingSenderId: "704008535785",
  appId: "1:704008535785:web:a2669a434307f24ebc7a78"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);