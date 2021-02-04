import React, { useState } from 'react';
import './App.css';

import ContactForm from './ContactForm';

function App() {
  const [contacts, setContacts] = useState([]);

  const onSubmit = (newContacts) =>
    setContacts((oldContacts) => [...oldContacts, newContacts]);

  console.log('contacts', contacts);

  return <ContactForm onSubmit={onSubmit} />;
}

export default App;
