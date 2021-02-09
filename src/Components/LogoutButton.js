import React from 'react';

import { useAuthContext } from '../hooks/index';

const LogoutButton = () => {
  const { loggedIn, logout } = useAuthContext();

  return !loggedIn ? (
    <></>
  ) : (
    <button type="submit" onClick={logout}>
      Logout
    </button>
  );
};

export default LogoutButton;
