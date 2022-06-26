import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyCWi3LAa-4hN41aJSFX1KVpEd0fJ3TAbEY",
  authDomain: "fir-sample-3ef9c.firebaseapp.com",
  projectId: "fir-sample-3ef9c",
  storageBucket: "fir-sample-3ef9c.appspot.com",
  messagingSenderId: "591588817925",
  appId: "1:591588817925:web:35cfb417c96134cec1306c"
};

firebase.initializeApp(firebaseConfig);
