// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth';
import {getFirestore} from 'firebase/firestore/lite'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC7-iEhasCco_wfl9q-c75sfgwU9NbVHms",
  authDomain: "react-cursos-e74cd.firebaseapp.com",
  projectId: "react-cursos-e74cd",
  storageBucket: "react-cursos-e74cd.appspot.com",
  messagingSenderId: "276784795355",
  appId: "1:276784795355:web:36623a6e1c6a7a799606fe"
};

// Initialize Firebase
export const FirebaseApp = initializeApp(firebaseConfig);

export const FirebaseAuth=getAuth(FirebaseApp)

export const FirebaseDB= getFirestore (FirebaseApp)
