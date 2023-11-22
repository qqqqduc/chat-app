import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
import { GoogleAuthProvider, getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAaM6383E3q8N2OEWmpztESkI3mB70lgk0",
  authDomain: "manage-users-515d5.firebaseapp.com",
  databaseURL: "https://manage-users-515d5-default-rtdb.firebaseio.com",
  projectId: "manage-users-515d5",
  storageBucket: "manage-users-515d5.appspot.com",
  messagingSenderId: "526850426411",
  appId: "1:526850426411:web:31d539bf2f6e2d82e48c6e",
  measurementId: "G-N6RKNYTTZP",
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth();
const db = getFirestore(app);

export { auth, db };
export const provider = new GoogleAuthProvider();