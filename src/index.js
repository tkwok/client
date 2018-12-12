import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route } from 'react-router-dom';

import { App } from './components';

import { Landing, Dashboard, ShowImage } from './components/views';
import { Signup, Signout, Signin, EditProfile } from './components/auth';

import routesData from './constants/routes';

import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/css/main.css';

const componentRegistry = {
    'Landing': Landing,
    'Signup': Signup,
    'Signin': Signin,
    'EditProfile': EditProfile,
    'Signout': Signout,
    'Dashboard': Dashboard,
    'ShowImage': ShowImage
};

const Routes = 
    routesData ? 
        routesData.map((route) => {
            return (
                <Route
                    key={route.id} 
                    exact={route.exact}
                    path={route.path}
                    component={componentRegistry[route.component]} />
            )
        })
    : null

ReactDOM.render(
    <BrowserRouter>
        <App>
            { Routes }
        </App>
    </BrowserRouter>,
    document.getElementById('root')
);
