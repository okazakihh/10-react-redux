import firebase from "firebase/compat/app";
import "firebase/compat/firestore"
import "firebase/compat/auth"

const firebaseConfig = {
    apiKey: "AIzaSyBDkEAKZVhKovrYOwPGOhKd2gTQxZ7qKyk",
    authDomain: "react-app-91a28.firebaseapp.com",
    projectId: "react-app-91a28",
    storageBucket: "react-app-91a28.appspot.com",
    messagingSenderId: "1063088702344",
    appId: "1:1063088702344:web:5390a2d1285435d43a303d"
  };
  
  // Initialize Firebase
 firebase.initializeApp(firebaseConfig);

 const db = firebase.firestore();
 const GoogleAuthProvider = new firebase.auth.GoogleAuthProvider();

 export {firebase, db, GoogleAuthProvider}
