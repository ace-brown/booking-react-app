import firebase from "firebase/compat/app";
import "firebase/compat/functions";
import "firebase/compat/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBnNdxVHRhGqMgK0AcYIv65fNy-HFZQe8U",
  authDomain: "react-booking-app-45c29.firebaseapp.com",
  projectId: "react-booking-app-45c29",
  storageBucket: "react-booking-app-45c29.appspot.com",
  messagingSenderId: "380173475463",
  appId: "1:380173475463:web:0516ee1eb6be35bc26e222",
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// Export the Firebase instance
export default firebase;
