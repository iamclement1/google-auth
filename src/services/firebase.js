import * as firebase from "firebase/app";
import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics'

//here is the firebase configuration 
const firebaseConfig = {
    apiKey: "AIzaSyDUferQlPPQtZLptKjDY2hZsk7OjATB1WY",
    authDomain: "auth-8510d.firebaseapp.com",
    projectId: "auth-8510d",
    storageBucket: "auth-8510d.appspot.com",
    messagingSenderId: "1064587148700",
    appId: "1:1064587148700:web:f87ba59afdc612b48a1c59",
    measurementId: "G-407YLQ28TS"
};

//initialize firebase;

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export { app, analytics };
export default firebase;