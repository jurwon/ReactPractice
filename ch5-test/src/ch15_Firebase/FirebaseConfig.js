// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

//추가설정 순서1
//store import
import { getFirestore } from "@firebase/firestore";

//storage import
import { getStorage } from "firebase/storage";

// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBAMBTCq3CAx_YIl6v6EYXsN1rjj7HIon0",
  authDomain: "reactworkspace-3597b.firebaseapp.com",
  projectId: "reactworkspace-3597b",
  storageBucket: "reactworkspace-3597b.appspot.com",
  messagingSenderId: "357300230693",
  appId: "1:357300230693:web:cbc8755dd79446a8147dcc",
  measurementId: "G-Y22FBZPN9W",
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);

//추가 설정 순서2
//store : 적용해서 내보내기, 다른 파일에서 임포트해서 사용 가능
export const db = getFirestore(app);

//storage : 적용해서 내보내기, 다른 파일에서 임포트해서 사용 가능s
export const storage = getStorage(app);

//const analytics = getAnalytics(app);
