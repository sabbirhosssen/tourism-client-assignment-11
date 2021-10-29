import React from 'react';
import { Button, Image } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import img from './../../Image/Error.png'

const NotFound = () => {
    return (
        <div className="text-center">

            <Image width="50%" src={img} alt="" />
            <Link to="/">
                <Button className=" text-white d-block mx-auto fs-3 ">Go To Your Homepage</Button>
            </Link>
        </div>
    );
};

export default NotFound;