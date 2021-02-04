import React, { useState } from 'react';
import './App.css';

import ContactForm from './ContactForm';
import ContactList from './ContactList';

function App() {
  const [contacts, setContacts] = useState([]);

  const onSubmit = (newContacts) =>
    setContacts((oldContacts) => [...oldContacts, newContacts]);

  console.log('contacts', contacts);

  return (
    <>
      <div className="contact-form--wrapper">
        <ContactForm onSubmit={onSubmit} />
      </div>
      <div className="contact-list--wrapper">
        <ContactList contacts={contacts} />
      </div>
    </>
  );
}

export default App;
