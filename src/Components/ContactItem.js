import React from 'react';
import PropTypes from 'prop-types';

const ContactItem = ({ firstName, lastName, phoneNumber, profileImg }) => (
  <div className="contact-item">
    <div className="contact-item__profile">
      <img
        className="contact-item__profile-img"
        src={profileImg}
        alt="User Profile"
      />
    </div>

    <div className="contact-item__info">
      <div className="contact-item__info-name">
        <span>{`${firstName} ${lastName}`}</span>
      </div>

      <div className="contact-item__info-phone">
        <span>{phoneNumber}</span>
      </div>
    </div>

    <div className="contact-item__close">
      <span>&times;</span>
    </div>
  </div>
);

ContactItem.propTypes = {
  firstName: PropTypes.string.isRequired,
  lastName: PropTypes.string.isRequired,
  phoneNumber: PropTypes.string.isRequired,
  profileImg: PropTypes.string.isRequired,
};

export default ContactItem;
