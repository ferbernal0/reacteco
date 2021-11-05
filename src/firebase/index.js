import firebase from "firebase";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyChjxkJqgZKxz-gKznj_S-pIHS9mKdRBlw",
  authDomain: "tecno-commerce.firebaseapp.com",
  projectId: "tecno-commerce",
  storageBucket: "tecno-commerce.appspot.com",
  messagingSenderId: "154965628446",
  appId: "1:154965628446:web:d404d95497c4ba4cb8800f",
};

const app = firebase.initializeApp(firebaseConfig);

export function getFirestore() {
  return firebase.firestore(app);
}
