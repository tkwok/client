import React, { Fragment } from 'react';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import reduxThunk from 'redux-thunk';

import reducers from '../reducers';

import { Helmet } from 'react-helmet';
import { Header, Footer } from './index';

export default function App ({ children }) {
    const store = createStore(
        reducers,
          { 
              auth: { authenticated: localStorage.getItem('user') } 
          },
        applyMiddleware(reduxThunk)  
    );

    return (
        <Provider store={store}>
            <Fragment>
                <Helmet>
                    <meta charSet="utf-8" />
                    <title>Client Home</title>
                    <meta name="description" content={'something'} />
                    <link rel="canonical" href={'something'} />
                </Helmet>
                <Header />
                { children }
                <Footer />
            </Fragment>
        </Provider>
    );
}