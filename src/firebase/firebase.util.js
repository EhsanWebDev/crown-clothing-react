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
export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;
  const userRef = firestore.doc(`/users/${userAuth.uid}`);

  const snapshot = await userRef.get();

  if (!snapshot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    console.log(displayName, email, createdAt);
    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData,
      });
    } catch (error) {
      console.log(error.message);
    }
  }
  // console.log(snapshot);
  return userRef;
};

firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const singInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
