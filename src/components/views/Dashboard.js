import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';
import requireAuth from '../requireAuth';
import { geoMercator, geoPath } from 'd3-geo';
import worlddata from '../../data/world';

class Dashboard extends Component {    
    render() {
        const email = localStorage.getItem('email') || 'User';

        const projection = geoMercator();
        const pathGenerator = geoPath().projection(projection);
        const countries = worlddata.features
           .map((d,i) => <path
           key={'path' + i}
           d={pathGenerator(d)}
           className='countries'/>);

        return (
            <Container fluid data-test="component-dashboard">
            <Row className="header-image-dashboard center color-white">
                <Col>
                   <h1><b>Dashboard</b></h1>
                   <h2>{ email }</h2>
                </Col>
            </Row>
                <Row>
                    <Col xs='12'>
                        <svg style={{width: '100%', height:'800px'}} >{countries}</svg>
                    </Col>
                </Row>
            </Container>
        );
    }
}

export default requireAuth(Dashboard);