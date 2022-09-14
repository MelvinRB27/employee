import {initializeApp} from 'firebase/app';
import { getAuth } from 'firebase/auth';
import {getFirestore} from 'firebase/firestore';
import {getStorage} from 'firebase/storage';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCJ3JGdM0SHCLKNSKAuEZCPxSrxrw0xOL8",
    authDomain: "employeestorage.firebaseapp.com",
    projectId: "employeestorage",
    storageBucket: "employeestorage.appspot.com",
    messagingSenderId: "888549712120",
    appId: "1:888549712120:web:6ab47ee255e2bde1e61b0d",
    measurementId: "G-G9MPSEYH5Y"
  };

const app = initializeApp(firebaseConfig);

export const storage = getStorage(app);
export const db =getFirestore(app);
export const auth = getAuth(app);