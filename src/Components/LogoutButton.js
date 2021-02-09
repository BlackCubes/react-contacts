import React from 'react';
import { useAuthContext } from '../hooks/index';

const LogoutButton = () => {
  const { logout } = useAuthContext();

  return (
    <button type="submit" onClick={logout}>
      Logout
    </button>
  );
};

export default LogoutButton;
