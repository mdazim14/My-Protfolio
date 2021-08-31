import React from 'react';
import { Navbar, Container, Nav } from 'react-bootstrap';

const Navber = () => {
    return (
        <div>
            
            <Navbar className="fw-bold text-warning" collapseOnSelect expand="lg" bg="dark">
                <Container>
                    <Navbar.Brand className="text-info" href="#home">[ MD AZIM ]</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">

                        <Nav className="ms-auto fw-bold">
                            <Nav className="m-3" href="#deets">Home</Nav>
                            <Nav className="m-3" href="#deets">About</Nav>
                            <Nav className="m-3" href="#deets">Project</Nav>
                            <Nav className="m-3" href="#memes">Contact</Nav>
                            <Nav className="m-3" href="#memes">Resume</Nav>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default Navber;