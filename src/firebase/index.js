import firebase from 'firebase/app'
import 'firebase/firestore'

const app = firebase.initializeApp ({
    apiKey: "AIzaSyDSyCDsIY21KxhpSMafdC1HO-5INiOQEns",
    authDomain: "ecoreact.firebaseapp.com",
    projectId: "ecoreact",
    storageBucket: "ecoreact.appspot.com",
    messagingSenderId: "434249916383",
    appId: "1:434249916383:web:16487095c19792223e6e6a",
    measurementId: "G-ZCFJW5P3RT"
})
export function getFirebase(){
    return app
}
export function getFirestore(){
    return firebase.firestore(app)
}