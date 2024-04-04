import React from "react";
import AppRoutes from "./AppRoutes";
import AuthentificationProvider from "./context/AuthentificationProvider";

const App = () => {
  return (
    <AuthentificationProvider>
      <AppRoutes />
    </AuthentificationProvider>
  );
};

export default App;
