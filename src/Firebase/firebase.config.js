// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBnaSsG5qJYvfgjvsVN0lvSovrWuN-D_3Y",
  authDomain: "doctor-auth-c046e.firebaseapp.com",
  projectId: "doctor-auth-c046e",
  storageBucket: "doctor-auth-c046e.appspot.com",
  messagingSenderId: "302518238533",
  appId: "1:302518238533:web:6eaa12378550b98cf1122c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;