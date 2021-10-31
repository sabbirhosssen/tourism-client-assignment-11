import React, { useEffect, useState } from 'react';
import { Col, Image, Row } from 'react-bootstrap';
import { useParams } from 'react-router';
import useAuth from '../../../Hookes/useAuth';

const OfferBook = () => {
    const { user } = useAuth();
    console.log(user);
    const [offer, setOffer] = useState([])
    const { offerId } = useParams()
    useEffect(() =>
        fetch('/OfferRead.json')
            .then(res => res.json())
            .then(data => {
                const findOffer = data.find(f => f.id == offerId)
                setOffer(findOffer)
            })

        , [])


    return (
        <Row className=" ">
            <Col md={6} className="">
                <h1 className="pb-5 text-uppercase text-success pt-4">Offer Card Details</h1>
                <div className="mx-auto border rounded w-25 pt-3 pb-5 ">

                    <Image src={offer?.img} className=" rounded " width="100%" />

                </div>
                <div className="text-start pt-3 text-center">
                    <h3 > {offer?.title}</h3>

                </div>
                <div className="w-75 border border-success p-5 mx-auto  rounded">
                    <div className="fs-1 text-center text-success  pb-5 ">Description</div>
                    {offer.body}
                </div>
            </Col>
            <Col md={6} className="border border-end-0 border-primary  text-start">
                <h className="py-3 text-dark  ">Name : {user?.displayName}</h>
                <h4 className="py-3 text-dark  ">Name : {user?.displayName}</h4>
                <h5 className="py-3 text-dark  ">Email : {user?.email}</h5>

                <Row className="border border-warning">
                    <Col><Image src={offer?.img} width="170" className="" /></Col>
                    <Col > <div className="gg">{offer?.title}</div></Col>
                </Row>
            </Col>
        </Row>
    );
};

export default OfferBook;