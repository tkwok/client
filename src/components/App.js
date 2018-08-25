import React, { Fragment } from 'react';
import { Header } from './index';

export default function App ({ children }) {
    return (
        <Fragment>
            <Header />
            { children }
        </Fragment>
    );
}