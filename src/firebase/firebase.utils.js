import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';


const config = {
    apiKey: "AIzaSyBUkV3_h9vBN2uCuGMSEyPZpEoFFQF3u3g",
    authDomain: "crwn-db-eba0e.firebaseapp.com",
    databaseURL: "https://crwn-db-eba0e.firebaseio.com",
    projectId: "crwn-db-eba0e",
    storageBucket: "crwn-db-eba0e.appspot.com",
    messagingSenderId: "432574816081",
    appId: "1:432574816081:web:20934f07019720a511bd70",
    measurementId: "G-QXJK76S3RG"
  };

  firebase.initializeApp(config);

  export const auth = firebase.auth();
  export const firestore = firebase.firestore();

  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({ prompt: 'select_account' });

  export const signInWithGoogle = () => auth.signInWithPopup(provider);

  export default firebase;
