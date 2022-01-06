import firebase from 'firebase/compat'
import 'firebase/firestore'

var firebaseApp  = firebase.initializeApp ({
    apiKey: "AIzaSyCwzLpBlgu6cFG9L9gj8aX3guwhPHSoSf8",
    authDomain: "education-a266a.firebaseapp.com",
    projectId: "education-a266a",
    storageBucket: "education-a266a.appspot.com",
    messagingSenderId: "680463336855",
    appId: "1:680463336855:web:fb2d31cf658b8edb7cf0d2"
  });
  
  // Initialize Firebase
var db = firebaseApp.firestore();
export {db} ;