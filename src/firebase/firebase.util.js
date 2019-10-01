import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';


const config = {
    apiKey: "AIzaSyAuxhm76V-tmom4W-oX0qI5OGeDEdxB78A",
    authDomain: "crwn-db-317e3.firebaseapp.com",
    databaseURL: "https://crwn-db-317e3.firebaseio.com",
    projectId: "crwn-db-317e3",
    storageBucket: "",
    messagingSenderId: "1031883191435",
    appId: "1:1031883191435:web:de522ccf30f90e7cf4d08e"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt : 'select_account'});
export const signWithGoogle = () => auth.signInWithPopup(provider); 

export default firebase;
