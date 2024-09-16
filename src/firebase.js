// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getfirestore } from "@firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDI2Ra6xg7pbvt2RLmHZt0AgWQoXmygfxo",
  authDomain: "aubeaver-8aa8a.firebaseapp.com",
  projectId: "aubeaver-8aa8a",
  storageBucket: "aubeaver-8aa8a.appspot.com",
  messagingSenderId: "229985108021",
  appId: "1:229985108021:web:ae7f78866760da7a72b17c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const firestore = getfirestore(app)