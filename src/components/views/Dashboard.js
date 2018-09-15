import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';
import requireAuth from '../requireAuth';

class Dashboard extends Component {
    constructor(props) {
        super(props);
        this.setState({
            success: false
        });
    }
    
    render() {
        const email = localStorage.getItem('email') || 'User';

        return (
            <Container fluid data-test="component-dashboard">
                <Row>
                    <Col xs='12'>
                        <h1>Dashboard</h1>
                        <h5>{ email }</h5>
                    </Col>
                </Row>
            </Container>
        );
    }
}

export default requireAuth(Dashboard);