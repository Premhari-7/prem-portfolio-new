import { initializeApp } from "firebase/app";

import {
  initializeFirestore,
} from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAtcD12vRoPh1pt997G4VTxrvGpX_jqIuo",
  authDomain: "premhari-portfolio.firebaseapp.com",
  projectId: "premhari-portfolio",
  storageBucket: "premhari-portfolio.firebasestorage.app",
  messagingSenderId: "366123439340",
  appId: "1:366123439340:web:9afd2fec4fe296221a41c9"
};


const app = initializeApp(firebaseConfig);

export const db = initializeFirestore(app, {
  experimentalForceLongPolling: true,
});