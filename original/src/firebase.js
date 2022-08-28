import { initializeApp } from "firebase/app"
import { getFirestore } from "firebase/firestore"
// import { GoogleAuthProvider } from "firebase/auth"
// import { getAuth, signInWithPopup, signInWithRedirect } from "firebase/auth"

const firebaseConfig = {
  apiKey: "AIzaSyDy-Tlg8WtMtHx7P95_T6_xk_Zs9jnM1C0",
  authDomain: "my-project-d66dd.firebaseapp.com",
  projectId: "my-project-d66dd",
  storageBucket: "my-project-d66dd.appspot.com",
  messagingSenderId: "727478137403",
  appId: "1:727478137403:web:983a4f1e07d26ce268e21e",
  measurementId: "G-9GL9RML4KQ",
}

// const provider = new GoogleAuthProvider()
const app = initializeApp(firebaseConfig)
export const db = getFirestore(app)
// export const GoogleAuthProvider = getFirestore(app)
// export const signInWithRedirect = getFirestore(app)
