import React from 'react';
import { Container, Image, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Icon from './Icon';



const Header = () => {
    return (

        <>

            <Navbar bg="light" variant="light">
                <Container>
                    <Navbar.Brand as={Link} to={"/home"} className="fs-2 fw-bolder text-primary"> <Image src="https://tour.com.bd/uploads/global/logo.png" rounded="true" width="150px"></Image></Navbar.Brand>
                    <Nav className="ms-auto ">
                        <Nav.Link as={Link} to={"/home"} className="px-3 fs-5 text-black" ><i className="fas fa-home"></i> Home</Nav.Link>
                        <Nav.Link as={Link} to={"/tour"} className="px-3 fs-5 text-black" ><i className="fas fa-suitcase-rolling"></i> TOURS</Nav.Link>
                        <Nav.Link as={Link} to={"/hotel"} className="px-3 fs-5 text-black" >
                            <i className="fas fa-hotel"></i> HOTELS</Nav.Link>
                        <Nav.Link as={Link} to={"/offer"} className="px-3 fs-5 text-black" >OFFERS</Nav.Link>
                        <Nav.Link as={Link} to={"/contact"} className="px-4 fs-5 text-black" >Contact</Nav.Link>

                        <Icon></Icon>

                    </Nav>

                </Container>

            </Navbar>
        </>


    );
};

export default Header;