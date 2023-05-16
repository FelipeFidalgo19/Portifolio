import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAAh_qKp5qqs1FmNuBncn8TuJqXa0hVpIs",
  authDomain: "first-smithy-327012.firebaseapp.com",
  projectId: "first-smithy-327012",
  storageBucket: "first-smithy-327012.appspot.com",
  messagingSenderId: "44685376180",
  appId: "1:44685376180:web:62576e68482c5b1b6e75e1",
  measurementId: "G-VKMKBB9GYN",
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);