// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDxHAYYJfTNHyQsU7sdl6KGF53YilqqedI",
  authDomain: "todo-app-with-firebase-a8117.firebaseapp.com",
  projectId: "todo-app-with-firebase-a8117",
  storageBucket: "todo-app-with-firebase-a8117.appspot.com",
  messagingSenderId: "98122709193",
  appId: "1:98122709193:web:aecc38545d8ea30348f518",
  measurementId: "G-NWSHK688CT"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export default app