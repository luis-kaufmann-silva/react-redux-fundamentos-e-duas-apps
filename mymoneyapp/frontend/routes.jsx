import React from 'react';
import { BrowserRouter, Route, Swich, Redirect } from 'react-router-dom';

import Dashbaord from 'root/dashboard/dashboard';
import BillingCycle from 'root/billing-cycle/billingcycle';
console.log(Swich);
export default props => (
  <BrowserRouter>
    <div>
      <Route path="/" component={Dashbaord} />
      <Route path="/billing-cycle" component={BillingCycle} />
    </div>
  </BrowserRouter>
);
