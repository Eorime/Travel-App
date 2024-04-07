import React from "react";
import AppRoutes from "./AppRoutes";
import AuthentificationProvider from "./context/AuthentificationProvider";
import ActiveButtonContextProvider from "./context/ActiveButtonContextProvider";

const App = () => {
  return (
    <AuthentificationProvider>
      <ActiveButtonContextProvider>
        <AppRoutes />
      </ActiveButtonContextProvider>
    </AuthentificationProvider>
  );
};

export default App;
