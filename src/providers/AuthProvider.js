import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import PropTypes from 'prop-types';

import AuthContext from '../context/AuthContext';

import loginAPI from '../utils/login';
// import * as regex from '../utils/regex';

const AuthProvider = ({ children }) => {
  const [loggedIn, setLoggedIn] = useState(null);
  const history = useHistory();

  const login = async (usernameInput, passwordInput) => {
    const { username, password } = await loginAPI();

    console.log(username, password);

    if (usernameInput === username && passwordInput === password)
      setLoggedIn(username);
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
