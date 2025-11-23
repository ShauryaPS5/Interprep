// Import the functions you need from the SDKs you need
import { initializeApp, getApp, getApps } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCE91Q_8Q17F_TBwTFdoIcVcRXLIunh4I8",
  authDomain: "interprep-4232f.firebaseapp.com",
  projectId: "interprep-4232f",
  storageBucket: "interprep-4232f.firebasestorage.app",
  messagingSenderId: "771355844584",
  appId: "1:771355844584:web:284ae7b2ab40fcaf630e5d",
  measurementId: "G-NVLKT759GF",
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
export const auth = getAuth(app);
export const db = getFirestore(app);
