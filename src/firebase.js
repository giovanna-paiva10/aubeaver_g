import { getAuth } from "firebase/auth";
import { initializeApp } from "firebase/app";
import { getFirestore } from "@firebase/firestore";

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
const auth = getAuth(app);
export const firestore = getFirestore(app)

export {auth};