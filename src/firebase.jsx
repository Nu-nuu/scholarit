import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getStorage } from "firebase/storage"

const firebaseConfig = {
  apiKey: "AIzaSyCr6W2b8MAyELF9qHjpys82MK1pAIuEn5Q",
  authDomain: "fa-training-e494d.firebaseapp.com",
  projectId: "fa-training-e494d",
  storageBucket: "fa-training-e494d.appspot.com",
  messagingSenderId: "619853042612",
  appId: "1:619853042612:web:972ebf7b2ac01de4ae18e1",
  measurementId: "G-DN2J8R7J4Q"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const storage = getStorage(app);