import React, { Component } from 'react';
import { reduxForm, Field } from 'redux-form';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { Container, Button, Row, Col } from 'reactstrap';
import * as actions from '../../actions';

import Hero from '../common/Hero';

const required = value => value ? undefined : 'Required';
const maxLength = max => value =>
  value && value.length > max ? `Must be ${max} characters or less` : undefined;
const maxLength15 = maxLength(15);
const emailValidate = value =>
  value && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value) ?
  'Invalid email address' : undefined;

class Signup extends Component {

    onSubmit = (formProps) => {
        this.props.signup(formProps, () => {
            this.props.history.push('/dashboard');
        });
    }

    render() {
        const { handleSubmit } = this.props;

        return (
            <Container fluid>
                <Hero />
                <Row>
                    <Col>
                        <form onSubmit={handleSubmit(this.onSubmit)}>
                            <fieldset>
                                <label>Email</label>
                                <Field 
                                    name="email"
                                    type="text"
                                    autoComplete="none"
                                    validate={emailValidate}
                                />
                            </fieldset>
                            <fieldset>
                                <label>Password</label>
                                <Field 
                                    name="password"
                                    type="password"
                                    validate={[ required, maxLength15 ]}
                                />
                            </fieldset>
                            <div>
                                { this.props.errorMessage }
                            </div>
                            <Button color="primary">Sign Up</Button>
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
    reduxForm({ form: 'signup' })
)(Signup);