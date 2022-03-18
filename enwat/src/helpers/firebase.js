import firebase from "firebase/app";
import "firebase/analytics";
import "firebase/storage";
import "firebase/auth";
import "firebase/firestore"

import { getMessaging } from "firebase/messaging";


import {
  REACT_APP_FIREBASE_API_KEY,
  REACT_APP_AUTH_DOMAIN,
  REACT_APP_DATABASE_URL,
  REACT_APP_PROJECT_ID,
  REACT_APP_FIREBASE_STORAGE_BUCKET,
  REACT_APP_FIREBASE_MESSAGING_ID,
  REACT_APP_FIREBASE_APP_ID,
  REACT_APP_MEASUREMENT_ID,
} from "../constants/firebase";

const firebaseConfig = {
  apiKey: REACT_APP_FIREBASE_API_KEY,
  authDomain: REACT_APP_AUTH_DOMAIN,
  databaseURL: REACT_APP_DATABASE_URL,
  projectId: REACT_APP_PROJECT_ID,
  storageBucket: REACT_APP_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: REACT_APP_FIREBASE_MESSAGING_ID,
  appId: REACT_APP_FIREBASE_APP_ID,
  measurementId: REACT_APP_MEASUREMENT_ID,
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
//const analytics = firebase.analytics(app)

const storage = firebase.storage();
const storageImageRef = storage.ref('images');
const storageMemeRef = storage.ref('memes');

const auth = firebase.auth();
auth.setPersistence(firebase.auth.Auth.Persistence.LOCAL);

const firestore = firebase.firestore();
const messaging = firebase.messaging();

export { auth, storage, firebase, storageImageRef, firestore, storageMemeRef, /*analytics,*/ messaging};
