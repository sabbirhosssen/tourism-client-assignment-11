import React from 'react';
import OfferBody from '../Offer/OfferBody';
import Tour from '../Tour/Tour';
import Bannar from './Bannar';
import Dubais from './Dubais';

const Home = () => {
    return (
        <div>
            <Bannar></Bannar>
            <br /><br />
            <Tour></Tour>
            <br /><br /><br />
            <OfferBody></OfferBody>
            <br /><br /><br />
            <Dubais></Dubais>
        </div>
    );
};

export default Home;