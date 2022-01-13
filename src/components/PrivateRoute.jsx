import { Redirect, Route } from "react-router-dom";
import { connect } from "react-redux";

const PrivateRoute = ({ component: Component, ...restOfProps }) => {

  const isAuthenticated = sessionStorage.getItem('token') ? true : false
  return (
    <Route
      {...restOfProps}
      render={props =>
        isAuthenticated ? <Component {...props} /> : <Redirect to="/login" />
      }
    />
  );
};

const mapStateToProps = state => {
  return { token: state.token };
};

export default connect(mapStateToProps)(PrivateRoute);
