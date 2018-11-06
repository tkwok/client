import React from 'react';
import { Row, Col } from 'reactstrap';

export default function Hero(props) {
    return (
        <Row className="header-image center color-white">
            <Col>
                <h1><b>Welcome to Client</b></h1>
                <h2>We Welcome You</h2>
            </Col>
        </Row>
    )
}