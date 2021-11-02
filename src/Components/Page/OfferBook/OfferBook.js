import React, { useEffect, useState } from 'react';
import { Button, Image } from 'react-bootstrap';
import { useHistory, useParams } from 'react-router';
import { Link } from 'react-router-dom';


const OfferBook = () => {

    const history = useHistory();
    const [offer, setOffer] = useState([])
    const { offerId } = useParams()
    useEffect(() =>
        fetch('http://localhost:5000/offers')
            .then(res => res.json())
            .then(data => {
                const findOffer = data.find(f => f._id == offerId)
                setOffer(findOffer)
            })

        , [])


    const handleClickAllOrder = (_id) => {
        const order_uri = `${offer?._id}`
        history.push(order_uri)
    }


    return (

        <div md={6} className="">
            <h1 className="pb-5 text-uppercase text-success pt-4">Offer Card Details</h1>
            <div className="mx-auto border rounded w-25 pt-3 pb-5 ">

                <Image src={offer?.img} className=" rounded " width="100%" />

            </div>
            <div className="text-start pt-3 text-center">
                <h3 > {offer?.title}</h3>

            </div>
            <div className="w-75 border border-success py-5 mx-auto  rounded">
                <div className="fs-1 text-center text-success  pb-5 ">Description</div>
                {offer.description}
            </div>

            <div className="text center py-5">
                <h1>Please Conform Book Now </h1>
                <Link as={Link} to={`/allOrder/${offer?._id}`}>
                    <Button onClick={() => handleClickAllOrder(offer?._id)}>BOOK NOW</Button>
                </Link>

            </div>
        </div>


    );
};

export default OfferBook;