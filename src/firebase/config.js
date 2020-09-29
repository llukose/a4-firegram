
import * as firebase from 'firebase/app';
import 'firebase/storage';
import 'firebase/firestore';
// Your web app's Firebase configuration

var firebaseConfig = {
    apiKey: "AIzaSyB3lNfQrdPoii4rv7dAyBChc0nIRjVdDWw",
    authDomain: "luke-firegram.firebaseapp.com",
    databaseURL: "https://luke-firegram.firebaseio.com",
    projectId: "luke-firegram",
    storageBucket: "luke-firegram.appspot.com",
    messagingSenderId: "521914994291",
    appId: "1:521914994291:web:637fb5ece16193fe342406"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  const projectStorage = firebase.storage();
  const projectFirestore = firebase.firestore();
  const timestamp = firebase.firestore.FieldValue.serverTimestamp;

  export { projectStorage, projectFirestore, timestamp };
