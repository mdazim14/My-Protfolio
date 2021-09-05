import React from 'react';
import { Navbar, Container, Nav } from 'react-bootstrap';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";

const Navber = () => {
    return (
        <div>
            
            <Navbar className="fs-5 fw-bold text-white" collapseOnSelect expand="lg" bg="dark">
                <Container>
                    <Navbar.Brand className="fs-3 text-warning border-bottom border-warning" href="/">[ MD AZIM ]</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav " />
                    <Navbar.Collapse id="responsive-navbar-nav ">
                        <Nav className="ms-auto fw-bold">
                            <a className=" m-2 border-bottom border-warning p-2" href="/">Home</a>
                            <a className=" m-2 border-bottom border-warning p-2" href="/about">About</a>
                            <a className=" m-2 border-bottom border-warning p-2" href="/project">Project</a>
                            <a className=" m-2 border-bottom border-warning p-2" href="/blog">Blog</a>
                            <a className=" m-2 border-bottom border-warning p-2" href="/contact">Contact</a>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default Navber;