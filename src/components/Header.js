import React, { Component, Fragment } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem } from 'reactstrap';
  
class Header extends Component {
    constructor(props) {
        super(props);
    
        this.state = {
          isOpen: false
        };
    }

    toggle = () => {
        this.setState({
          isOpen: !this.state.isOpen
        });
    };

    renderLinks() {
        if (this.props.authenticated) {
            return (
                <Fragment>
                    <UncontrolledDropdown nav inNavbar>
                        <DropdownToggle nav caret>
                            Options
                        </DropdownToggle>
                        <DropdownMenu right>
                            <DropdownItem tag={Link} to={'/dashboard'}>
                                Dashboard
                            </DropdownItem>
                            <DropdownItem divider />
                            <DropdownItem tag={Link} to={'/signout'}>
                                Sign out
                            </DropdownItem>
                        </DropdownMenu>
                    </UncontrolledDropdown>
                </Fragment>
            )
        } else {
            return (
                <Fragment>
                    <NavItem>
                        <NavLink tag={Link} to={'/signup'}>Sign up</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink tag={Link} to={'/signin'}>Sign in</NavLink>
                    </NavItem>
                </Fragment>
            )
        }
    }

    render() {
        return (
            <Fragment>
                <Navbar color="dark" dark expand="md">
                    <NavbarBrand tag={Link} to={'/'}>Client</NavbarBrand>
                    <NavbarToggler onClick={this.toggle} />
                    <Collapse isOpen={this.state.isOpen} navbar>
                        <Nav className="ml-auto" navbar>
                            { this.renderLinks() }
                        </Nav>
                    </Collapse>
                </Navbar>
            </Fragment>


        );
    }
}

function mapStateToProps(state) {    
    return { authenticated: state.auth.authenticated };
}

export default connect(mapStateToProps)(Header);