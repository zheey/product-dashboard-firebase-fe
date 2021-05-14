import firebase from "firebase/app";
import "firebase/auth";
import { firebaseConfig } from "./config/firebaseConfig";

const firebaseApp = firebase.initializeApp(
    {
        apiKey: "AIzaSyDf-i3-kecpDpJyG1uR-Jbf0fjXMPhO54U",
        authDomain: "construyo-coding-challenge.firebaseapp.com",
        databaseURL: "https://construyo-coding-challenge.firebaseio.com",
        projectId: "construyo-coding-challenge",
        storageBucket: "construyo-coding-challenge.appspot.com",
        messagingSenderId: 275103082078,
        appId: 275103082078
    }
);

export const firebaseAuth = firebaseApp.auth();
export default firebaseApp;