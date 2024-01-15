import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyC6rBF__fxKcNh9NrrUdfNZZDoiVinORFg",
  authDomain: "nwitter-reloaded-2fe78.firebaseapp.com",
  projectId: "nwitter-reloaded-2fe78",
  storageBucket: "nwitter-reloaded-2fe78.appspot.com",
  messagingSenderId: "748136090797",
  appId: "1:748136090797:web:0668d56bc1ad559dbfca24",
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);

export const storage = getStorage(app);

export const db = getFirestore(app);
