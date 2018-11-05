import React, { Component } from 'react';
import { Container, Row, Col, Button } from 'reactstrap';
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
                <Row>
                    <Col xs='12'>
                        <h1>Dashboard</h1>
                        <h5>{ email }</h5>
                        <Button color="danger">Click Me</Button>
                        <svg width={500} height={500}>{countries}</svg>
                    </Col>
                </Row>
            </Container>
        );
    }
}

export default requireAuth(Dashboard);