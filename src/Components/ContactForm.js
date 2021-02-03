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
    const errorList = {};

    switch (name) {
      case 'firstName':
        if (value.length < 2)
          errorList.firstName = 'Must be a minimum of 2 characters.';
        else if (value.length > 20)
          errorList.firstName = 'Must be less than or equal to 20 characters.';
        else if (!regex.regexName.test(value))
          errorList.firstName = 'Please use a valid first name';
        else setFirstName(value);
        break;

      case 'lastName':
        if (value.length < 2)
          errorList.lastName = 'Must be a minimum of 2 characters.';
        else if (value.length > 40)
          errorList.lastName = 'Must be less than or equal to 40 characters.';
        else if (!regex.regexName.test(value))
          errorList.lastName = 'Please use a valid last name';
        else setLastName({ value });
        break;

      case 'phoneNumber':
        if (!regex.regexPhone.test(value))
          errorList.phoneNumber = 'Please provide a valid phone number.';
        else setPhoneNumber(value);
        break;

      case 'email':
        if (!regex.regexEmail.test(value))
          errorList.email = 'Please provide a valid email.';
        else setEmail(value);
        break;

      case 'address':
        if (value.length < 3)
          errorList.address = 'Must be a minimum of 3 characters.';
        else if (value.length > 96)
          errorList.address = 'Must be less than or equal to 96 character.';
        else if (!regex.regexAddress.test(value))
          errorList.address = 'Please provide a valid address.';
        else setAddress(value);
        break;

      default:
        break;
    }

    setErrors(errorList);
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

  console.log(errors);

  return (
    <form className="form" onSubmit={handleSubmit} noValidate>
      <div className="form__group">
        <label htmlFor="firstName">
          <input
            type="text"
            name="firstName"
            className="form__input input-text"
            id="firstName"
            value={firstName}
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
            value={lastName}
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
            value={phoneNumber}
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
            value={email}
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
            value={address}
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

// class ContactForm extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       firstName: '',
//       lastName: '',
//       phoneNumber: '',
//       email: '',
//       address: '',
//       fileUpload: null,
//       errors: {
//         firstName: '',
//         lastName: '',
//         phoneNumber: '',
//         email: '',
//         address: '',
//         fileUpload: '',
//       },
//     };

//     this.handleSubmit = this.handleSubmit.bind(this);
//     this.handleChange = this.handleChange.bind(this);
//     this.handleFileChange = this.handleFileChange.bind(this);
//     this.validateForm = this.validateForm.bind(this);
//   }

//   handleSubmit(e) {
//     e.preventDefault();
//     const { onSubmit } = this.props;
//     const { errors, ...inputs } = this.state;

//     if (this.validateForm(errors)) onSubmit(inputs);
//     this.setState({
//       firstName: '',
//       lastName: '',
//       phoneNumber: '',
//       email: '',
//       address: '',
//       fileUpload: null,
//     });
//   }

//   handleChange(e) {
//     e.preventDefault();
//     const { name, value } = e.target;
//     const { errors } = this.state;

//     switch (name) {
//       case 'firstName':
//         if (value.length < 2)
//           errors.firstName = 'Must be a minimum of 2 characters.';
//         else if (value.length > 20)
//           errors.firstName = 'Must be less than or equal to 20 characters.';
//         else if (!regex.regexName.test(value))
//           errors.firstName = 'Please use a valid first name';
//         else errors.firstName = '';
//         break;

//       case 'lastName':
//         if (value.length < 2)
//           errors.lastName = 'Must be a minimum of 2 characters.';
//         else if (value.length > 40)
//           errors.lastName = 'Must be less than or equal to 40 characters.';
//         else if (!regex.regexName.test(value))
//           errors.lastName = 'Please use a valid last name';
//         else errors.lastName = '';
//         break;

//       case 'phoneNumber':
//         if (!regex.regexPhone.test(value))
//           errors.phoneNumber = 'Please provide a valid phone number.';
//         else errors.phoneNumber = '';
//         break;

//       case 'email':
//         if (!regex.regexEmail.test(value))
//           errors.email = 'Please provide a valid email.';
//         else errors.email = '';
//         break;

//       case 'address':
//         if (value.length < 3)
//           errors.address = 'Must be a minimum of 3 characters.';
//         else if (value.length > 96)
//           errors.address = 'Must be less than or equal to 96 character.';
//         else if (!regex.regexAddress.test(value))
//           errors.address = 'Please provide a valid address.';
//         else errors.address = '';
//         break;

//       default:
//         break;
//     }

//     this.setState({ [name]: value, errors });
//   }

//   handleFileChange(e) {
//     if (e.target.files.length) {
//       this.setState({ fileUpload: null });

//       const { errors } = this.state;
//       const file = e.target.files[0];
//       const fileExt = file.type.split('/')[1].toLowerCase();
//       const { size } = file;

//       if (!regex.regexPhoto.test(fileExt))
//         errors.fileUpload = 'Image files must be in jpg, jpeg, or png.';
//       else if (size > 1024000)
//         errors.fileUpload = 'Max upload size of 1MB only.';
//       else errors.fileUpload = '';

//       if (!errors.fileUpload.length) {
//         const reader = new FileReader();
//         reader.readAsDataURL(file);
//         reader.onloadend = () => this.setState({ fileUpload: reader.result });
//       }
//     }
//   }

//   validateForm(errors) {
//     let valid = true;
//     Object.values(errors).forEach((err) => {
//       if (err.length) valid = false;
//     });
//     return valid;
//   }

//   render() {
//     const {
//       firstName,
//       lastName,
//       phoneNumber,
//       email,
//       address,
//       errors,
//       fileUpload,
//     } = this.state;

//     return (
//       <form className="form" onSubmit={this.handleSubmit} noValidate>
//         <div className="form__group">
//           <label htmlFor="firstName">
//             <input
//               type="text"
//               name="firstName"
//               className="form__input input-text"
//               id="firstName"
//               value={firstName}
//               placeholder="First Name"
//               onChange={this.handleChange}
//               noValidate
//             />

//             <span className="form__label label-text">
//               {errors.firstName.length
//                 ? errors.firstName
//                 : 'Enter a first name.'}
//             </span>
//           </label>
//         </div>

//         <div className="form__group">
//           <label htmlFor="lastName">
//             <input
//               type="text"
//               name="lastName"
//               className="form__input input-text"
//               id="lastName"
//               value={lastName}
//               placeholder="Last Name"
//               onChange={this.handleChange}
//               noValidate
//             />

//             <span className="form__label label-text">
//               {errors.lastName.length ? errors.lastName : 'Enter a last name.'}
//             </span>
//           </label>
//         </div>

//         <div className="form__group">
//           <label htmlFor="phoneNumber">
//             <input
//               type="tel"
//               name="phoneNumber"
//               className="form__input input-text"
//               id="phoneNumber"
//               value={phoneNumber}
//               placeholder="Phone Number"
//               onChange={this.handleChange}
//               noValidate
//             />

//             <span className="form__label label-text">
//               {errors.phoneNumber.length
//                 ? errors.phoneNumber
//                 : 'Enter a phone number.'}
//             </span>
//           </label>
//         </div>

//         <div className="form__group">
//           <label htmlFor="email">
//             <input
//               type="email"
//               name="email"
//               className="form__input input-text"
//               id="email"
//               value={email}
//               placeholder="Email"
//               onChange={this.handleChange}
//               noValidate
//             />

//             <span className="form__label label-text">
//               {errors.email.length ? errors.email : 'Enter an email.'}
//             </span>
//           </label>
//         </div>

//         <div className="form__group">
//           <label htmlFor="address">
//             <input
//               type="address"
//               name="address"
//               className="form__input input-text"
//               id="address"
//               value={address}
//               placeholder="Address"
//               onChange={this.handleChange}
//               noValidate
//             />

//             <span className="form__label label-text">
//               {errors.address.length ? errors.address : 'Enter an address.'}
//             </span>
//           </label>
//         </div>

//         <div className="form__group">
//           <label htmlFor="fileUpload">
//             <input
//               type="file"
//               accept="image/*"
//               name="fileUpload"
//               className="form__upload"
//               id="fileUpload"
//               placeholder="Upload"
//               onChange={this.handleFileChange}
//             />

//             <span className="form__label-upload label-text">
//               {errors.fileUpload.length ? errors.fileUpload : 'Upload photo.'}
//             </span>
//           </label>

//           {fileUpload && (
//             <img
//               className="form__preview-source"
//               src={fileUpload}
//               alt="Selected Preview"
//             />
//           )}
//         </div>

//         <div className="form__group">
//           <button className="btn" type="submit">
//             Add Contact
//           </button>
//         </div>
//       </form>
//     );
//   }
// }

ContactForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export default ContactForm;
