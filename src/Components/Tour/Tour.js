import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { Row } from 'react-bootstrap';
import TourCard from './TourCard';

const Tour = () => {
    const [tour, setTour] = useState([])
    useEffect(() => {
        fetch('./Tour.json')
            .then(res => res.json())
            .then(data => setTour(data))
    }, []);


    return (
        <div>
            <div className="text-center pt-3 m-5">
                <div>
                    <img src="https://cdn.iconscout.com/icon/premium/png-256-thumb/business-tour-1539477-1306488.png" alt="" width="155px" height="90px" /> <h1>FEATURED TOURS</h1>
                </div>

            </div>
            <Row xs={1} md={2} className="g-5 p-5">
                {
                    tour.map(tour =>
                        <TourCard
                            key={tour.key}
                            tour={tour}
                        >

                        </TourCard>

                    )
                }

            </Row>

        </div>
    );
};

export default Tour;