import * as firebase from 'firebase/app'
import 'firebase/storage';
import 'firebase/firestore'; 

  // Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyB1ju4WKSXru_UVbFb6rg2QMH460UzU12o",
    authDomain: "socialmedia-b402f.firebaseapp.com",
    databaseURL: "https://socialmedia-b402f.firebaseio.com",
    projectId: "socialmedia-b402f",
    storageBucket: "socialmedia-b402f.appspot.com",
    messagingSenderId: "1086672424316",
    appId: "1:1086672424316:web:16242b7e9bc97c5eca68f9"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);


  const projectStorage = firebase.storage();
  const projectFirestore = firebase.firestore();
  const timestamp = firebase.firestore.FieldValue.serverTimestamp

  export {projectStorage , projectFirestore, timestamp };
