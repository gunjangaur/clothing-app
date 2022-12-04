import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';

const config = {
    apiKey: "AIzaSyCnorARCi4P_q2wg3qyTFGT2S_OmlWPdi8",
    authDomain: "crwn-db-addf0.firebaseapp.com",
    projectId: "crwn-db-addf0",
    storageBucket: "crwn-db-addf0.appspot.com",
    messagingSenderId: "644222951409",
    appId: "1:644222951409:web:5c718a5e66595188f2ee50",
    measurementId: "G-2J33NLY7L8"
  };

firebase.initializeApp(config);


export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
