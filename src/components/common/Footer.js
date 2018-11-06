import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';

class Footer extends Component {

    render() {
        return (
            <Container fluid className="footer">
                <Row>
                    <Col xs={12} lg={4} className="center-vertical">
                      <ul>
                        <li>Products & Services</li>
                        <li><a href="">Core Products</a></li>
                        <li><a href="">Why Us</a></li>
                        <li><a href="">Case Studies</a></li>
                      </ul>
                    </Col>
                    <Col xs={12} lg={4} className="center-vertical">
                      <ul>
                        <li>Resources</li>
                        <li><a href="">Events</a></li>
                        <li><a href="">Blog</a></li>
                      </ul>
                    </Col>
                    <Col xs={12} lg={4} className="center-vertical">
                      <ul>
                        <li>Company</li>
                        <li><a href="">About Us</a></li>
                        <li><a href="">Leadership</a></li>
                        <li><a href="">Meet The Team</a></li>
                        <li><a href="">Careers</a></li>
                        <li><a href="">Contact</a></li>
                      </ul>
                    </Col>
                </Row>
                <Row>
                    <Col xs={12} className="center">
                        <ul>
                          <li>
                            <b>Copyright &#169; 2018 Client</b>
                          </li>
                        </ul>
                    </Col>
                </Row>
            </Container>
        );
    }
}

export default Footer;