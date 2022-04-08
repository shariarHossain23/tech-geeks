import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyDHP7M97Gw7YcKT7L-aOFwEu3I9ZNTNgKc",
  authDomain: "tech-geeks-4dbff.firebaseapp.com",
  projectId: "tech-geeks-4dbff",
  storageBucket: "tech-geeks-4dbff.appspot.com",
  messagingSenderId: "825023633739",
  appId: "1:825023633739:web:9283f8c95d9103911670ce"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
export default app;