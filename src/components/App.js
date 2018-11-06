import React, { Fragment } from 'react';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import reduxThunk from 'redux-thunk';
import reducers from '../reducers';

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
                <Header />
                { children }
                <Footer />
            </Fragment>
        </Provider>
    );
}