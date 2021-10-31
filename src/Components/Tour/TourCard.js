import React from 'react';
import { Card, Col, Row, Button } from 'react-bootstrap';
import { Link, useHistory } from 'react-router-dom';

const TourCard = ({ tour }) => {
    const { key, img, title, body } = tour;
    const history = useHistory();

    // Book show handle
    const handleTourBook = (key) => {
        const tour_uri = `/tourBook/${key}`
        history.push(tour_uri)
    }
    return (
        <Col >

            <Card>
                <Row className="bg-info rounded ">
                    <Col md={6} className="p-0">
                        <Card.Img src={img} variant="top rounded mx-0" align="start" height="100%" />
                    </Col>
                    <Col md={6} >
                        <Card.Body>
                            <Card.Title>{title}</Card.Title>
                            <Card.Text>
                                <Card.Text> <i className="fas fa-map-marker-alt"></i> {body}</Card.Text>
                                <Card.Text className="text-danger">
                                    <i className="fas fa-star"></i>
                                    <i className="fas fa-star"></i>
                                    <i className="fas fa-star"></i>
                                    <i className="fas fa-star-half-alt"></i>
                                    <i className="far fa-star"></i>

                                </Card.Text>


                            </Card.Text>
                            <Card.Title>

                                <Link as={Link} to={`/tourBook/${key}`}>
                                    <Button className="text-center bg-primary"
                                        onClick={() => handleTourBook(key)}> Book Now</Button>
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