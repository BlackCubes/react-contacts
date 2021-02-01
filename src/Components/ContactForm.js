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
      fileUpload: null,
      errors: {
        firstName: '',
        lastName: '',
        phoneNumber: '',
        email: '',
        address: '',
        fileUpload: '',
      },
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleFileChange = this.handleFileChange.bind(this);
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
        if (value.length < 2)
          errors.firstName = 'Must be a minimum of 2 characters.';
        else if (value.length > 20)
          errors.firstName = 'Must be less than or equal to 20 characters.';
        else if (!regex.regexName.test(value))
          errors.firstName = 'Please use a valid first name';
        else errors.firstName = 'Woohoo!';
        break;
      case 'lastName':
        if (value.length < 2)
          errors.lastName = 'Must be a minimum of 2 characters.';
        else if (value.length > 40)
          errors.lastName = 'Must be less than or equal to 40 characters.';
        else if (!regex.regexName.test(value))
          errors.lastName = 'Please use a valid last name';
        else errors.lastName = 'Woohoo!';
        break;
      case 'phoneNumber':
        if (!regex.regexPhone.test(value))
          errors.phoneNumber = 'Please provide a valid phone number.';
        else errors.phoneNumber = 'Woohoo!';
        break;
      case 'email':
        if (!regex.regexEmail.test(value))
          errors.email = 'Please provide a valid email.';
        else errors.email = 'Woohoo!';
        break;
      case 'address':
        if (value.length < 3)
          errors.address = 'Must be a minimum of 3 characters.';
        else if (value.length > 96)
          errors.address = 'Must be less than or equal to 96 character.';
        else if (!regex.regexAddress.test(value))
          errors.address = 'Please provide a valid address.';
        else errors.address = 'Woohoo!';
        break;
      default:
        break;
    }

    this.setState({ [name]: value, errors });
  }

  handleFileChange(e) {
    if (e.target.files.length) {
      this.setState({ fileUpload: null });
      const { errors } = this.state;
      console.log('e: ', e);
      const file = e.target.files[0];
      const fileExt = file.type.split('/')[1].toLowerCase();
      const { size } = file;

      console.log(file);
      if (!regex.regexPhoto.test(fileExt))
        errors.fileUpload = 'Image files must be in jpg, jpeg, or png.';
      else if (size > 1024000)
        errors.fileUpload = 'Max upload size of 1MB only.';
      else errors.fileUpload = '';

      if (errors.fileUpload.length === 0) {
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onloadend = () => this.setState({ fileUpload: reader.result });
      }
    }
  }

  render() {
    const {
      firstName,
      lastName,
      phoneNumber,
      email,
      address,
      errors,
      fileUpload,
    } = this.state;

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

            <span className="form__label label-text">
              {errors.firstName.length > 0
                ? errors.firstName
                : 'Enter a first name.'}
            </span>
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

            <span className="form__label label-text">
              {errors.lastName.length > 0
                ? errors.lastName
                : 'Enter a last name.'}
            </span>
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
              {errors.phoneNumber.length > 0
                ? errors.phoneNumber
                : 'Enter a phone number.'}
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

            <span className="form__label label-text">
              {errors.email.length > 0 ? errors.email : 'Enter an email.'}
            </span>
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

            <span className="form__label label-text">
              {errors.address.length > 0 ? errors.address : 'Enter an address.'}
            </span>
          </label>
        </div>

        <div className="form__group">
          <label htmlFor="fileUpload">
            <input
              type="file"
              accept="image/*"
              name="fileUpload"
              className="form__upload"
              id="fileUpload"
              placeholder="Upload"
              onChange={this.handleFileChange}
            />

            <span className="form__label-upload label-text">
              {errors.fileUpload.length > 0
                ? errors.fileUpload
                : 'Upload photo.'}
            </span>
          </label>

          {fileUpload && (
            <img
              className="form__preview-source"
              src={fileUpload}
              alt="Selected Preview"
            />
          )}
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
