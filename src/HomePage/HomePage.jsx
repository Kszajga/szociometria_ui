import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import isEmpty from 'lodash/isEmpty';
import { userActions } from './../_actions/user.actions';

import { Navbar, Nav, NavDropdown, Form, FormControl, Button, Table } from 'react-bootstrap';

class HomePage extends React.Component {
    componentDidMount() {
        this.props.dispatch(userActions.getAll());
    }

    render() {
        const { user, users } = this.props;
        return (
            <Navbar bg="light">
                <Navbar.Brand href="#">Szociometria</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">
                        <Nav.Link href="#">Szia {user.name}!</Nav.Link> 
                        <Nav.Link href="/questionnaires">Kérdőívek</Nav.Link>
                        <Nav.Link href="/schools">Iskolák</Nav.Link>
                        <Nav.Link href="/classes">Osztályok</Nav.Link>
                        <Nav.Link href="/students">Tanulók</Nav.Link>
                        {/* <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                            <NavDropdown.Item>Action</NavDropdown.Item>
                            <NavDropdown.Item>Another action</NavDropdown.Item>
                            <NavDropdown.Item>Something</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                        </NavDropdown> */}
                    </Nav>
                    {/* <Form inline>
                        <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                        <Button variant="outline-success">Search</Button>
                    </Form> */}
                </Navbar.Collapse>
            </Navbar>

            // <div className="col-md-6 col-md-offset-3">

            //     {users.loading && <em>Loading users...</em>}
            //     {users.errors && users.errors.map((error, index) => <span className="text-danger">ERROR: {error.message}</span>)}
            //     {users.admins &&
            //         <ul>
            //             {users.admins.map((user, index) =>
            //                 <li key={user.id}>
            //                     {user.name}
            //                 </li>
            //             )}
            //         </ul>
            //     }
            //     <p>
            //         <Link to="/login">Logout</Link>
            //     </p>
            // </div>
        );
    }
}

function mapStateToProps(state) {
    const { users, authentication } = state;
    console.log("TCL: mapStateToProps -> users", users)

    const { user } = authentication;
    return {
        user,
        users
    };
}

const connectedHomePage = connect(mapStateToProps)(HomePage);
export { connectedHomePage as HomePage };