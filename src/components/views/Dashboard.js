import React, { Component } from 'react';
import { Container, Row, Col, Button } from 'reactstrap';
import requireAuth from '../requireAuth';

class Dashboard extends Component {    
    render() {
        const email = localStorage.getItem('email') || 'User';

        return (
            <Container fluid data-test="component-dashboard">
                <Row>
                    <Col xs='12'>
                        <h1>Dashboard</h1>
                        <h5>{ email }</h5>
                        <Button color="danger">Click Me</Button>
                    </Col>
                </Row>
            </Container>
        );
    }
}

export default requireAuth(Dashboard);