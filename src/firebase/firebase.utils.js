import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';


const firebaseConfig = {
    apiKey: "AIzaSyCO6icJEze2e8mkbla4Y42Yr5l1i7JtBhg",
    authDomain: "hanger-db.firebaseapp.com",
    databaseURL: "https://hanger-db.firebaseio.com",
    projectId: "hanger-db",
    storageBucket: "hanger-db.appspot.com",
    messagingSenderId: "587500079355",
    appId: "1:587500079355:web:b658dee93f8aaacd41485e",
    measurementId: "G-EN284L8D4Y"
};

firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt: 'select_account'});
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;