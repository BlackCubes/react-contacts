import { useContext } from 'react';

import AuthContext from '../context/AuthContext';
import ContactContext from '../context/ContactContext';

export const useAuthContext = () => useContext(AuthContext);
export const useContactContext = () => useContext(ContactContext);
