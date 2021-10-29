import React from 'react';
import { Button, Card, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const OfferCard = ({ offer }) => {
    const { img, title, body } = offer;
    return (


        <Col >
            <Card style={{ height: "385px" }} >
                <Card.Img variant="top" src={img} height="180px" />
                <Card.Body className="text-start">
                    <Card.Title>{title}</Card.Title>
                    <Card.Text>
                        {body}
                    </Card.Text>
                    <Card.Title>
                        <Link >
                            <Button className="text-center bg-info"> READ MORE</Button>
                        </Link>
                    </Card.Title>
                </Card.Body>
            </Card>
        </Col>



    );
};

export default OfferCard;