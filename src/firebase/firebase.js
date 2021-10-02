import firebase from 'firebase/compat/app'
import 'firebase/compat/storage'

const firebaseConfig = {
  apiKey: "AIzaSyDrH6ijNW6CCXNySDOyeVZ2bUbhID9LrPE",
  authDomain: "expense-tracker-e01d8.firebaseapp.com",
  projectId: "expense-tracker-e01d8",
  storageBucket: "expense-tracker-e01d8.appspot.com",
  messagingSenderId: "555241028484",
  appId: "1:555241028484:web:6d90fe9cf2540ed6653bd1",
  measurementId: "G-HWCYF75Q03"
}

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const storage = firebase.storage();

export const endpoint = 'https://expense-tracker-e01d8-default-rtdb.asia-southeast1.firebasedatabase.app/';

export default storage;
