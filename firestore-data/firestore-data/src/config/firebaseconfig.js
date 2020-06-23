import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';


const firebaseConfig = {
    apiKey: "AIzaSyBHAPh8uAS_KTADjk4TptQBLxbHqFWaf-w",
    authDomain: "firestore-data-5f3dd.firebaseapp.com",
    databaseURL: "https://firestore-data-5f3dd.firebaseio.com",
    projectId: "firestore-data-5f3dd",
    storageBucket: "firestore-data-5f3dd.appspot.com",
    messagingSenderId: "786139482301",
    appId: "1:786139482301:web:0ebb51cf14f71a80810fd4",
    measurementId: "G-WMD406C57Y"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  export const db = firebase.firestore()
  
  
  export default firebase