import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
import "firebase/storage";

const firebaseConfig = {
    apiKey: "AIzaSyCsUptAeoe47snGvGSlV2sF12IaE7VD5to",
    authDomain: "nextjs-blogging-app.firebaseapp.com",
    projectId: "nextjs-blogging-app",
    storageBucket: "nextjs-blogging-app.appspot.com",
    messagingSenderId: "202841761711",
    appId: "1:202841761711:web:daf555599b920d1d51315a",
    measurementId: "G-7KCED5MKHF",
};

if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
}

export const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

export const auth = firebase.auth();
export const firestore = firebase.firestore();
export const storage = firebase.storage();

export async function getUserWithUsername(username) {
    const usersRef = firestore.collection("users");
    const query = usersRef.where("username", "==", username).limit(1);
    const userDoc = (await query.get()).docs[0];
    return userDoc;
}

export function postToJSON(doc) {
    const data = doc.data();
    return {
        ...data,
        createdAt: data.createdAt.toMillis(),
        updatedAt: data.updatedAt.toMillis(),
    } 
} 

export const fromMillis = firebase.firestore.Timestamp.fromMillis;
