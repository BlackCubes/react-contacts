import React from 'react';
import { v4 as uuidv4 } from 'uuid';

import ContactItem from './ContactItem';

import { useContactContext } from '../hooks/index';

const ContactList = () => {
  const { contacts, deleteContact, getContactDetails } = useContactContext();

  console.log(contacts);

  return (
    <div className="contact-list">
      {contacts.map((prop, key) => (
        <ContactItem
          key={uuidv4()}
          firstName={prop.firstName}
          lastName={prop.lastName}
          phoneNumber={prop.phoneNumber}
          profileImg={prop.fileUpload}
          deleteContact={() => deleteContact(key)}
          getContactDetails={() => getContactDetails(key)}
        />
      ))}
    </div>
  );
};

export default ContactList;
