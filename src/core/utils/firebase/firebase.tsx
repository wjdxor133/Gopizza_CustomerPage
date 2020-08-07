import firebase from "firebase/app";
// import { firebaseConfig } from "../../config/config";
import { firebaseApiKey } from "../../api/api";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: `${firebaseApiKey}`,
  authDomain: "gopizzadb.firebaseapp.com",
  databaseURL: "https://gopizzadb.firebaseio.com",
  projectId: "gopizzadb",
  storageBucket: "gopizzadb.appspot.com",
  messagingSenderId: "884674764535",
  appId: "1:884674764535:web:b767e64c33542b292e3df2",
  measurementId: "G-3SWBX5K25V",
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
