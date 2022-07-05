import { initializeApp } from "firebase/app";
import firebase from 'firebase/compat/app'

const firebaseConfig = {

    apiKey: "AIzaSyBkeuLgb6-Wff_H_0HdsZJc3MjDDpnSDl4",
    authDomain: "bebra-bank.firebaseapp.com",
    projectId: "bebra-bank",
    storageBucket: "bebra-bank.appspot.com",
    messagingSenderId: "419122339142",
    appId: "1:419122339142:web:a7cd6e3828c6f4005ed947",
    measurementId: "G-LQML430ZLX"

};


const firebaseApp = firebase.initializeApp(firebaseConfig);

export default firebaseApp;