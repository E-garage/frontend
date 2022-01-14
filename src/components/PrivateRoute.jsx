import { Redirect, Route } from "react-router-dom";
import { useSelector } from 'react-redux'

const PrivateRoute = ({ component: Component, ...restOfProps }) => {
  const token = useSelector((state) => state.authReducer.token)
  return (
    <Route
      {...restOfProps}
      render={props =>
        token ? <Component {...props} /> : <Redirect to="/login" />
      }
    />
  );
};

export default PrivateRoute;
