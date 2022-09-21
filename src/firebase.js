import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

// export const app = initializeApp({
//   apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
//   authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
//   projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
//   storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
//   messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
//   appId: process.env.REACT_APP_FIREBASE_APP_ID,
// });

export const app = initializeApp({
  apiKey: 'AIzaSyCd56s1-f51Gne_3Hbbrt9zEYnzts4bF_4',
  authDomain: 'vendor-dev-5217e.firebaseapp.com',
  projectId: 'vendor-dev-5217e',
  storageBucket: 'vendor-dev-5217e.appspot.com',
  messagingSenderId: '914090401990',
  appId: '1:914090401990:web:662f24b4020d40029577c7',
});

export const auth = getAuth();
export const db = getFirestore(app);
