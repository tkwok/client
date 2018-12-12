import React, { Component, Fragment } from 'react';
import { Container, Row, Col, InputGroup, InputGroupAddon, Input, Button } from 'reactstrap';
import Draggable from 'react-draggable';

import requireAuth from '../requireAuth';
import image from '../../assets/img0.jpg';

class ShowImage extends Component {
    constructor(props) {
        super(props);
        this.state = { value: '' };
    
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    
    handleChange(event) {
        this.setState({value: event.target.value});
    }

    handleSubmit(event) {
        event.preventDefault();
    }

    eventLogger = (e, data) => {
        console.log('Event: ', e);
        console.log('Data: ', data);
    };

    render() {
        return (
            <Container fluid data-test='component-welcome'>
                <Row className="header-image center color-white">
                    <Col>
                    <h1><b>Show Image</b></h1>
                    <h2>突っ込み</h2>
                    </Col>
                </Row>
                <Row>
                    <Col md={4}>
                        <form onSubmit={this.handleSubmit}>
                            <InputGroup>
                                <InputGroupAddon addonType="prepend">突っ込み</InputGroupAddon>
                                    <Input 
                                        placeholder="Enter message" 
                                        type="text" 
                                        value={this.state.value} 
                                        onChange={this.handleChange} />
                                <InputGroupAddon addonType="append">
                                    <Button color="success">Submit</Button>
                                </InputGroupAddon>
                            </InputGroup>
                        </form>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <Fragment>
                            <img src={image} alt='' />
        
                            <Draggable
                                handle=".handle"
                                defaultPosition={{x: 0, y: 0}}
                                position={null}
                                onStart={this.handleStart}
                                onDrag={this.handleDrag}
                                onStop={this.handleStop}>
                                    <div style={floating}>
                                        <div className="handle">Drag from here</div>
                                        <div>{this.state.value}</div>
                                    </div>
                            </Draggable>
                        </Fragment>
                    </Col>
                </Row>

            </Container>
        )
    }
}


const floating = {

    backgroundColor: '#ffffa5',
    padding: 20,
    border: '1px solid #000',
    cursor: 'move',
    maxWidth: 300,
    opacity: '0.8'
};

export default requireAuth(ShowImage);