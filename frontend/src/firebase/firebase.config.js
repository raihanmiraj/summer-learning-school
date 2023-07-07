import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// import dotenv from 'dotenv';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
// dotenv.config();
 
 console.log(import.meta.env.VITE_AUTH_DOMAIN)
const firebaseConfig = {
  apiKey: import.meta.env.VITE_API_KEY,
    authDomain: import.meta.env.VITE_AUTH_DOMAIN,
    projectId: import.meta.env.VITE_PROJECT_ID,
    storageBucket: import.meta.env.VITE_STORAGE_BUCKET,
    messagingSenderId: import.meta.env.VITE_MESSAGING_SENDER_ID,
    appId: import.meta.env.VITE_APP_ID,
    measurementId: import.meta.env.VITE_MEASUREMENT_ID
  };
// const firebaseConfig = {
//   apiKey: "AIzaSyBHSlGdWVHoTRp5n8kkqVVHE-j02k_Rzqc",
//   authDomain: "hoichoidev-f27a5.firebaseapp.com",
//   projectId: "hoichoidev-f27a5",
//   storageBucket: "hoichoidev-f27a5.appspot.com",
//   messagingSenderId: "579988425072",
//   appId: "1:579988425072:web:29fd71348b5d7ab92767b5",
//   measurementId: "G-VNL3TW7L1V"
// };

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export default app;