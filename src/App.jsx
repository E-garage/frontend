import React from "react";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Dashboard from "./pages/Dashboard"
import {
  BrowserRouter as Router,
  Switch,
  Route,
  // Redirect,
} from "react-router-dom";

const App = () => {
  return (
    <div>
      <Router>
        <Switch>
          {/* <Redirect exact from="/" to="/login" /> */}
          <Route component={Dashboard} exact path="/" />
          <Route component={Login} path="/login" exact />
          <Route component={Register} path="/register" />
        </Switch>
      </Router>
    </div>
  );
};

export default App;
