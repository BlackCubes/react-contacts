import React, { useState } from 'react';
import { useHistory, withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';

import ContactContext from '../context/ContactContext';

const ContactProvider = ({ children }) => {
  const [contacts, setContacts] = useState([]);
  const history = useHistory();

  const addContacts = (newContacts) => {
    setContacts((oldContacts) => [...oldContacts, newContacts]);
    history.push('/');
  };

  const deleteContact = (deleteIndex) =>
    setContacts(contacts.filter((val, ind) => ind !== deleteIndex));

  const getContactDetails = (index) => history.push(`/contacts/${index}`);

  return (
    <ContactContext.Provider
      value={{ contacts, addContacts, deleteContact, getContactDetails }}
    >
      {children}
    </ContactContext.Provider>
  );
};

ContactProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default withRouter(ContactProvider);
