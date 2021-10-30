import React, { useState } from 'react';
import { Container, Image, Nav, Navbar, Button, Offcanvas } from 'react-bootstrap';
import { Link } from 'react-router-dom';
// import useAuth from '../../Hooks/useAuth';
import Icon from './Icon';



const Header = () => {
    // const { user, logOut } = useAuth();

    //contact click
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    // console.log(user);

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
                            <Nav className=" fs-5 text-black " >
                                <button className="border-0 bg-transparent" onClick={handleShow} > CONTACT</button>
                            </Nav>
                        </Nav>

                        <Button variant="light" >Logout</Button> :
                        <Icon></Icon>




                    </Navbar.Collapse>
                </Container>
            </Navbar>





            <Offcanvas show={show} onHide={handleClose}>
                <Offcanvas.Header closeButton>
                    <Offcanvas.Title className="fs-2">Contact </Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body>
                    <Offcanvas.Title><h3>Contact Admissions Tour</h3></Offcanvas.Title>
                    <Image src="https://tour.com.bd/uploads/global/logo.png" rounded="true" width="150px" className="justify-content-end"></Image>
                    <Offcanvas.Body>
                        <h3>Tour Management Chairmen</h3>
                        <h5>Dr. Sanjida happy Blvd.</h5>
                        <div>Dhaka Beach, FL  32114-3099</div>
                        <div>Phone:  +3864812600 or +18004480228</div>
                        <div> Fax: ++3864812601</div>
                        <div>Email: Tourbdhappytravel@gmail.com</div>
                    </Offcanvas.Body>
                    <Offcanvas.Body>
                        <h3>Tour Management Vais Chairman.</h3>
                        <h5> Dr. Sabbir Hossen Blvd.</h5>
                        <div> Dhaka Beach, Dhanmondi, FL  32114-3099</div>
                        <div>Phone:  +86468812600 or +004123480228</div>
                        <div>Fax: ++3864812601</div>
                        <div>Email: Tourbdhappytravel@gmail.com</div>
                    </Offcanvas.Body>
                </Offcanvas.Body>
            </Offcanvas>
        </Container>


    );
};

export default Header;

