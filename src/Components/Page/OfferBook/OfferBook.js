import React, { useEffect, useState } from 'react';
import { Image } from 'react-bootstrap';
import { useParams } from 'react-router';

const OfferBook = () => {
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
        <div>
            <div className="mx-auto border rounded w-25 pt-5 pb-5 ">
                <h1 className="pb-5 text-uppercase text-success">Offer Card Details</h1>
                <Image src={offer?.img} className=" rounded  shadow-lg " width="100%" />
                <div className="text-start pt-3">
                    <h3> {offer?.title}</h3>

                </div>
            </div>
            <div className="w-75 border border-success p-5 mx-auto m-5 shadow-lg rounded">
                <div className="fs-1 text-center text-success  pb-5 ">Description</div>
                {offer.body}
            </div>

        </div>
    );
};

export default OfferBook;