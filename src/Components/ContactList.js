import React from 'react';
import { Link } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';

import ContactItem from './ContactItem';

import { useContactContext } from '../hooks/index';

const ContactList = () => {
  const { contacts, deleteContact } = useContactContext();

  console.log(contacts);

  return (
    <div className="contact-list">
      {contacts.map((prop, key) => {
        const contactComponent = (
          <ContactItem
            key={uuidv4()}
            firstName={prop.firstName}
            lastName={prop.lastName}
            phoneNumber={prop.phoneNumber}
            profileImg={prop.fileUpload}
            deleteContact={() => deleteContact(key)}
          />
        );
        return (
          <Link
            key={uuidv4()}
            to={`/contacts/${key}`}
            component={contactComponent}
          />
        );
      })}
    </div>
  );
};

export default ContactList;
