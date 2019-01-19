import React, { Component } from 'react';
import { reduxForm, Field } from 'redux-form';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { Button, Container, Row, Col } from 'reactstrap';
import * as actions from '../../actions';

import Hero from '../common/Hero';

class Signin extends Component {

    onSubmit = (formProps) => {
        this.props.signin(formProps, () => {
            this.props.history.push('/dashboard');
        });
    }

    render() {
        const { handleSubmit } = this.props;

        return (
            <Container fluid>
                <Hero />
                <Container>
                <Row>        
                    <Col xs="12">  
                        <form onSubmit={handleSubmit(this.onSubmit)}>
                            <fieldset>
                                <label>Email address</label>
                                <Field 
                                    name="email"
                                    type="text"
                                    component="input"
                                    autoComplete="none"
                                />
                            </fieldset>
                            <fieldset>
                                <label>Password</label>
                                <Field 
                                    name="password"
                                    type="password"
                                    component="input"
                                />
                            </fieldset>
                            <div>
                                { this.props.errorMessage }
                            </div>

                            <Row>
                                <Col>
                            <Button color="primary">Sign In</Button>
                            </Col>
                            <Col>
                            <Button color="primary">Clear</Button>
                            </Col>
                            </Row>
                        </form>
                    </Col>
                </Row>
                </Container>
            </Container>
        );
    }
}

function mapStateToProps(state) {
    return { errorMessage: state.auth.errorMessage };
}

export default compose(
    connect(mapStateToProps, actions),
    reduxForm({ form: 'signin' })
)(Signin);