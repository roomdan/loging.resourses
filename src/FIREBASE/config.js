// Import the functions you need from the SDKs you need
import   firebase  from "firebase/compat/app";
import "firebase/compat/firestore"
import "firebase/compat/auth"

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBiLY-J_Cjy_2I8tjvyZOVyU99KWNb3yVU",
  authDomain: "log-ec5f3.firebaseapp.com",
  projectId: "log-ec5f3",
  storageBucket: "log-ec5f3.appspot.com",
  messagingSenderId: "282746775366",
  appId: "1:282746775366:web:1df34a915bc9dd17bbe747"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();
const GoogleProvider = new firebase.auth.GoogleAuthProvider()

export { db, GoogleProvider, firebase };