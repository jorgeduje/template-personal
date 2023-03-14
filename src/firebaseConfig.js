import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
  createUserWithEmailAndPassword,
} from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyD66ioE1BhMvcJPMp1yt7tpLHsr6C_qQ1E",
  authDomain: "auth-react-3d154.firebaseapp.com",
  projectId: "auth-react-3d154",
  storageBucket: "auth-react-3d154.appspot.com",
  messagingSenderId: "251678340934",
  appId: "1:251678340934:web:2c32f484c62819f1b35747",
};

const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export const onSignIn = async ({ email, password }) => {
  try {
    return await signInWithEmailAndPassword(auth, email, password);
  } catch (err) {
    return err;
  }
};

const googleProvider = new GoogleAuthProvider();
export const sigInWithGoogle = async () => {
  try {
    return await signInWithPopup(auth, googleProvider);
  } catch (error) {
    return error;
  }
};
export const register = async ({ email, password }) => {
  try {
    return await createUserWithEmailAndPassword(auth, email, password);
  } catch (error) {
    return error;
  }
};
