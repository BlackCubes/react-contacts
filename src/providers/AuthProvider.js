import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import PropTypes from 'prop-types';

import AuthContext from '../context/AuthContext';

import * as regex from '../utils/regex';

const AuthProvider = ({ children }) => {
  const [loggedIn, setLoggedIn] = useState(null);
  const history = useHistory();

  const login = (username, password) => {
    let valid = true;

    if (!password) valid = false;
    else if (!regex.regexPass.test(password)) valid = false;
    else valid = true;

    if (!username) valid = false;
    else if (username.length < 3) valid = false;
    else if (username.length > 9) valid = false;
    else if (!regex.regexUsername.test(username)) valid = false;
    else valid = true;

    console.log(valid, username, password);

    if (valid) {
      setLoggedIn(username);
      history.push('/');
    }
  };

  const logout = () => {
    setLoggedIn(null);
    history.push('/login');
  };

  if (!loggedIn) history.push('/login');
  else if (loggedIn) history.push('/');

  return (
    <AuthContext.Provider value={{ loggedIn, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

AuthProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default AuthProvider;
