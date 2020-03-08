import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { Link } from "react-router-dom";

class NavBar extends React.Component {

    render() {
        return (
            <Navbar bg="light">
                <Navbar.Brand href="#">Szociometria</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">
                        <Nav.Link>Szia!</Nav.Link>
                        {/* <Link to='/questionnaires' >Circle</Link> */}
                        <Nav.Link href="/questionnaires">Kérdőívek</Nav.Link>
                        <Nav.Link href="/schools">Iskolák</Nav.Link>
                        <Nav.Link href="/classes">Osztályok</Nav.Link>
                        <Nav.Link href="/students">Tanulók</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        )
    }
}

export { NavBar };