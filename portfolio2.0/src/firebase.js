// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getFirestore} from "@firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAFYcRborMPMNe5_0rBpoGcrdbk-rv7xX0",
  authDomain: "portfolio-18d41.firebaseapp.com",
  projectId: "portfolio-18d41",
  storageBucket: "portfolio-18d41.appspot.com",
  messagingSenderId: "256972741826",
  appId: "1:256972741826:web:45d91188bb658fafa12f5b",
  measurementId: "G-SH1Y5TF605"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const firestore = getFirestore(app);