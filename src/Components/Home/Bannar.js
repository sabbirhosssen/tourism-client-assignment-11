import React from 'react';
import { Carousel, Image } from 'react-bootstrap';

const Bannar = () => {
    return (
        <Carousel variant="dark">
            <Carousel.Item>
                <Image
                    className="d-block "
                    src="https://tour.com.bd/uploads/images/slider/f4n79teyk0g8kg8.jpg"
                    alt="First slide"
                    fluid
                />
                <Carousel.Caption className=" text-white">
                    <h5>BOOK THE PERFECT TRIP</h5>
                    <p >Search over 450 airlines and more than 320,000 hotels around the world.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <Image
                    className="d-block "
                    src="https://tour.com.bd/uploads/images/slider/e41yislk0084kkg.jpg"
                    alt="Second slide"
                    fluid
                />
                <Carousel.Caption className=" text-white">
                    <h5>Vacation Packages</h5>
                    <p>Find out the best deals and book yours today</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <Image
                    className="d-block  "
                    src="https://tour.com.bd/uploads/images/slider/76ejktjn6y88ckk.jpg"
                    alt="Third slide"
                    fluid

                />
                <Carousel.Caption className=" text-white">
                    <h5>Travel to the World</h5>
                    <p>Discover the hidden beauty from top to bottom</p>

                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    );
};

export default Bannar;