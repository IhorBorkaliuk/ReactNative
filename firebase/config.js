import { initializeApp } from "firebase/app";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyATv-0EsPsxgggJl4gD4wbliAGyiY5OtNg",
  authDomain: "newproject-3d003.firebaseapp.com",
  projectId: "newproject-3d003",
  storageBucket: "newproject-3d003.appspot.com",
  messagingSenderId: "503877156620",
  appId: "1:503877156620:web:9d795aa9bbc519dc63d329",
  measurementId: "G-LGGS7Z05T8",
};
// Initialize Firebase
export const app = initializeApp(firebaseConfig);
console.log(app)
