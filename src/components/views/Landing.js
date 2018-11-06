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
            <Row className="center">
                <Col>
                    <h3>Some of our offered products</h3>
                </Col>
            </Row>
            <Row>
                <Col className="center">
                    <h4>Column One</h4>
                </Col>
                <Col className="center">
                    <h4>Column Two</h4>
                </Col>
                <Col className="center">
                    <h4>Column Three</h4>
                </Col>
            </Row>
        </Container>
    );
}