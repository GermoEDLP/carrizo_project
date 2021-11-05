import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';

// Your web app's Firebase configuration
export const firebaseConfig = {
  apiKey: "AIzaSyA2mYkX-ul4U6M9bBxyt5z7ucc5sWs7n1c",
  authDomain: "proyecto-3484b.firebaseapp.com",
  projectId: "proyecto-3484b",
  storageBucket: "proyecto-3484b.appspot.com",
  messagingSenderId: "991048400112",
  appId: "1:991048400112:web:1e4a82573abefe7cc31635"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore();
export const auth = getAuth();
export default app;
