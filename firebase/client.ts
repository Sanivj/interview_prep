import { initializeApp, getApp, getApps } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyC_Pi65pMghc4nWLiAtKp1Ej33IPA9KHCM",
  authDomain: "prepwise-f74ba.firebaseapp.com",
  projectId: "prepwise-f74ba",
  storageBucket: "prepwise-f74ba.appspot.com", // fixed typo: should be .appspot.com
  messagingSenderId: "204033341703",
  appId: "1:204033341703:web:442ccd3f515a62fee56da2",
  measurementId: "G-4ZVNNLDNEX"
};

const app = getApps().length ? getApp() : initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);
