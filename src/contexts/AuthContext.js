import React, { createContext, useContext, useEffect, useState } from 'react';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../firebase';

const AuthContext = createContext();
export const useAuth = () => {
  return useContext(AuthContext);
};

export const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState();

  const signin = (email, password) => {
    signInWithEmailAndPassword(auth, email, password).then((userCredential) => {
      setCurrentUser(userCredential.user);
    });
    // .catch(error => {
    //     const errorCode = error.code;
    //     const errorMessage = error.message;
    // })
  };

  const value = {
    currentUser,
    signin,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
