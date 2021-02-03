import React, { useState } from 'react';
import PropTypes from 'prop-types';

import * as regex from '../utils/regex';

const ContactForm = ({ onSubmit }) => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [email, setEmail] = useState('');
  const [address, setAddress] = useState('');
  const [fileUpload, setFileUpload] = useState(null);
  const [values, setValues] = useState({});
  const [errors, setErrors] = useState({});

  const validateForm = (errorList) => {
    let valid = true;
    Object.values(errorList).forEach((err) => {
      if (err.length) valid = false;
    });
    return valid;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const inputs = {
      firstName,
      lastName,
      phoneNumber,
      email,
      address,
      fileUpload,
    };

    if (validateForm(errors)) onSubmit(inputs);
    setFirstName('');
    setLastName('');
    setPhoneNumber('');
    setEmail('');
    setAddress('');
    setFileUpload('');
  };

  const handleChange = (e) => {
    e.preventDefault();
    const { name, value } = e.target;

    switch (name) {
      case 'firstName':
        if (value.length < 2)
          setErrors((err) => ({
            ...err,
            [name]: 'Must be a minimum of 2 characters',
          }));
        else if (value.length > 20)
          setErrors((err) => ({
            ...err,
            [name]: 'Must be less than or equal to 20 characters.',
          }));
        else if (!regex.regexName.test(value))
          setErrors((err) => ({
            ...err,
            [name]: 'Please use a valid first name.',
          }));
        else setValues((val) => ({ ...val, [name]: value }));
        break;

      case 'lastName':
        if (value.length < 2)
          setErrors((err) => ({
            ...err,
            [name]: 'Must be a minimum of 2 characters',
          }));
        else if (value.length > 40)
          setErrors((err) => ({
            ...err,
            [name]: 'Must be less than or equal to 40 characters.',
          }));
        else if (!regex.regexName.test(value))
          setErrors((err) => ({
            ...err,
            [name]: 'Please use a valid last name.',
          }));
        else setValues((val) => ({ ...val, [name]: value }));
        break;

      case 'phoneNumber':
        if (!regex.regexPhone.test(value))
          setErrors((err) => ({
            ...err,
            [name]: 'Please use a valid phone number.',
          }));
        else setValues((val) => ({ ...val, [name]: value }));
        break;

      case 'email':
        if (!regex.regexEmail.test(value))
          setErrors((err) => ({
            ...err,
            [name]: 'Please provide a valid email.',
          }));
        else setValues((val) => ({ ...val, [name]: value }));
        break;

      case 'address':
        if (value.length < 3)
          setErrors((err) => ({
            ...err,
            [name]: 'Must be a minimum of 3 characters',
          }));
        else if (value.length > 96)
          setErrors((err) => ({
            ...err,
            [name]: 'Must be less than or equal to 96 characters.',
          }));
        else if (!regex.regexAddress.test(value))
          setErrors((err) => ({
            ...err,
            [name]: 'Please use a valid address.',
          }));
        else setValues((val) => ({ ...val, [name]: value }));
        break;

      default:
        break;
    }
  };

  const handleFileChange = (e) => {
    if (e.targer.files.length) {
      setFileUpload(null);

      const errorList = {};
      const file = e.target.files[0];
      const fileExt = file.type.split('/')[1].toLowerCase();
      const { size } = file;

      if (!regex.regexPhoto.test(fileExt))
        errorList.fileUpload = 'Image files must be in jpg, jpeg, or png.';
      else if (size > 1024000)
        errorList.fileUpload = 'Max upload size of 1MB only.';

      if (!errors.fileUpload.length) {
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onloadend = () => setFileUpload(reader.result);
      }
    }
  };

  console.log('values: ', values);
  console.log('errors: ', errors);

  return (
    <form className="form" onSubmit={handleSubmit} noValidate>
      <div className="form__group">
        <label htmlFor="firstName">
          <input
            type="text"
            name="firstName"
            className="form__input input-text"
            id="firstName"
            value={values.firstName || ''}
            placeholder="First Name"
            onChange={handleChange}
            noValidate
          />

          <span className="form__label label-text">
            {errors.firstName ? errors.firstName : 'Enter a first name.'}
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
            value={values.lastName || ''}
            placeholder="Last Name"
            onChange={handleChange}
            noValidate
          />

          <span className="form__label label-text">
            {errors.lastName ? errors.lastName : 'Enter a last name.'}
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
            value={values.phoneNumber || ''}
            placeholder="Phone Number"
            onChange={handleChange}
            noValidate
          />

          <span className="form__label label-text">
            {errors.phoneNumber ? errors.phoneNumber : 'Enter a phone number.'}
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
            value={values.email || ''}
            placeholder="Email"
            onChange={handleChange}
            noValidate
          />

          <span className="form__label label-text">
            {errors.email ? errors.email : 'Enter an email.'}
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
            value={values.address || ''}
            placeholder="Address"
            onChange={handleChange}
            noValidate
          />

          <span className="form__label label-text">
            {errors.address ? errors.address : 'Enter an address.'}
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
            onChange={handleFileChange}
          />

          <span className="form__label-upload label-text">
            {errors.fileUpload ? errors.fileUpload : 'Upload photo.'}
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
};

ContactForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export default ContactForm;
