import React, { useEffect, useState } from 'react';
import { Accordion, Image, Button } from 'react-bootstrap';
import { useParams, useHistory, Link } from 'react-router-dom';


const TourBook = () => {

    const history = useHistory();
    const { tourId } = useParams()
    const [details, setDetails] = useState([])



    useEffect(() =>
        fetch("http://localhost:5000/tour")
            .then(res => res.json())
            .then(data => {
                const findData = data.find(b => b._id == tourId)
                setDetails(findData)
            }), [])


    const handleClickAllOrder = () => {
        const order_uri = `${details._id}`
        history.push(order_uri)
        console.log(order_uri);

    }

    return (

        <div >
            <div className="mx-auto border  w-25 pt-3 pb-2 rounded">
                <h1 className="pb-5 text-warning">Card Details</h1>
                <Image src={details?.img} className=" rounded  shadow-lg " width="100%" />
                <div className="text-start p-2">
                    <h3>Name : {details?.title}</h3>
                    <h4>Address : {details?.address}</h4>
                    <h4>Tour budget : $ {details?.price} </h4>
                </div>
            </div>




            <Accordion defaultActiveKey="0" className="w-75 mt-3 mb-5 mx-auto border rounded">
                <div className="fs-1 text-center text-warning  ">Description</div>
                <Accordion.Item eventKey="0">
                    <Accordion.Header >Day 01 :  Tour plans</Accordion.Header>
                    <Accordion.Body className="text-start" >
                        {details?.body1}
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="1">
                    <Accordion.Header >Day 02 :  Tour plans</Accordion.Header>
                    <Accordion.Body className="text-start" >
                        {details?.body2}
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="3">
                    <Accordion.Header >Day 03 :  Tour plans</Accordion.Header>
                    <Accordion.Body className="text-start" >
                        {details?.body3}
                    </Accordion.Body>
                </Accordion.Item>
            </Accordion>

            <div className="text center py-5">
                <h1>Please Conform Book Now </h1>
                <Link as={Link} to={`/allOrder/${details?._id}`}>
                    <Button onClick={() => handleClickAllOrder(details?._id)}>BOOK NOW</Button>
                </Link>

            </div>
        </div>




    );
};

export default TourBook;