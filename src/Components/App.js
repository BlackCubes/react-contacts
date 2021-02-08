import React from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';

import ContactForm from './ContactForm';
import ContactList from './ContactList';
// import LoginForm from './LoginForm';

import AuthProvider from '../providers/AuthProvider';
import ContactProvider from '../providers/ContactProvider';

function App() {
  return (
    <>
      <AuthProvider>
        {/* <LoginForm /> */}
        <ContactProvider>
          <Switch>
            <Route exact path="/" component={ContactList} />
            <Route exact path="/contacts/add" component={ContactForm} />
          </Switch>
          {/* <div className="contact-form--wrapper">
            <ContactForm />
          </div>
          <div className="contact-list--wrapper">
            <ContactList />
          </div> */}
        </ContactProvider>
      </AuthProvider>
    </>
  );
}

export default App;
