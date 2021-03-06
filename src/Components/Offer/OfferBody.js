import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { Row } from 'react-bootstrap';
import OfferCard from './OfferCard';

const OfferBody = () => {
    const [offer, setOffer] = useState([]);
    useEffect(() => {
        fetch('https://secure-fjord-39220.herokuapp.com/offers')
            .then(res => res.json())
            .then(data => setOffer(data))
    }, []);

    return (
        <div>
            <div className="text-center text-warning pt-5 p-5">
                <h1>SPECIAL PACKAGES</h1>
            </div>
            <Row xs={1} md={3} className="g-4 p-4 shadow bg-body rounded mb-5">
                {
                    offer.map(offer =>
                        <OfferCard
                            key={offer._id}
                            offer={offer}
                        ></OfferCard>
                    )
                }

            </Row>

        </div>
    );
};

export default OfferBody;

