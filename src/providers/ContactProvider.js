import React, { useState } from 'react';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';

import ContactContext from '../context/ContactContext';

const ContactProvider = ({ children }) => {
  const [contacts, setContacts] = useState([]);

  const addContacts = (newContacts) =>
    setContacts((oldContacts) => [...oldContacts, newContacts]);

  const deleteContact = (deleteIndex) =>
    setContacts(contacts.filter((val, ind) => ind !== deleteIndex));

  return (
    <ContactContext.Provider value={{ contacts, addContacts, deleteContact }}>
      {children}
    </ContactContext.Provider>
  );
};

ContactProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default withRouter(ContactProvider);
