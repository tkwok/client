import React, { Component, Fragment } from 'react';
import requireAuth from './requireAuth';
class Dashboard extends Component {
    render() {
        return <Fragment>A Dashboard Shows Here</Fragment>
    }
}

export default requireAuth(Dashboard);