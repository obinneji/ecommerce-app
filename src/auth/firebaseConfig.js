import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyCYRdkkunyaxbguSZwFVrSpNrS-xDJbjds",
  authDomain: "ecommerce-project-8b624.firebaseapp.com",
  projectId: "ecommerce-project-8b624",
  storageBucket: "ecommerce-project-8b624.appspot.com",
  messagingSenderId: "328228603195",
  appId: "1:328228603195:web:bde611ef2281061462631e",
  measurementId: "G-M7Q1FEXF70"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);