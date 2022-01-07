import React from "react";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Dashboard from "./pages/Dashboard";
import Financies from './pages/Financies'
import Cars from './pages/Cars'
import Account from "./pages/Account";
import Layout from "./components/Layout";
import Raports from './pages/Raports'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  // Redirect,
} from "react-router-dom";
import 'react-circular-progressbar/dist/styles.css';

const App = () => (
  <div>
    <Router>
      <Switch>
        {/* <Redirect exact from="/" to="/login" /> */}
        <Layout>
          <Route component={Dashboard} exact path="/" />
          <Route component={Financies} path="/financies" />
          <Route component={Raports} path="/raports" />
          <Route component={Cars} path="/cars" />
          <Route component={Account} path="/account" />
        </Layout>
        <Route component={Login} path="/login" exact />
        <Route component={Register} path="/register" />
      </Switch>
    </Router>
  </div>
);

export default App;
