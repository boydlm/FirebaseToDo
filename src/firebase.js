import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';
import { FIREBASE_CONFIG } from "./config";
const firebaseConfig = FIREBASE_CONFIG
const firebaseApp = initializeApp(firebaseConfig);
const db = getFirestore(firebaseApp);
export { db }
