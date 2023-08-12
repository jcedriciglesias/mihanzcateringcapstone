// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "@firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBm-Y0b0vqkNXgU2n9dgCK5jquXVFL0OyM",
  authDomain: "mihanz-catering-database.firebaseapp.com",
  projectId: "mihanz-catering-database",
  storageBucket: "mihanz-catering-database.appspot.com",
  messagingSenderId: "802146515070",
  appId: "1:802146515070:web:1773b5895baa87ddca402f",
  measurementId: "G-Q3ZNV9G7EF"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const db = getFirestore(app);

  


