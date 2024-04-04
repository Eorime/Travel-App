import React from "react";
import { Route, Navigate } from "react-router-dom";
import { routes } from "../../constants/routes";

const PrivateRoute = ({ component: Component, ...rest }) => {
  const isAuthenticated = localStorage.getItem("isSignedIn");

  return (
    <Route
      {...rest}
      render={(props) =>
        isAuthenticated ? (
          <Component {...props} />
        ) : (
          <Navigate to={routes.signUp} />
        )
      }
    />
  );
};

export default PrivateRoute;
