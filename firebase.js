
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyD-xdaDwO11LwSoTxOZ6WGkWpgp2TpPm-4",
  authDomain: "booking-app-12cb6.firebaseapp.com",
  projectId: "booking-app-12cb6",
  storageBucket: "booking-app-12cb6.appspot.com",
  messagingSenderId: "835679717854",
  appId: "1:835679717854:web:b40fcaa825fb189cf5b54f",
  measurementId: "G-C99XE61V79"
};

const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

const db = getFirestore();

export {auth,db};
