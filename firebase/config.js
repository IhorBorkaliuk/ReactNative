import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA5qRdzCSE_tEzT7kAkQ-eHH42tXXCn1oo",
  authDomain: "sorc-7ad5f.firebaseapp.com",
  projectId: "sorc-7ad5f",
  storageBucket: "sorc-7ad5f.appspot.com",
  messagingSenderId: "806266748115",
  appId: "1:806266748115:web:6e45c97f850ad98bb56826",
  measurementId: "G-1L9GEY5YXN",
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export { auth };
  
export const db = getFirestore(app);
