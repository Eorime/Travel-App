import React from "react";
import { createContext } from "react";
import { useState } from "react";
import { useContext } from "react";

const AuthentificationContext = createContext();

export const useAuthentification = () => useContext(AuthentificationContext);

const AuthentificationProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  const signUp = (firstName, lastName, email, password) => {
    localStorage.setItem(
      "user",
      JSON.stringify({ firstName, lastName, email, password })
    );
    setUser({ email });
  };

  const signIn = (email, password) => {
    const authorizedUser = JSON.parse(localStorage.getItem("user"));
    if (
      authorizedUser &&
      authorizedUser.email === email &&
      authorizedUser.password === password
    ) {
      setUser({ email });
      return true;
    }
    return false;
  };

  const signOut = () => {
    localStorage.removeItem("user");
    setUser(null);
  };

  return (
    <AuthentificationContext.Provider value={{ user, signUp, signIn, signOut }}>
      {children}
    </AuthentificationContext.Provider>
  );
};

export default AuthentificationProvider;
