import React, { useState } from 'react';

import { useAuthContext } from '../hooks/index';

const LoginForm = () => {
  const [values, setValues] = useState({});
  const { loggedIn, login, logout } = useAuthContext();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!loggedIn) login(values.username, values.password);
    else logout();
  };

  const handleChange = (e) => {
    const { name, value } = e.target;

    setValues((val) => ({ ...val, [name]: value }));
  };

  return (
    <form onSubmit={handleSubmit} noValidate>
      {!loggedIn && (
        <>
          <label htmlFor="username">
            <input
              type="text"
              name="username"
              id="username"
              value={values.username || ''}
              placeholder="Username"
              onChange={handleChange}
              noValidate
            />

            <span>Enter username.</span>
          </label>

          <label htmlFor="password">
            <input
              type="password"
              name="password"
              id="password"
              value={values.password || ''}
              placeholder="Password"
              onChange={handleChange}
              noValidate
            />

            <span>Enter password.</span>
          </label>
        </>
      )}
      {/* <label htmlFor="username">
        <input
          type="text"
          name="username"
          id="username"
          value={values.username || ''}
          placeholder="Username"
          onChange={handleChange}
          noValidate
        />

        <span>Enter username.</span>
      </label>

      <label htmlFor="password">
        <input
          type="password"
          name="password"
          id="password"
          value={values.password || ''}
          placeholder="Password"
          onChange={handleChange}
          noValidate
        />

        <span>Enter password.</span>
      </label> */}

      <button type="submit">{!loggedIn ? 'Login' : 'Logout'}</button>
    </form>
  );
};

export default LoginForm;
