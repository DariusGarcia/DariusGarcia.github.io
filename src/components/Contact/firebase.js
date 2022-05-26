import { initializeApp } from "firebase/app";
import {
  getFirestore, collection, getDocs, addDoc
} from 'firebase/firestore';


const firebaseConfig = {
  apiKey: "AIzaSyAY6X_8lixE958LjMwm04ArXSDy98J9YaY",
  authDomain: "portfolio-ad26d.firebaseapp.com",
  projectId: "portfolio-ad26d",
  storageBucket: "portfolio-ad26d.appspot.com",
  messagingSenderId: "531058865360",
  appId: "1:531058865360:web:44554b19dd7d63e5dd9ad5"
};

// Initializing the Firebase Firestore database
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const colRef = collection(db, 'contacts')

// Get the existing docs from the database and console.log them
export const findDocs = () => {
  getDocs(colRef)
    .then((snapshot) => {
      let contacts = []
      snapshot.docs.forEach((doc) => {
        contacts.push({ ...doc.data(), id: doc.id })
      })
      console.log(contacts)
    })
    .catch(err => {
      console.log(err.message)
    })
}

// Handling the contact post submission 
export const formSubmit = (e) => {
  e.preventDefault();
  findDocs();

  // addContactForm();
  const addContactForm = document.querySelector('.add');
  e.preventDefault();
  addDoc(colRef, {
    name: addContactForm.name.value,
    email: addContactForm.email.value,
    message: addContactForm.message.value,
  })
    .then(  () => {
       addContactForm.reset();
      console.log('Form submitted');
    })
    alert("Message submitted! Darius will be contacting you back shortly.")
}
