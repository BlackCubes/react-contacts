import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import './App.css';

import ContactDetails from './ContactDetails';
import ContactForm from './ContactForm';
import ContactList from './ContactList';
// import LoginForm from './LoginForm';

import AuthProvider from '../providers/AuthProvider';
import ContactProvider from '../providers/ContactProvider';

function App() {
  return (
    <Router>
      <nav>
        <ul>
          <li>
            <Link to="/">Contacts</Link>
          </li>
          <li>
            <Link to="/contacts/add">Create Contact</Link>
          </li>
        </ul>
      </nav>
      <ContactProvider>
        <AuthProvider>
          {/* <LoginForm /> */}
          <Route exact path="/" component={ContactList} />
          <Route exact path="/contacts/:index" component={ContactDetails} />
          <Route exact path="/contacts/add" component={ContactForm} />
          {/* <div className="contact-form--wrapper">
            <ContactForm />
          </div>
          <div className="contact-list--wrapper">
            <ContactList />
          </div> */}
        </AuthProvider>
      </ContactProvider>
    </Router>
  );
}

export default App;
