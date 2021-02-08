import React from 'react';
import { useParams } from 'react-router-dom';

import { useContactContext } from '../hooks/index';

const ContactDetails = () => {
  const { contacts } = useContactContext();
  const { index } = useParams();

  const {
    firstName,
    lastName,
    phoneNumber,
    email,
    address,
    fileUpload,
  } = contacts[index];

  return (
    <div className="contact-details">
      <div className="contact-details__profile">
        <img
          className="contact-details__profile-img"
          src={fileUpload}
          alt="Contact Details Profile"
        />
      </div>

      <div className="contact-details__fullname">
        {`${firstName} ${lastName}`}
      </div>

      <div className="contact-details__phone">{phoneNumber}</div>

      <div className="contact-details__email">{email}</div>

      <div className="contact-details__address">{address}</div>
    </div>
  );
};

export default ContactDetails;
