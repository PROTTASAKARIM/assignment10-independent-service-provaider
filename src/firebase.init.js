// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAtPmHHxGx5QI6xTJv3kqkIZ0B2s9WKvCk",
    authDomain: "dreamy-photographer.firebaseapp.com",
    projectId: "dreamy-photographer",
    storageBucket: "dreamy-photographer.appspot.com",
    messagingSenderId: "212163313757",
    appId: "1:212163313757:web:5e93146af38035545bcdb4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;