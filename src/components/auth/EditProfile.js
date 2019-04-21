import React, { Component } from 'react';
import { reduxForm, Field } from 'redux-form';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { Button, Container, Row, Col } from 'reactstrap';

import * as actions from '../../actions';

import Hero from '../common/Hero';

class EditProfile extends Component {
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
                    <Col xs="12">
                        <h1>Edit Profile</h1>
                        <form onSubmit={handleSubmit(this.onSubmit)}>
                            <fieldset>
                                <label>Display name</label>
                                <Field 
                                    name="name"
                                    type="text"
                                    component="input"
                                    autoComplete="none"
                                />
                                <label>Phone number</label>
                                <Field 
                                    name="phone"
                                    type="text"
                                    component="input"
                                    autoComplete="none"
                                />
                            </fieldset>
                            <div>
                                { this.props.errorMessage }
                            </div>
                            <Button color="primary">Save profile</Button>
                        </form>
                    </Col>
                </Row>
            </Container>
        )
    }
}

/**
 * Map State to Props function for Redux
 * @param {object} state 
 * @returns {object} errorMessage
 */
function mapStateToProps(state) {
    return { errorMessage: state.auth.errorMessage };
}

export default compose(
    connect(mapStateToProps, actions),
    reduxForm({ form: 'editprofile' })
)(EditProfile);