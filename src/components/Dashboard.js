import React, { Component } from 'react';
import requireAuth from './requireAuth';
class Dashboard extends Component {
    render() {
        return <div>Dashboard</div>
    }
}

export default requireAuth(Dashboard);