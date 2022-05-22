import React, { useState } from "react";
import './contact.css';
import { initializeApp } from "firebase/app";
import {
  getFirestore, collection, getDocs, addDoc
} from 'firebase/firestore';



function Contact() {

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");




  // firebase api config 
  const firebaseConfig = {
    apiKey: "AIzaSyAY6X_8lixE958LjMwm04ArXSDy98J9YaY",
    authDomain: "portfolio-ad26d.firebaseapp.com",
    projectId: "portfolio-ad26d",
    storageBucket: "portfolio-ad26d.appspot.com",
    messagingSenderId: "531058865360",
    appId: "1:531058865360:web:44554b19dd7d63e5dd9ad5"
  };

  const app = initializeApp(firebaseConfig);
  const db = getFirestore();

  const colRef = collection(db, 'contacts');

  // reading the data from firebase database 
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

  // writing data to firebase database 
  const addContactForm = document.querySelector('.add')
  if (addContactForm) {
    addContactForm.addEventListener('submit', (e) => {
      e.preventDefault()

      addDoc(colRef, {
        name: addContactForm.name.value,
        email: addContactForm.email.value,
        message: addContactForm.message.value,

      })
        .then(() => {
          addContactForm.reset();
          // setName = "";
          // setEmail = "";
          // setMessage = "";
          // handleSubmit();
        })

    })
  }
  // const handleSubmit = (e) => {
  //   e.preventDefault();
  // }


  return (
    <form className="add" >
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