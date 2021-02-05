import React from 'react';
import './App.css';

import ContactForm from './ContactForm';
import ContactList from './ContactList';

import AuthProvider from '../providers/AuthProvider';
import ContactProvider from '../providers/ContactProvider';

function App() {
  // const [contacts, setContacts] = useState([]);

  // const onSubmit = (newContacts) =>
  //   setContacts((oldContacts) => [...oldContacts, newContacts]);

  // console.log('contacts', contacts);

  return (
    <>
      <AuthProvider>
        <ContactProvider>
          <div className="contact-form--wrapper">
            <ContactForm />
          </div>
          <div className="contact-list--wrapper">
            <ContactList />
          </div>
        </ContactProvider>
      </AuthProvider>
    </>
  );
}

export default App;
