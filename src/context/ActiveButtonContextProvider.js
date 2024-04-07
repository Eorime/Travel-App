import React, { useContext, useState } from "react";
import { createContext } from "react";

const ActiveButtonContext = createContext();

export const useActiveButton = () => {
  return useContext(ActiveButtonContext);
};

const ActiveButtonContextProvider = ({ children }) => {
  const [activeButton, setActiveButton] = useState(null);

  const setActiveButtonId = (buttonId) => {
    setActiveButton(buttonId);
  };

  return (
    <ActiveButtonContext.Provider value={{ activeButton, setActiveButtonId }}>
      {children}
    </ActiveButtonContext.Provider>
  );
};

export default ActiveButtonContextProvider;
