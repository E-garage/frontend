import { useEffect } from 'react'
import { useSelector } from 'react-redux'
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
import NotFound from "./pages/NotFound";
import ForgotPassword from "./pages/ForgotPassword";
import ResetPassword from './pages/ResetPassword'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import axios from 'axios';


const App = () => {
  const token = useSelector((state) => state.authReducer.token)
  useEffect(() => {
    if(token)
      axios.defaults.headers.common['Authorization'] = `Bearer ${token}`
    else
      delete axios.defaults.headers.common['Authorization']
  }, [token])
  return (
    <Router>
      <Switch>
        <Route component={Login} path="/login" />
        <Route component={Register} path="/register" />
        <Route component={ForgotPassword} path="/forgot-password" />
        <Route component={ResetPassword} path="/reset-password" />
        <Layout>
          <PrivateRoute component={Dashboard} exact path="/" />
          <PrivateRoute component={Account} path="/account" />
          <PrivateRoute component={Cars} path="/cars" />
          <PrivateRoute component={Family} path="/family-sharing" />
          <PrivateRoute component={Financies} path="/financies" />
          <PrivateRoute component={Raports} path="/raports" />
        </Layout>
        <Route component={NotFound} />
      </Switch>
    </Router> 
  );
};

export default App;