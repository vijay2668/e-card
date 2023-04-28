// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, GoogleAuthProvider } from "firebase/auth" ;
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const newFirebaseConfig = {
  apiKey: "AIzaSyDGnIh3ZtePgWb26_JquqKF0-_TwuXjncI",
  authDomain: "d-card-ede3b.firebaseapp.com",
  projectId: "d-card-ede3b",
  storageBucket: "d-card-ede3b.appspot.com",
  messagingSenderId: "1017055171303",
  appId: "1:1017055171303:web:a8749f60fc88c39476c842",
  measurementId: "G-GW4W6Z10BP"
}

// Initialize Firebase
const newApp = initializeApp(newFirebaseConfig); // initialize the app with the correct configuration
// const analytics = getAnalytics(app);
const auth = getAuth(newApp);
const provider = new GoogleAuthProvider();
const db = getFirestore(newApp);
const storage = getStorage();
export {auth, provider, db, storage};