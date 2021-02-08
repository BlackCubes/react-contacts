import React from 'react';
// import { Route } from 'react-router-dom';
import './App.css';

import ContactForm from './ContactForm';
import ContactList from './ContactList';
// import LoginForm from './LoginForm';

import AuthProvider from '../providers/AuthProvider';

function App() {
  return (
    <>
      <AuthProvider>
        {/* <LoginForm /> */}
        {/* <Route exact path="/" component={ContactList} />
        <Route exact path="/contacts/add" component={ContactForm} /> */}
        <div className="contact-form--wrapper">
          <ContactForm />
        </div>
        <div className="contact-list--wrapper">
          <ContactList />
        </div>
      </AuthProvider>
    </>
  );
}

export default App;
