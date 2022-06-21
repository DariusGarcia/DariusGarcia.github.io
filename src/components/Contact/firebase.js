import { initializeApp } from "firebase/compat/app";
import {
  getFirestore,
  collection,
  getDocs,
  addDoc,
} from "firebase/compat/firestore";

const firebaseConfig = {
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: process.env.FIREBASE_AUTH_DOMAIN,
  projectId: process.env.FIREBASE_PROJECT_ID,
  storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.FIREBASE_APP_ID,
};

// Initializing the Firebase Firestore database
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const colRef = collection(db, "contacts");

// Get the existing docs from the database and console.log them
export const findDocs = () => {
  getDocs(colRef)
    .then((snapshot) => {
      let contacts = [];
      snapshot.docs.forEach((doc) => {
        contacts.push({ ...doc.data(), id: doc.id });
      });
      console.log(contacts);
    })
    .catch((err) => {
      console.log(err.message);
    });
};

// Handling the contact post submission
export const formSubmit = (e) => {
  e.preventDefault();
  findDocs();

  // addContactForm();
  const addContactForm = document.querySelector(".add");
  e.preventDefault();
  addDoc(colRef, {
    name: addContactForm.name.value,
    email: addContactForm.email.value,
    message: addContactForm.message.value,
  }).then(() => {
    addContactForm.reset();
    console.log("Form submitted");
  });
  alert("Message submitted! Darius will be contacting you back shortly.");
};
