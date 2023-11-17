import { FirebaseApp, initializeApp } from "firebase/app";
import {
  getAuth,
  connectAuthEmulator,
  signInWithEmailAndPassword,
  Auth,
  createUserWithEmailAndPassword,
  signOut,
} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDmVAswaRA1wzuDjGTDXcAyTk1WPSLaCtM",
  authDomain: "disney-plus-clone-202d6.firebaseapp.com",
  projectId: "disney-plus-clone-202d6",
  storageBucket: "disney-plus-clone-202d6.appspot.com",
  messagingSenderId: "1087004907139",
  appId: "1:1087004907139:web:1253dca12ad93be704adb6",
  measurementId: "G-KQG8RJ79X3",
};

let myApp: FirebaseApp;
let auth: Auth;

export function initializeFirebase() {
  myApp = initializeApp(firebaseConfig);
  auth = getAuth(myApp);
  connectAuthEmulator(auth, "http://localhost:9099");
}

export async function createNewUser(email: string, pass: string) {
  await createUserWithEmailAndPassword(auth, email, pass);
}

export async function loginUser(email: string, pass: string) {
  await signInWithEmailAndPassword(auth, email, pass);
}

export async function signOutUser() {
  await signOut(auth);
}

export { myApp, auth };
