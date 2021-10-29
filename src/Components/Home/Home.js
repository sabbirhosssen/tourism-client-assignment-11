import React from 'react';
import HotelBody from '../Hotel/HotelBody/HotelBody';
import Tour from '../Tour/Tour';
import Bannar from './Bannar';
import Dubais from './Dubais';

const Home = () => {
    return (
        <div>
            <Bannar></Bannar>

            <Tour></Tour>
            <br /><br />
            <HotelBody></HotelBody>
            {/* <br />
            <OfferBody></OfferBody> */}
            <br /><br />
            <Dubais></Dubais>
        </div>
    );
};

export default Home;