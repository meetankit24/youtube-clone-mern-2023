// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

import { getAuth, GoogleAuthProvider } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyD47i2wSPq9UJDhjGsMxvzFO9RjZbqcTYQ",
    authDomain: "fir-6da95.firebaseapp.com",
    projectId: "fir-6da95",
    storageBucket: "fir-6da95.appspot.com",
    messagingSenderId: "802664997832",
    appId: "1:802664997832:web:ba3b09e70d911be1c7d6fd"
};

// Initialize Firebase

const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const provider = new GoogleAuthProvider();

export default app;