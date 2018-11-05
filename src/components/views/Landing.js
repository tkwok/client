import React from 'react';
import { Container, Row, Col } from 'reactstrap';

export default function Welcome () {
    return (
        <Container fluid data-test='component-welcome'>
            <Row className="header-image center color-white">
                <Col>
                   <h1><b>Welcome to Client</b></h1>
                   <h2>We Welcome You</h2>
                </Col>
            </Row>
            <Row>
                <Col>
                    <h3>Client Content Here</h3>
                </Col>
            </Row>
        </Container>
    );
}