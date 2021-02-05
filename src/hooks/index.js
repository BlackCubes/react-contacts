import { useContext } from 'react';

import ContactContext from '../context/ContactContext';

export const useContactContext = () => useContext(ContactContext);
