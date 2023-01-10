// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCVS7GcN2obMlifb_D5-juwcmef24Ayu4E",
  authDomain: "qanadilodesign.firebaseapp.com",
  projectId: "qanadilodesign",
  storageBucket: "qanadilodesign.appspot.com",
  messagingSenderId: "372351299783",
  appId: "1:372351299783:web:9fac5a0328b8236a218ee2",
  measurementId: "G-G93JSNS37W",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
const storage = getStorage(app);

// export { app, analytics, storage };
export { app, storage };
