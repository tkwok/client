import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

import { App, Welcome, Dashboard } from './components';
import { Signup, Signout, Signin } from './components/auth';

ReactDOM.render(
    <BrowserRouter>
        <App>
            <Route exact path="/" component={Welcome} />
            <Route path="/signup" component={Signup} />
            <Route path="/dashboard" component={Dashboard} />
            <Route path="/signout" component={Signout} />
            <Route path="/signin" component={Signin} />
        </App>
    </BrowserRouter>,
    document.getElementById('root')
);
