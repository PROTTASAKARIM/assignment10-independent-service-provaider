// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAK_VmDZLX9cGEnst0jXRWAhEoa25kPNyE",
    authDomain: "freelance-photographer.firebaseapp.com",
    projectId: "freelance-photographer",
    storageBucket: "freelance-photographer.appspot.com",
    messagingSenderId: "458841820779",
    appId: "1:458841820779:web:7569d77e092721fdcc2b2e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;