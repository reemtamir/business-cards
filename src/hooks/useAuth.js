import { useContext } from 'react';

import { context } from '../AuthContext';

export const useAuth = () => useContext(context);
