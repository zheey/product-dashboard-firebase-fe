import firebase from "firebase/app";
import "firebase/auth";
import { firebaseConfig } from "./config/firebaseConfig";
import "firebase/firestore";

const firebaseApp = firebase.initializeApp(firebaseConfig);

export const firebasedb = firebase.firestore();
export const firebaseAuth = firebaseApp.auth();
export default firebaseApp;