import React, { useState } from 'react';

import { useAuthContext } from '../hooks/index';

import * as regex from '../utils/regex';

const LoginForm = () => {
  const [values, setValues] = useState({});
  const [errors, setErrors] = useState({});
  const { login } = useAuthContext();

  const validateForm = (errorList) => {
    let valid = true;
    Object.values(errorList).forEach((err) => {
      if (err.length) valid = false;
    });
    return valid;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm(errors)) login(values.username, values.password);
    setValues({});
  };

  const handleChange = (e) => {
    const { name, value } = e.target;

    switch (name) {
      case 'username':
        if (!value.length)
          setErrors((err) => ({
            ...err,
            [name]: 'Required.',
          }));
        else if (value.length < 3)
          setErrors((err) => ({
            ...err,
            [name]: 'Must be a minimum of 3 characters.',
          }));
        else if (value.length > 9)
          setErrors((err) => ({
            ...err,
            [name]: 'Must be less than or equal to 9 characters.',
          }));
        else if (!regex.regexUsername.test(value))
          setErrors((err) => ({
            ...err,
            [name]:
              'Must use at between 3 and 9 characters with optional underscores and hypens, and all lowercase.',
          }));
        else setErrors((err) => ({ ...err, [name]: '' }));
        break;

      case 'password':
        if (!value.length)
          setErrors((err) => ({
            ...err,
            [name]: 'Required.',
          }));
        else if (value.length < 8)
          setErrors((err) => ({
            ...err,
            [name]: 'Must be a minimum of 8 characters',
          }));
        else if (value.length > 60)
          setErrors((err) => ({
            ...err,
            [name]: 'Must be less than or equal to 60 characters',
          }));
        else if (!regex.regexPass.test(value))
          setErrors((err) => ({
            ...err,
            [name]:
              'Must use at least one number, one special character, and on capital letter between 8 and 60 characters.',
          }));
        else setErrors((err) => ({ ...err, [name]: '' }));
        break;
      default:
        break;
    }

    setValues((val) => ({ ...val, [name]: value }));
  };

  return (
    <form onSubmit={handleSubmit} noValidate>
      <div className="form__group">
        <label htmlFor="username">
          <input
            type="text"
            name="username"
            className="form__input input-text"
            id="username"
            value={values.username || ''}
            placeholder="Username"
            onChange={handleChange}
            noValidate
          />

          <span className="form__label label-text">
            {errors.username ? errors.username : 'Enter username.'}
          </span>
        </label>
      </div>

      <div className="form__group">
        <label htmlFor="password">
          <input
            type="password"
            name="password"
            className="form__input input-text"
            id="password"
            value={values.password || ''}
            placeholder="Password"
            onChange={handleChange}
            noValidate
          />

          <span className="form__label label-text">
            {errors.password ? errors.password : 'Enter password.'}
          </span>
        </label>
      </div>

      <div className="form__group">
        <button className="btn" type="submit">
          Login
        </button>
      </div>
    </form>
  );
};

export default LoginForm;
