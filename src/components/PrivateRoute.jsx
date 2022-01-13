import { Redirect, Route } from "react-router-dom";

const PrivateRoute = ({ component: Component, ...restOfProps }) => {
  const isAuthenticated = localStorage.getItem("token") ? true : false;
  return (
    <Route
      {...restOfProps}
      render={props =>
        isAuthenticated ? <Component {...props} /> : <Redirect to="/login" />
      }
    />
  );
};

export default PrivateRoute;
