// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore} from "@firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCdKOpogIrZ_pxizJS4DPRpISp3U63qZzc",
  authDomain: "mihanz-catering-db.firebaseapp.com",
  projectId: "mihanz-catering-db",
  storageBucket: "mihanz-catering-db.appspot.com",
  messagingSenderId: "24963125573",
  appId: "1:24963125573:web:471b3eb1ebfc040bfe2e2c",
  measurementId: "G-HRKDT7PP8B"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const db = getFirestore(app);