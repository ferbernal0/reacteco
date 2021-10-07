import firebase from 'firebase/app'
import 'firebase/firestore'

const app = firebase.initializeApp ({
    apiKey: "AIzaSyBD9yYQKawOFZuTMRK9G8VdHG4nQ7-AlyU",
    authDomain: "reacteco-75396.firebaseapp.com",
    projectId: "reacteco-75396",
    storageBucket: "reacteco-75396.appspot.com",
    messagingSenderId: "51182770123",
    appId: "1:51182770123:web:dd688d9ee57f835158484e",
    measurementId: "G-K1J7BFMGCH"
})
export function getFirebase(){
    return app
}
export function getFirestore(){
    return firebase.firestore(app)
}