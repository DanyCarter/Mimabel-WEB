import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';
import { getStorage } from 'firebase/storage';

const firebaseConfig = {
  apiKey: "AIzaSyDpvp2iGRthK7mDzAgab-Xs237-HVjy4PE",
  authDomain: "posvue-5faa0.firebaseapp.com",  // Asegúrate de completar esto
  projectId: "posvue-5faa0",
  storageBucket: "posvue-5faa0.appspot.com",  // Asegúrate de completar esto
  messagingSenderId: "732919111902",
  appId: "1:732919111902:web:85309f13d3bce46835a24f",
};

const firebaseApp = initializeApp(firebaseConfig);
const db = getFirestore(firebaseApp);
const auth = getAuth(firebaseApp);
const storage = getStorage(firebaseApp);  // Añade esto para inicializar el almacenamiento

export { firebaseApp, db, auth, storage };
