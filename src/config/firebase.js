import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyDpvp2iGRthK7mDzAgab-Xs237-HVjy4PE",
  authDomain: "",
  projectId: "posvue-5faa0",
  storageBucket: "",
  messagingSenderId: "732919111902",
  appId: "1:732919111902:web:85309f13d3bce46835a24f",
};

const firebaseApp = initializeApp(firebaseConfig);
const db = getFirestore(firebaseApp);
const auth = getAuth(firebaseApp);

export { firebaseApp, db, auth };
