import React from 'react';
import { Switch } from 'react-router';
import { Route, Redirect } from 'react-router-dom';

import Dashboard from 'root/dashboard/dashboard';
import BillingCycle from 'root/billingcycle/billingcycle';

export default props => (
  <Switch>
    <Route exact path="/" component={Dashboard} />
    <Route path="/billingcycle" component={BillingCycle} />
    <Redirect from="*" to="/" />
  </Switch>
);
