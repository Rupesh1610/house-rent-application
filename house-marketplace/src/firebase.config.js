// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore'

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDZ_5jGJg8Cm27oEie06j72oW6moig-pQQ",
    authDomain: "house-marketplace-4dcab.firebaseapp.com",
    projectId: "house-marketplace-4dcab",
    storageBucket: "house-marketplace-4dcab.appspot.com",
    messagingSenderId: "243186239824",
    appId: "1:243186239824:web:8c95157f1d38f3edc20455"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore()