import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './Home';
import Waiter from './Waiter';
// import App from "./../App";

const Router = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path='/' component={Home} />
      <Route path='/waiter' component={Waiter} />
    </Switch>
  </BrowserRouter>
);

export default Router;
