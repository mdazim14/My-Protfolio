import React from 'react';
import { Navbar, Container, Nav } from 'react-bootstrap';

const Navber = () => {
    return (
        <div>
            
            <Navbar className="fs-5 fw-bold text-white" collapseOnSelect expand="lg" bg="dark">
                <Container>
                    <Navbar.Brand className="fs-3 text-warning border-bottom border-warning" href="#home">[ MD AZIM ]</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav " />
                    <Navbar.Collapse id="responsive-navbar-nav ">
                        <Nav className="ms-auto fw-bold">
                            <Nav className=" m-2 border-bottom border-warning p-2" href="#deets">Home</Nav>
                            <Nav className=" m-2 border-bottom border-warning p-2" href="#deets">About</Nav>
                            <Nav className=" m-2 border-bottom border-warning p-2" href="#deets">Project</Nav>
                            <Nav className=" m-2 border-bottom border-warning p-2" href="#memes">Blog</Nav>
                            <Nav className=" m-2 border-bottom border-warning p-2" href="#memes">Contact</Nav>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default Navber;