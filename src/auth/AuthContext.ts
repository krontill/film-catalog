import { User } from '../types/User';
import * as React from 'react';

interface AuthContextType {
  user: User | null;
  signin: (user: User, callback: VoidFunction) => void;
  signout: (callback: VoidFunction) => void;
}

export const AuthContext = React.createContext<AuthContextType | null>(null);
