import React, { useEffect, useState } from 'react';
import { Row } from 'react-bootstrap';
import HotelCard from '../HotelCard/HotelCard';

const HotelBody = () => {
    const [hotel, setHotel] = useState([]);
    useEffect(() => {
        fetch('./HotelData.json')
            .then(res => res.json())
            .then(data => setHotel(data))
    }, []);


    return (
        <div>
            <div className="text-center pt-3 m-0 ">

                <span className="text-info"><i className="far fa-building fs-2 d-inline"></i>
                </span><h1 className="d-inline ps-3">FEATURED HOTELS
                </h1>
            </div>

            <Row xs={1} md={3} className="g-4 p-5   m-0">
                {
                    hotel.map(hotel =>
                        <HotelCard
                            key={hotel.id}
                            hotel={hotel}
                        ></HotelCard>
                    )
                }

            </Row>
        </div >
    );
};

export default HotelBody;