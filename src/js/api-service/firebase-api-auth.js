import { initializeApp } from 'firebase/app';
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  setPersistence,
  browserSessionPersistence,
} from 'firebase/auth';

const firebaseConfig = {
  apiKey: 'AIzaSyC_ZqRh92a1imNlrZFI2VN7cIY_kE_5IEk',
  authDomain: 'filmoteka-e6aa9.firebaseapp.com',
  databaseURL:
    'https://filmoteka-e6aa9-default-rtdb.europe-west1.firebasedatabase.app',
  projectId: 'filmoteka-e6aa9',
  storageBucket: 'filmoteka-e6aa9.appspot.com',
  messagingSenderId: '849621855404',
  appId: '1:849621855404:web:d78cfb69a016a21821c309',
};

const app = initializeApp(firebaseConfig);

// gives us an auth instance
const auth = getAuth(app);

function createNewUser(email, password) {
  return createUserWithEmailAndPassword(auth, email, password)
    .then(userCredential => {
      // Signed in
      const user = userCredential.user;
      console.log(user);
      // ...
    })
    .catch(error => {
      const errorCode = error.code;
      const errorMessage = error.message;
      // ..
    });
}

async function signIn(email, password) {
  try {
    await setPersistence(auth, browserSessionPersistence);
    return await signInWithEmailAndPassword(auth, email, password);
  } catch (error) {
    // Handle Errors here.
    const errorCode = error.code;
    const errorMessage = error.message;
  }
}

function signOut() {
  signOut(auth)
    .then(() => {
      // Sign-out successful.
    })
    .catch(error => {
      // An error happened.
    });
}

function currentUser() {
  return auth.currentUser;
}

function checkedAuth() {
  if (currentUser()) {
    return true;
  }

  return false;
}

export { signIn, createNewUser, signOut, currentUser, checkedAuth };
