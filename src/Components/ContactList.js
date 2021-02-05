import React from 'react';
import { v4 as uuidv4 } from 'uuid';

import ContactItem from './ContactItem';

import useContactContext from '../hooks';

const ContactList = () => {
  const { contacts } = useContactContext();

  return (
    <div className="contact-list">
      {contacts.map((prop) => (
        <ContactItem
          key={uuidv4()}
          firstName={prop.firstName}
          lastName={prop.lastName}
          phoneNumber={prop.phoneNumber}
          profileImg={prop.fileUpload}
        />
      ))}
    </div>
  );
};

export default ContactList;
