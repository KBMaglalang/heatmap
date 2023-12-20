// Import the functions you need from the SDKs you need
import { getApp, getApps, initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyA2L5cYcOHmYpqLvYFdQmatI8I1KG_GkKk',
  authDomain: 'consist-chart-project.firebaseapp.com',
  projectId: 'consist-chart-project',
  storageBucket: 'consist-chart-project.appspot.com',
  messagingSenderId: '562392900970',
  appId: '1:562392900970:web:2626ebe7d2c5605cd2f113',
};

// initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
// If there are no apps, initialize the app. Otherwise, get the app.
// However, in a Next.js app, there is a possibility that it has already been initialized as a singleton.
const db = getFirestore(app);

export { db };
