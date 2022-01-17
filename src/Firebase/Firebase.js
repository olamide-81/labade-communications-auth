import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: "AIzaSyC2qFu3u4A2KZEDZiS0Vc_kbLm9LKoTFJk",
  authDomain: "labade-communications.firebaseapp.com",
  projectId: "labade-communications",
  storageBucket: "labade-communications.appspot.com",
  messagingSenderId: "392080101349",
  appId: "1:392080101349:web:1821fcca6af089a6c5e90c",
  measurementId: "G-V5DQKNVVNE"

};

firebase.initializeApp(config);
firebase.firestore();

export default firebase;
