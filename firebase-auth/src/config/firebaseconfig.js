import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

var firebaseConfig = {
    apiKey: "AIzaSyBZyIGs9lHa3Y_gRyV7vzRImJRR0db5-BQ",
    authDomain: "netninjafirebase-40fc6.firebaseapp.com",
    databaseURL: "https://netninjafirebase-40fc6.firebaseio.com",
    projectId: "netninjafirebase-40fc6",
    storageBucket: "netninjafirebase-40fc6.appspot.com",
    messagingSenderId: "408550232698",
    appId: "1:408550232698:web:4922dcc1bdc050070e21c3",
    measurementId: "G-FMERPQPVJ8"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();
  firebase.firestore.settings({timestampsInSnapshots: true})

  export default firebase