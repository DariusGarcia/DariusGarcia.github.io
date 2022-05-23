import React, { useState } from "react";
import './contact.css';
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

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const colRef = collection(db, 'contacts')

// Get the existing docs from the database and console.log them
const findDocs = () => {
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

  // handling the contact post submission 
  const postForm = (e) => {
      findDocs();
      console.log('postForm');
      e.preventDefault();
      handleSubmit();
  }

// Adding the new docs to the database 
const handleSubmit = (e) => {
  console.log('handle submit');

  const addContactForm = document.querySelector('.add');

  addContactForm.addEventListener('submit', (e) => {
      console.log('addContactForm');
      e.preventDefault();
      addDoc(colRef, {
          name: addContactForm.name.value,
          email: addContactForm.email.value,
          message: addContactForm.message.value,
      })
          .then(() => {
              addContactForm.reset();
              console.log('Form submitted');
          })
  })
}


function Contact() {

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");



  return (
    <form onSubmit={postForm} className="add" >
      <h1>Contact Form</h1>

      <label htmlFor="name">Name</label>
      <input type="text" name='name' placeholder="Name" required />

      <label>Email</label>
      <input placeholder="Email" type="text" name='email' required />

      <label>Message</label>
      <textarea placeholder="Message" type="text"
        name='message' required>
      </textarea>

      <button type="submit">Submit</button>
    </form>
  );
};

export default Contact;