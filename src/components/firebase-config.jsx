import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';
import 'firebase/auth';
const firebaseConfig = {
    apiKey: "AIzaSyC7_sV90cEdsBlvZlqOwUXfR7tcZBB6Vuc",
    authDomain: "just-for-fun-361a8.firebaseapp.com",
    projectId: "just-for-fun-361a8",
    storageBucket: "just-for-fun-361a8.firebasestorage.app",
    messagingSenderId: "388611663986",
    appId: "1:388611663986:web:766c11bbb911a75b5dbaeb"
  };
  



const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
const storage = getStorage(app);

export { auth, db, storage};