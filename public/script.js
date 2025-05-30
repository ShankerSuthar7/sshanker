// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDNpvdmmJGzcUV7u5Uqp5tOn9fltO9ACK4",
  authDomain: "sshanker3117.firebaseapp.com",
  projectId: "sshanker3117",
  storageBucket: "sshanker3117.firebasestorage.app",
  messagingSenderId: "130602838177",
  appId: "1:130602838177:web:dd442e6634ed294bf7a8e0",
  measurementId: "G-J3YZJ1ZYQM"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);