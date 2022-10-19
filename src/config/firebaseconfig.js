// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBkVO3o4DYB-l01wYde9r-4vgMal9ebuf0",
  authDomain: "practisework01.firebaseapp.com",
  projectId: "practisework01",
  storageBucket: "practisework01.appspot.com",
  messagingSenderId: "802444201735",
  appId: "1:802444201735:web:af8e263543f509110cbfa2",
  measurementId: "G-3RL2NWRYJ4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export default app