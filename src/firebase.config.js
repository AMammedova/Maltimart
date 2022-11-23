
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'
import {getFirestore} from 'firebase/firestore'
import {getStorage} from 'firebase/storage'
const firebaseConfig = {
  apiKey: "AIzaSyABu2ZdtBiceBY-a0rOYnK84xxjeUFmmHg",
  authDomain: "maltimart-c6d7c.firebaseapp.com",
  projectId: "maltimart-c6d7c",
  storageBucket: "maltimart-c6d7c.appspot.com",
  messagingSenderId: "74686346981",
  appId: "1:74686346981:web:4f8c75e94b544b8ae1860c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth=getAuth(app)
export const db=getFirestore(app)
 export const storage=getStorage(app)
 export default app;