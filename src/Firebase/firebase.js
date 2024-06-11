// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyA8gEHJ17bpppTTMR3Mt6UfWxTe4TfOKkc",
    authDomain: "fashion-era-3219a.firebaseapp.com",
    projectId: "fashion-era-3219a",
    storageBucket: "fashion-era-3219a.appspot.com",
    messagingSenderId: "671431417806",
    appId: "1:671431417806:web:083c5b701416a35cced59f"
  };

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)


export {app, auth}

