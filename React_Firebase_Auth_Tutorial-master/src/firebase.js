import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCCBwOiQcZBYNS86qnYJo0JwCSR_wG8DIw",
  authDomain: "mobile-otp-auth-8bfd1.firebaseapp.com",
  projectId: "mobile-otp-auth-8bfd1",
  storageBucket: "mobile-otp-auth-8bfd1.appspot.com",
  messagingSenderId: "539536531703",
  appId: "1:539536531703:web:eebf30166ebb329c41f3f2",
  measurementId: "G-2WQC3CZXB4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export default app;
