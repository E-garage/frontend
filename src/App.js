import React from 'react';
import Login from './pages/Login';
import Register from './pages/Register';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App() {
  return (
    <div>
      <Router>
        <Switch>
          <Route component={Login} path="/" exact />
          <Route component={Register} path="/register" />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
