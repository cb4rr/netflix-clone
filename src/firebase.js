import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyBdF3kP_U64aq22d5477ECbY3KVzMJ8A9M",
    authDomain: "netflix-clone-d7a87.firebaseapp.com",
    projectId: "netflix-clone-d7a87",
    storageBucket: "netflix-clone-d7a87.appspot.com",
    messagingSenderId: "648210351105",
    appId: "1:648210351105:web:306d35c3b5660a0fff6c00"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { auth };
export default db;