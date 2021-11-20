import React from "react";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Dashboard from "./pages/Dashboard";
import Family from "./pages/Family";
import Layout from "./components/Layout";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  // Redirect,
} from "react-router-dom";

const App = () => (
  <div>
    <Router>
      <Switch>
        {/* <Redirect exact from="/" to="/login" /> */}
        <Layout>
          <Route component={Dashboard} exact path="/" />
          <Route component={Family} path="/family-sharing" />
        </Layout>
        <Route component={Login} path="/login" exact />
        <Route component={Register} path="/register" />
      </Switch>
    </Router>
  </div>
);

export default App;
