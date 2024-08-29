
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.13.0/firebase-app.js";
import { getStorage , ref , uploadBytes , uploadBytesResumable , getDownloadURL} from "https://www.gstatic.com/firebasejs/10.13.0/firebase-storage.js";
import { getFirestore, collection, addDoc , getDocs } from "https://www.gstatic.com/firebasejs/10.13.0/firebase-firestore.js";
import { getAuth, createUserWithEmailAndPassword , signInWithEmailAndPassword , sendPasswordResetEmail , onAuthStateChanged} from "https://www.gstatic.com/firebasejs/10.13.0/firebase-auth.js";
const firebaseConfig = {
  apiKey: "AIzaSyBUbZ88zgaNkJzoU9q-hyGMC-KZxWkj9hg",
  authDomain: "login-setup-01.firebaseapp.com",
  projectId: "login-setup-01",
  storageBucket: "login-setup-01.appspot.com",
  messagingSenderId: "28839056147",
  appId: "1:28839056147:web:a73f01fee56e63efd5c0e6",
  measurementId: "G-NJ2E1P27J6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const storage = getStorage(app);
const db = getFirestore(app);
const auth = getAuth(app);

export { storage , ref , uploadBytes , db , collection, addDoc , uploadBytesResumable ,
     getDownloadURL , getDocs , auth , createUserWithEmailAndPassword , 
     signInWithEmailAndPassword , sendPasswordResetEmail , onAuthStateChanged}