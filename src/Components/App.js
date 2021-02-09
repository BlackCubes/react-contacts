import React from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import './App.css';

import ContactDetails from './ContactDetails';
import ContactForm from './ContactForm';
import ContactList from './ContactList';
import LoginForm from './LoginForm';
import LogoutButton from './LogoutButton';

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
      <AuthProvider>
        <ContactProvider>
          <LogoutButton />
          <Switch>
            <Route exact path="/" component={ContactList} />
            <Route exact path="/login" component={LoginForm} />
            <Route exact path="/contacts/add" component={ContactForm} />
            <Route exact path="/contacts/:index" component={ContactDetails} />
          </Switch>
        </ContactProvider>
      </AuthProvider>
    </Router>
  );
}

export default App;
