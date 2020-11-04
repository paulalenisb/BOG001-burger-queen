import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './views/Home';
import Waiter from './views/Waiter';
import NotFound from './views/NotFound';

const Router = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/waiter" component={Waiter} />
      <Route component={NotFound} />
    </Switch>
  </BrowserRouter>
);

export default Router;
