import React, {createContext, ReactNode, useEffect, useState} from 'react';
import auth, {FirebaseAuthTypes} from '@react-native-firebase/auth';

export const UserContext = createContext<
  FirebaseAuthTypes.User | null | undefined
>(null);

export const UserProvider: React.FC<{children: ReactNode}> = ({children}) => {
  const [currentUser, setCurrentUser] =
    useState<FirebaseAuthTypes.User | null>();

  useEffect(() => {
    return auth().onAuthStateChanged(authUser => {
      setCurrentUser(authUser);
    });
  }, []);

  return (
    <UserContext.Provider value={currentUser}>{children}</UserContext.Provider>
  );
};
