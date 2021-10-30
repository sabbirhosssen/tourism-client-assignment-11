import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const TourBook = () => {

    const { id } = useParams()
    const [details, setDetails] = useState([])
    const [bookData, setBookData] = useState({})


    useEffect(() =>
        fetch("/productServices.json")
            .then(res => res.json())
            .then(data => setDetails(data))
        , [])


    useEffect(() => {

        const findData = details?.find(detail => detail?.key == id)
        console.log(findData);


    }, [])
    return (

        <div >
            <h2> This is dynamic page and id is:{id}</h2>
            {/* <p>Name: {bookData?.title}</p>
            <p>price: {bookData?.body}</p> */}
        </div>




    );
};

export default TourBook;