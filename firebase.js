// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyATJVHzIcvRkKnT5Qtgykp-6YnZidYIK0c",
  authDomain: "tetris-nextjs.firebaseapp.com",
  projectId: "tetris-nextjs",
  storageBucket: "tetris-nextjs.appspot.com",
  messagingSenderId: "99343768599",
  appId: "1:99343768599:web:cd1a2fcb0119adcd2dd052",
  measurementId: "G-M8L731FCFW"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
