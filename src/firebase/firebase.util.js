import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

var firebaseConfig = {
  apiKey: "AIzaSyAFS6tk9xZe0USGD4-a8gA8go761oYRieg",
  authDomain: "crown-db-3bbea.firebaseapp.com",
  databaseURL: "https://crown-db-3bbea.firebaseio.com",
  projectId: "crown-db-3bbea",
  storageBucket: "crown-db-3bbea.appspot.com",
  messagingSenderId: "194104157103",
  appId: "1:194104157103:web:14e8b9fc350e04e1cf055a",
};

firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const singInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
