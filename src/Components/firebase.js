import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyAjzCAdEq0XyRuAtKj7VEROhFxzF3HwgOo",
    authDomain: "casetools-c2bc0.firebaseapp.com",
    projectId: "casetools-c2bc0",
    storageBucket: "casetools-c2bc0.appspot.com",
    messagingSenderId: "892292041341",
    appId: "1:892292041341:web:368780cf98a66e7a27ff14",
    measurementId: "G-2KRL9ML9F8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export default app;