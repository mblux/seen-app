// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app"
import { getFirestore, collection } from "firebase/firestore"

// # Don't need analytics right now
//import { getAnalytics } from "firebase/analytics";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional

const firebaseConfig = {
  apiKey: "AIzaSyDTrW-aL0UnC1Vru2zfux9-RiOwdAYOG18",

  authDomain: "seenapp-8cd15.firebaseapp.com",

  databaseURL: "https://seenapp-8cd15-default-rtdb.firebaseio.com",

  projectId: "seenapp-8cd15",

  storageBucket: "seenapp-8cd15.appspot.com",

  messagingSenderId: "364925691012",

  appId: "1:364925691012:web:73f484d1f1cb6eb4154ed1",

  measurementId: "G-9NRP14WJX8",
}

// Initialize Firebase
// const analytics = getAnalytics(app);

const app = initializeApp(firebaseConfig)
export const db = getFirestore(app)
export const moviesCollection = collection(db, "movies")
