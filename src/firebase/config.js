import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";


const firebaseConfig = {
  apiKey: "AIzaSyDpB7kacwEr4GV1vovTZ2MOx6XzQxCGZqo",
  authDomain: "miniblog-1bf0a.firebaseapp.com",
  projectId: "miniblog-1bf0a",
  storageBucket: "miniblog-1bf0a.appspot.com",
  messagingSenderId: "429968466308",
  appId: "1:429968466308:web:3eeacc06df6080881dfdd1"
};


const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

export {db};

