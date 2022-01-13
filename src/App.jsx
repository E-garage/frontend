import Login from "./pages/Login";
import Register from "./pages/Register";
import Dashboard from "./pages/Dashboard";
import Layout from "./components/Layout";
import Account from "./pages/Account";
import Cars from "./pages/Cars";
import Family from "./pages/Family";
import Financies from "./pages/Financies";
import Raports from "./pages/Raports";
import PrivateRoute from "./components/PrivateRoute";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

const App = () => {
  return (
    <Router>
      <Switch>
        <Route component={Login} path="/login" />
        <Route component={Register} path="/register" />
        <Layout>
          <PrivateRoute component={Dashboard} exact path="/" />
          <PrivateRoute component={Account} path="/account" />
          <PrivateRoute component={Cars} path="/cars" />
          <PrivateRoute component={Family} path="/family-sharing" />
          <PrivateRoute component={Financies} path="/financies" />
          <PrivateRoute component={Raports} path="/raports" />
        </Layout>
      </Switch>
    </Router> 
  );
};

export default App;