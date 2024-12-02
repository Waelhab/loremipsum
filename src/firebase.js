// Import the Firebase modules
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";

// Firebase configuration from Firebase Console
const firebaseConfig = {
    apiKey: "AIzaSyCMHnewfgwDPTyZ_jc_RabXIniqZMIxGI8",
    authDomain: "finalproject405-cc0ad.firebaseapp.com",
    projectId: "finalproject405-cc0ad",
    storageBucket: "finalproject405-cc0ad.firebasestorage.app",
    messagingSenderId: "567871812835",
    appId: "1:567871812835:web:d70f28e6621be478c101d6",
    measurementId: "G-MN0HV5LYF6"
  };

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication
const auth = getAuth(app);

// Google Auth Provider
const googleProvider = new GoogleAuthProvider();

export { auth, googleProvider, signInWithPopup };
