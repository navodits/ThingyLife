import React from "react";
import { Redirect, Route } from "react-router";
import { getCurrentUser } from "../../services/authService";

const ProtectedRoute = ({ path, component: Component, render, ...rest }) => {
  return (
    <Route
      {...rest}
      path={path}
      render={(props) => {
        if (!getCurrentUser()) {
          return <Redirect to="login" />;
        }
        return Component ? <Component {...props} /> : render(props);
      }}
    />
  );
};

export default ProtectedRoute;
