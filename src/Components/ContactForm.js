import React from 'react';

class ContactForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: '',
      lastName: '',
      phoneNumber: '',
      email: '',
      address: '',
    };
  }

  render() {
    const { firstName, lastName, phoneNumber, email, address } = this.state;

    return (
      <form className="form" noValidate>
        <div className="form__group">
          <label htmlFor="firstName">
            <input
              type="text"
              name="firstName"
              className="form__input input-text"
              id="firstName"
              value={firstName}
              placeholder="First Name"
              noValidate
            />

            <span className="form__label label-text">Enter a first name.</span>
          </label>
        </div>

        <div className="form__group">
          <label htmlFor="lastName">
            <input
              type="text"
              name="lastName"
              className="form__input input-text"
              id="lastName"
              value={lastName}
              placeholder="Last Name"
              noValidate
            />

            <span className="form__label label-text">Enter a last name.</span>
          </label>
        </div>

        <div className="form__group">
          <label htmlFor="phoneNumber">
            <input
              type="tel"
              name="phoneNumber"
              className="form__input input-text"
              id="phoneNumber"
              value={phoneNumber}
              placeholder="Phone Number"
              noValidate
            />

            <span className="form__label label-text">
              Enter a phone number.
            </span>
          </label>
        </div>

        <div className="form__group">
          <label htmlFor="email">
            <input
              type="email"
              name="email"
              className="form__input input-text"
              id="email"
              value={email}
              placeholder="Email"
              noValidate
            />

            <span className="form__label label-text">Enter an email.</span>
          </label>
        </div>

        <div className="form__group">
          <label htmlFor="address">
            <input
              type="address"
              name="address"
              className="form__input input-text"
              id="address"
              value={address}
              placeholder="Address"
              noValidate
            />

            <span className="form__label label-text">Enter an address.</span>
          </label>
        </div>

        <div className="form__group">
          <button className="btn" type="submit">
            Add Contact
          </button>
        </div>
      </form>
    );
  }
}

export default ContactForm;