import React from 'react';
import PropTypes from 'prop-types';

import useContactContext from '../hooks/index';

const ContactItem = ({
  firstName,
  lastName,
  phoneNumber,
  profileImg,
  index,
}) => {
  const { deleteContact } = useContactContext();

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
      <button type="button" onClick={deleteContact(index)}>
        &times;
      </button>
    </div>
  </div>;
};

ContactItem.propTypes = {
  firstName: PropTypes.string.isRequired,
  lastName: PropTypes.string.isRequired,
  phoneNumber: PropTypes.string.isRequired,
  profileImg: PropTypes.string.isRequired,
  index: PropTypes.number.isRequired,
};

export default ContactItem;
