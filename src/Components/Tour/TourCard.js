import React from 'react';
import { Card, Col, Row, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const TourCard = ({ tour }) => {
    const { img, title, body } = tour
    return (



        <Col >

            <Card>
                <Row className="bg-info rounded ">
                    <Col md={6} className="ps-0">
                        <Card.Img src={img} variant="top rounded mx-0" align="start" height="195px" />
                    </Col>
                    <Col md={6} >
                        <Card.Body>
                            <Card.Title>{title}</Card.Title>
                            <Card.Text>
                                <div> <i className="fas fa-map-marker-alt"></i> {body}</div>
                                <div className="text-danger">
                                    <i className="fas fa-star"></i>
                                    <i className="fas fa-star"></i>
                                    <i className="fas fa-star"></i>
                                    <i class="fas fa-star-half-alt"></i>
                                    <i class="far fa-star"></i>

                                </div>


                            </Card.Text>
                            <Card.Title>
                                <Link >
                                    <Button className="text-center bg-primary"> Book Now</Button>
                                </Link>
                            </Card.Title>
                        </Card.Body>
                    </Col>


                </Row>


            </Card>
        </Col>



    );
};

export default TourCard;