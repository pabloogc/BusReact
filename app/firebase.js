import * as firebase from 'firebase';
import { NativeModules } from 'react-native';

var firebaseAndroid = NativeModules.FirebaseAndroid;
firebaseAndroid.init();
firebaseAndroid.login((success) => {
});

const config = {
  apiKey: "AIzaSyDKdenPMsFoCyGd99gwVYQcX9Avz8cyKQM",
  authDomain: "madridbus-5a827.firebaseapp.com",
  databaseURL: "https://madridbus-5a827.firebaseio.com",
  storageBucket: "madridbus-5a827.appspot.com",
  messagingSenderId: "154184717414"
};

var app = firebase.initializeApp(config);

app.database().ref().on('value', (snap) => {
  console.log(snap.val())
});

export const firebaseApp = app;
