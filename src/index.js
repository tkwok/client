import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import reduxThunk from 'redux-thunk';
import 'bootstrap/dist/css/bootstrap.min.css';

import reducers from './reducers';

import { App, Welcome, Dashboard } from './components';
import { Signup, Signout, Signin } from './components/auth';

const store = createStore(
  reducers,
    { 
        auth: { authenticated: localStorage.getItem('user') } 
    },
  applyMiddleware(reduxThunk)  
);

ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter>
            <App>
                <Route exact path="/" component={Welcome} />
                <Route path="/signup" component={Signup} />
                <Route path="/dashboard" component={Dashboard} />
                <Route path="/signout" component={Signout} />
                <Route path="/signin" component={Signin} />
            </App> 
        </BrowserRouter>
    </Provider>,
    document.getElementById('root')
);
