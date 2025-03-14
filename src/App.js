// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import LoginPage from 'loginpage.js/pages/LoginPage';
import RegisterPage from 'registrationpage.js/pages/RegisterPage';
import ProfilePage from 'profilepage.js/pages/ProfilePage';

const App = () => {
  return (
    <Router>
      <div>
        <h1>My E-Commerce App</h1>
        <Switch>
          <Route path="/login" component={LoginPage} />
          <Route path="/register" component={RegisterPage} />
          <Route path="/profile" component={ProfilePage} />
        </Switch>
      </div>
    </Router>
  );
};

export default App;
