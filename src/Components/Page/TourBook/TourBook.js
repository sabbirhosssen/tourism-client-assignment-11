import React, { useEffect, useState } from 'react';
import { Accordion, Image } from 'react-bootstrap';
import { useParams } from 'react-router-dom';


const TourBook = () => {

    const { tourId } = useParams()
    const [details, setDetails] = useState([])



    useEffect(() =>
        fetch("/Tour.json")
            .then(res => res.json())
            .then(data => {
                const findData = data.find(b => b.key == tourId)
                setDetails(findData)
            }, []))



    return (

        <div >
            <div className="mx-auto border-1 w-25 pt-5 pb-5 ">
                <h1 className="pb-5">Card Details</h1>
                <Image src={details.img} className=" rounded  shadow-lg " width="100%" />
                <div className="text-start pt-3">
                    <h3>Name : {details?.title}</h3>
                    <h4>Address : {details?.address}</h4>
                </div>
            </div>




            <Accordion defaultActiveKey="0" className="w-75 mt-3 mb-5 mx-auto ">
                <div className="fs-1 text-center text-warning  ">Description</div>
                <Accordion.Item eventKey="0">
                    <Accordion.Header >Day 01 :  Tour plans</Accordion.Header>
                    <Accordion.Body className="text-start" >
                        {details.body1}
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="1">
                    <Accordion.Header >Day 02 :  Tour plans</Accordion.Header>
                    <Accordion.Body className="text-start" >
                        {details.body2}
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="3">
                    <Accordion.Header >Day 03 :  Tour plans</Accordion.Header>
                    <Accordion.Body className="text-start" >
                        {details.body3}
                    </Accordion.Body>
                </Accordion.Item>
            </Accordion>
        </div>




    );
};

export default TourBook;