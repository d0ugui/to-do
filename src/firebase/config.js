import { initializeApp } from 'firebase/app';

//* Firebase project configuration
const firebaseConfig = {
  apiKey: "AIzaSyBnrm-mvcKdqxXBRTf3JbG_0INPBAjC4HQ",
  authDomain: "to-do-84d2f.firebaseapp.com",
  projectId: "to-do-84d2f",
  storageBucket: "to-do-84d2f.appspot.com",
  messagingSenderId: "600235762093",
  appId: "1:600235762093:web:5dd931bdcf959237310124"
};

//* Init Firebase App
export const app = initializeApp(firebaseConfig);



