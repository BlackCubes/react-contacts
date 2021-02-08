import React from 'react';
import PropTypes from 'prop-types';

const ContactItem = ({
  firstName,
  lastName,
  phoneNumber,
  profileImg,
  deleteContact,
  getContactDetails,
}) => (
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
      <button type="button" onClick={deleteContact}>
        &times;
      </button>
    </div>

    <div className="contact-item__more-info">
      <button type="button" onClick={getContactDetails}>
        &check;
      </button>
    </div>
  </div>
);

ContactItem.propTypes = {
  firstName: PropTypes.string.isRequired,
  lastName: PropTypes.string.isRequired,
  phoneNumber: PropTypes.string.isRequired,
  profileImg: PropTypes.string.isRequired,
  deleteContact: PropTypes.func.isRequired,
  getContactDetails: PropTypes.func.isRequired,
};

export default ContactItem;
