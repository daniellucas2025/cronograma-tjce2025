import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyBwyJHD-aVPFWPFjQtSjLgBJi8LJj4Zzcc",
  authDomain: "planner-tjce.firebaseapp.com",
  projectId: "planner-tjce",
  storageBucket: "planner-tjce.firebasestorage.app",
  messagingSenderId: "981567853028",
  appId: "1:981567853028:web:d9bfd3b6d384917d9537f1"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);
