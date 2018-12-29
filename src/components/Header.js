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
    DropdownItem, 
    Button } from 'reactstrap';
  
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

            const email = localStorage.getItem('email') || 'User';
            return (
                <Fragment>
                    <NavItem>
                        <NavLink tag={Link} to={'/dashboard'}>Dashboard</NavLink>
                    </NavItem>
                    <UncontrolledDropdown nav inNavbar>
                        <DropdownToggle nav caret>
                            { email }
                        </DropdownToggle>
                        <DropdownMenu right>
                            <DropdownItem tag={Link} to={'/editprofile'}>
                                Edit Profile
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
                        <Button className="nav-button" color="danger" tag={Link} to={'/signup'}>Sign up</Button>
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
                <Navbar expand="sm">
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