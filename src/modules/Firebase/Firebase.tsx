import React, { useEffect } from 'react';
import { initializeApp } from 'firebase/app';

const firebaseConfig = Object.freeze({
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: process.env.FIREBASE_AUTH_DOMAIN,
  projectId: process.env.FIREBASE_PROJECT_ID,
  storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.FIREBASE_APP_ID,
  measurementId: process.env.FIREBASE_MEASUREMENT_ID
});


// initialize Firebase after first paint
const Firebase = () => {

  useEffect(() => {
    initializeApp(firebaseConfig);
  }, []);

  return (<></>);
}

export default Firebase
