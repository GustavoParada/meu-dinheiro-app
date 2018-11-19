import React from 'react'
import { Router, Route, IndexRoute, Redirect, hashHistory } from 'react-router'

import Dashboard from '../dashBoard2/dashboard2'
import BillingCycle from '../billingCycle/billingCycle'
import App from './app'

export default props => (
    <Router history={hashHistory}>
        <Route path='/' component={App}>
            <IndexRoute component={Dashboard} />
            <Route path='billingCycles' component={BillingCycle} />
        </Route>
        <Redirect from='*' to='/' component={Dashboard} />
    </Router>

)