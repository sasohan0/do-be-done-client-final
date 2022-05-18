// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDTTFFdK1KiVr8KJJiM8JXCbLpS1A3zfYc",
  authDomain: "dobedone-517c4.firebaseapp.com",
  projectId: "dobedone-517c4",
  storageBucket: "dobedone-517c4.appspot.com",
  messagingSenderId: "789665328766",
  appId: "1:789665328766:web:b5222473c107ead6b9f22f",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;
