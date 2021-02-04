import React from 'react';
import PropTypes from 'prop-types';
import { v4 as uuidv4 } from 'uuid';

import ContactItem from './ContactItem';

const ContactList = ({ contacts }) => (
  <div className="contact-list">
    {contacts.map((prop) => (
      <ContactItem
        key={uuidv4()}
        firstName={prop.firstName}
        lastName={prop.lastName}
        phoneNumber={prop.phoneNumber}
        profileImg={prop.profileImg}
      />
    ))}
  </div>
);

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default ContactList;
