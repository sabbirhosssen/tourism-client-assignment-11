import React from 'react';
import { Button, Card, Col } from 'react-bootstrap';
import { Link, useHistory } from 'react-router-dom';

const OfferCard = ({ offer }) => {
    const { _id, img, title, body } = offer;
    const history = useHistory();

    const handleOfferBook = (_id) => {
        const offer_uri = `/offerBook/${_id}`
        history.push(offer_uri)

    }
    return (


        <Col  >
            <Card style={{ height: "385px" }} >
                <Card.Img variant="top" src={img} height="180px" />
                <Card.Body className="text-start">
                    <Card.Title>{title}</Card.Title>
                    <Card.Text>
                        {body}
                    </Card.Text>
                    <Card.Title>
                        <Link as={Link} to={`/offerBook/${_id}`}>
                            <Button onClick={() => handleOfferBook(_id)} className="text-center bg-info"> READ MORE</Button>
                        </Link>
                    </Card.Title>
                </Card.Body>
            </Card>
        </Col>



    );
};

export default OfferCard;