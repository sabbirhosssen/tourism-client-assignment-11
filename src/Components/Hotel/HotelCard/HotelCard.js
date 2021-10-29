import React from 'react';
import { Card, Col, Row } from 'react-bootstrap';

const HotelCard = ({ hotel }) => {
    const { img, title, price, address } = hotel;
    return (

        <Col>
            <Card className="bg-dark text-white ">
                <Card.Img src={img} alt=" Card image" />
                <Card.ImgOverlay>
                    <Card.Title>{title}</Card.Title>
                    <Card.Text>
                        <i className="fas fa-map-marker-alt"></i> {address}
                    </Card.Text>

                </Card.ImgOverlay>
                <Card.Body>
                    <Row>
                        <Col> <Card.Text className="text-danger">
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star-half-alt"></i>
                            <i className="far fa-star"></i>
                            <i className="far fa-star"></i>

                        </Card.Text></Col>
                        <Col><Card.Text>$ {price}</Card.Text></Col>
                    </Row>

                </Card.Body>
            </Card>

        </Col>


    );
};

export default HotelCard;

