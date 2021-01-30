import React from 'react';

import * as regex from '../utils/regex';

class ContactForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: '',
      lastName: '',
      phoneNumber: '',
      email: '',
      address: '',
      errors: {
        firstName: '',
        lastName: '',
        phoneNumber: '',
        email: '',
        address: '',
      },
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault(e);
    alert('Hello! :)');
  }

  handleChange(e) {
    e.preventDefault();
    const { name, value } = e.target;
    const { errors } = this.state;

    switch (name) {
      case 'firstName':
        errors.firstName =
          value.length < 2 ? 'Must be a minimum of 2 characters.' : '';
        errors.firstName =
          value.length > 20
            ? 'Must be less than or equal to 20 characters.'
            : '';
        errors.firstName = !regex.regexName.test(value)
          ? 'Please use a valid first name'
          : '';
        break;
      case 'lastName':
        errors.lastName =
          value.length < 2 ? 'Must be a minimum of 2 characters.' : '';
        errors.lastName =
          value.length > 40
            ? 'Must be less than or equal to 40 characters.'
            : '';
        errors.lastName = !regex.regexName.test(value)
          ? 'Please use a valid last name'
          : '';
        break;
      case 'phoneNumber':
        errors.phoneNumber = !regex.regexPhone.test(value)
          ? 'Please provide a valid phone number.'
          : '';
        break;
      case 'address':
        errors.address =
          value.length < 3 ? 'Must be a minimum of 3 characters.' : '';
        errors.address =
          value.length < 96
            ? 'Must be less than or equal to 96 character.'
            : '';
        errors.address = !regex.regexAddress.test(value)
          ? 'Please provide a valid address.'
          : '';
        break;
      default:
        break;
    }

    this.setState({ [name]: value, errors });
  }

  render() {
    const { firstName, lastName, phoneNumber, email, address } = this.state;

    return (
      <form className="form" onSubmit={this.handleSubmit} noValidate>
        <div className="form__group">
          <label htmlFor="firstName">
            <input
              type="text"
              name="firstName"
              className="form__input input-text"
              id="firstName"
              value={firstName}
              placeholder="First Name"
              onChange={this.handleChange}
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
              onChange={this.handleChange}
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
              onChange={this.handleChange}
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
              onChange={this.handleChange}
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
              onChange={this.handleChange}
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
