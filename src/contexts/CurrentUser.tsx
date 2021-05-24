import React, {
  createContext, ReactNode, useContext, useEffect, useState,
} from 'react';
import authService, { UserAuth } from '../services/AuthService';

const CurrentUserContext = createContext<UserAuth | null>(null);

interface CurrentUserProviderProps {
  children: ReactNode;
}

export function CurrentUserProvider({ children }: CurrentUserProviderProps) {
  const [user, setUser] = useState<UserAuth | null>(authService.storedUser);

  useEffect(() => {
    authService.changeHandler = setUser;
    return () => { authService.changeHandler = null; };
  });

  return (
    <CurrentUserContext.Provider value={user}>
      {children}
    </CurrentUserContext.Provider>
  );
}

export default function useCurrentUser() {
  return useContext(CurrentUserContext);
}