import React, { Component } from 'react';
import { reduxForm, Field } from 'redux-form';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { Button, Container, Row, Col } from 'reactstrap';
import Hero from '../common/Hero';

import * as actions from '../../actions';
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
                <Row>        
                    <Col xs="!2">  
                        <form onSubmit={handleSubmit(this.onSubmit)}>
                            <fieldset>
                                <label>Email</label>
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
                            <Button color="primary">Sign In</Button>
                        </form>
                    </Col>
                </Row>
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