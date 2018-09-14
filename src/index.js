import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route } from 'react-router-dom';

import { App } from './components';

import { Welcome, Dashboard } from './components/views';

import { Signup, Signout, Signin, EditProfile } from './components/auth';

import 'bootstrap/dist/css/bootstrap.min.css';

ReactDOM.render(
    <BrowserRouter>
        <App>
            <Route exact path="/" component={Welcome} />
            <Route path="/signup" component={Signup} />
            <Route path="/dashboard" component={Dashboard} />
            <Route path="/signout" component={Signout} />
            <Route path="/signin" component={Signin} />
            <Route path="/editprofile" component={EditProfile} />
        </App>
    </BrowserRouter>,
    document.getElementById('root')
);
