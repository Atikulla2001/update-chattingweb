
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';




// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBofwMgmXp8DDbTr8AtfUWIUhdTtxWBZ5Y",
  authDomain: "update-chatting-application.firebaseapp.com",
  projectId: "update-chatting-application",
  storageBucket: "update-chatting-application.firebasestorage.app",
  messagingSenderId: "574708180944",
  appId: "1:574708180944:web:cb362e0b4d22df96167bd5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);



export default firebaseConfig;

const auth = getAuth(app);

export { auth };





