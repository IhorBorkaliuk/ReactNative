import firebase from "firebase";
import "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyATv-0EsPsxgggJl4gD4wbliAGyiY5OtNg",
  authDomain: "newproject-3d003.firebaseapp.com",
  projectId: "newproject-3d003",
  storageBucket: "newproject-3d003.appspot.com",
  messagingSenderId: "503877156620",
  appId: "1:503877156620:web:9d795aa9bbc519dc63d329",
};

firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();

export { auth };
