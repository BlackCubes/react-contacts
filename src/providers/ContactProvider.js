import React, { useState } from 'react';
import PropTypes from 'prop-types';

import ContactContext from '../context/ContactContext';

const ContactProvider = ({ children }) => {
  const [contacts, setContacts] = useState([]);

  const addContacts = (newContacts) =>
    setContacts((oldContacts) => [...oldContacts, newContacts]);

  return (
    <ContactContext.Provider value={{ contacts, addContacts }}>
      {children}
    </ContactContext.Provider>
  );
};

ContactProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default ContactProvider;
