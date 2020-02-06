import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyBOXnX4LPnRm5hT7TrsF3YgpozPLRf0vWE",
    authDomain: "crawn-db-4156d.firebaseapp.com",
    databaseURL: "https://crawn-db-4156d.firebaseio.com",
    projectId: "crawn-db-4156d",
    storageBucket: "crawn-db-4156d.appspot.com",
    messagingSenderId: "587634765054",
    appId: "1:587634765054:web:e9a83399c18764cd9409af",
    measurementId: "G-HQ0WCWHMXL"
};

export const createUserProfileDocument = async (userAuth, additionalData) => {
    if (!userAuth) return;
    const firestore = firebase.firestore();
    const userRef = firestore.doc(`users/${userAuth.uid}`);
    const snapShot = await userRef.get();
    if (!snapShot.exists) {
        const { displayName, email, photoURL } = userAuth;
        const createdAt = new Date();
        try {
            await userRef.set({
                displayName,
                email,
                photoURL,
                createdAt,
                ...additionalData
            })
        } catch (error) {
            console.log("error creating user", error.message);
        }
    }
    return userRef;
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const varFirestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });

export const signInWithGoogle = () => {

    auth.signInWithPopup(provider)
};

export default firebase;