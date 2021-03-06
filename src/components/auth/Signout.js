import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../actions';

import { Container } from 'reactstrap';
import Hero from '../common/Hero';

class Signout extends Component {
    componentDidMount() {
        this.props.signout();
    }
    
    render() {
        return (
            <Container fluid>
                <Hero />
                <div>Logged out. Thank you.</div>
            </Container>
        );
    }
}

export default connect(null, actions)(Signout); 