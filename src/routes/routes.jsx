import React from 'react';
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom';

import Register from '../pages/Register';
import Admin from '../pages/Admin';
import Master from '../pages/Master';
import User from '../pages/User';

const Routes = ({ user }) => (
  <Router>
    <Route exact path="/" component={Register} />
    {user && user.role === 'admin' && (
      <Route path="/admin" component={Admin} />
    )}
    {user && user.role === 'master' && (
      <Route path="/master" component={Master} />
    )}
    {user && user.role === 'user' && (
      <Route path="/user" component={User} />
    )}
    <Redirect to="/" />
  </Router>
);