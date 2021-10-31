import React from 'react';
import { Button, Col, Container, Image, Nav, Row, } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Dubais = () => {
    return (

        <Container fluid>
            <Row className="p-5  bg-info" rounded="true">

                <Col md={6} lg={8} className="p-4">
                    <Image src="https://tour.com.bd/uploads/images/offers/976745_save.jpg" rounded="true" fluid />
                </Col>
                <Col md={6} lg={4} className="text-md-start">
                    <h2> DUBAI SPECIAL PACKAGES</h2>
                    <p>
                        Rate is subject to the prevailing tax and service charge. An additional Tourism Dirham of AED 20 will be applied per bedroom, per night to your bill. For Apartments, the Tourism Dirham charges are: AED 10 per day for Studio <span>....</span>

                    </p>
                    <Button className="px-5 py-2 "><Nav><Nav.Link as={Link} to={"/offer"} className="text-white"> Viw More Offers </Nav.Link></Nav> </Button>
                </Col>
            </Row>
        </Container>



    );
};

export default Dubais;