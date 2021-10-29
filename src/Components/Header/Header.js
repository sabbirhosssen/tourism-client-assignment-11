import React, { useState } from 'react';
import { Container, Image, Nav, Navbar, Offcanvas } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Icon from './Icon';



const Header = () => {

    //contact click
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (

        <Container fluid>

            <Navbar collapseOnSelect expand="lg" bg="info" variant="dark">
                <Container>
                    <Navbar.Brand as={Link} to={"/home"} className="fs-2 fw-bolder text-primary"> <Image src="https://tour.com.bd/uploads/global/logo.png" rounded="true" width="150px"></Image></Navbar.Brand>

                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse className="justify-content-end">
                        <Nav>
                            <Nav.Link as={Link} to={"/home"} className="px-3 fs-5 text-black" ><i className="fas fa-home"></i> Home</Nav.Link>
                            <Nav.Link as={Link} to={"/tour"} className="px-3 fs-5 text-black" ><i className="fas fa-suitcase-rolling"></i> TOURS</Nav.Link>
                            <Nav.Link as={Link} to={"/hotel"} className="px-3 fs-5 text-black" >
                                <i className="fas fa-hotel"></i> HOTELS</Nav.Link>
                            <Nav.Link as={Link} to={"/offer"} className="px-3 fs-5 text-black" >OFFERS</Nav.Link>
                            <Nav.Link className=" fs-5 text-black " >
                                <button className="border-0 bg-transparent" onClick={handleShow} > CONTACT</button>
                            </Nav.Link>
                        </Nav>

                        <Nav>
                            <Nav.Link href="#deets" className="text-dark">Log out</Nav.Link>
                            <Icon></Icon>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>





            <Offcanvas show={show} onHide={handleClose}>
                <Offcanvas.Header closeButton>
                    <Offcanvas.Title className="fs-2">Contact </Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body>
                    Some text as placeholder. In real life you can have the elements you
                    have chosen. Like, text, images, lists, etc.
                </Offcanvas.Body>
            </Offcanvas>
        </Container>


    );
};

export default Header;

