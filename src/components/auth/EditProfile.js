import React, { Component } from 'react';
import { reduxForm, Field } from 'redux-form';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { Button, Container, Row, Col } from 'reactstrap';

import * as actions from '../../actions';

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
                <Row>
                    <Col xs="12">
                        <h1>Edit Profile</h1>
                        <form onSubmit={handleSubmit(this.onSubmit)}>
                            <fieldset>
                                <label>Full name</label>
                                <Field 
                                    name="name"
                                    type="text"
                                    component="input"
                                    autoComplete="none"
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
        )
    }
}

function mapStateToProps(state) {
    return { errorMessage: state.auth.errorMessage };
}

export default compose(
    connect(mapStateToProps, actions),
    reduxForm({ form: 'editprofile' })
)(EditProfile);