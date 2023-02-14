import { getApp, getApps, initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';

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
//initialze app only if there is no app else app will be initialized everytime there is a refresh to avoid that 
// get the app length, if app length is greater zero then app information else initialize the new app
const app = getApps.length > 0 ? getApp() : initializeApp(firebaseConfig);

const firestore = getFirestore(app);

const storage = getStorage(app);

export { app, firestore, storage}