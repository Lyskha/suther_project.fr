import { initializeApp } from "https://www.gstatic.com/firebasejs/11.8.1/firebase-app.js";
import { getAuth, GoogleAuthProvider } from "https://www.gstatic.com/firebasejs/11.8.1/firebase-auth.js";

const firebaseConfig = {
  apiKey: "AIzaSyAorQQcRgB46W5GkQvuQSIbHYsFs6CPrWY",
  authDomain: "suther-project.firebaseapp.com",
  projectId: "suther-project",
  storageBucket: "suther-project.firebasestorage.app",
  messagingSenderId: "668165301652",
  appId: "1:668165301652:web:49293b70566d67dbfc9b81"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
