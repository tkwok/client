import React from 'react';
import { Container, Row, Col } from 'reactstrap';

export default function Welcome () {
    return (
        <Container fluid data-test='component-welcome'>
            <Row>
                <Col>
                    <h3>Welcome to Client</h3>
                </Col>
            </Row>
        </Container>
    );
}