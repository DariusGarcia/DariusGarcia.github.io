import React from "react";
import "./contact.scss";
import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs, addDoc } from "firebase/firestore";

const firebaseConfig = {
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: process.env.FIREBASE_AUTH_DOMAIN,
  projectId: process.env.FIREBASE_PROJECT_ID,
  storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.FIREBASE_APP_ID,
};

// Initializing the Firebase Firestore database
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const colRef = collection(db, "contacts");

// Get the existing docs from the database and console.log them
const findDocs = () => {
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
const handleSubmit = (e) => {
  e.preventDefault();
  // findDocs();

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
  console.error("Form not submitted");
};

function Contact() {
  return (
    <div className="form-container">
      <form onSubmit={handleSubmit} className="add">
        <h1 className="contact-form-h1">Contact Me</h1>
        {/* <h5 className="replying-shortly">I will be replying shortly!</h5> */}

        <label className="form-headings" htmlFor="name">
          Name
        </label>
        <input type="text" name="name" placeholder="Name" required />

        <label className="form-headings">Email</label>
        <input placeholder="Email" type="text" name="email" required />

        <label className="form-headings">Message</label>
        <textarea
          placeholder="Message"
          type="text"
          name="message"
          required
        ></textarea>

        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default Contact;
