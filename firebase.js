import firebase from 'firebase/app'
import "firebase/firestore";
import "firebase/auth";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyAsXrb3bLhTJgxgwD76fdYDb-7bExcQc10",
    authDomain: "chat-app-5bfa5.firebaseapp.com",
    projectId: "chat-app-5bfa5",
    storageBucket: "chat-app-5bfa5.appspot.com",
    messagingSenderId: "761077059554",
    appId: "1:761077059554:web:96767261cb4092811e33bb",
    measurementId: "G-LHKKPVQC8H"
};

let app;
// check if the app is already initialized
// if the app is not initialized already
if (firebase.apps.length === 0) {
    app = firebase.initializeApp(firebaseConfig)
} else {
    // if it is already initialized, do not initialize again
    app = firebase.app();
}

const db = app.firestore();
const auth = firebase.auth();

export { auth }
export default db;





