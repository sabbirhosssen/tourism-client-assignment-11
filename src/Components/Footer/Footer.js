import React from 'react';
import { Button, FormControl, InputGroup } from 'react-bootstrap';

const Footer = () => {
    return (
        <div>

            <div className="m-0 mb-0 bg-black text-white">
                <div className="container">
                    <div className="row  text-start">
                        {/* colam 1  */}
                        <div className="col-md-4 col-sm-6 ">
                            <img src="https://tour.com.bd/uploads/global/logo.png" alt="" width="150px" />
                            <p className="py-2">
                                Tourism is travel for pleasure or business; also the theory and practice of touring, the business of attracting, accommodating, and entertaining tourists, and the business of operating tours
                            </p>
                            <h6>House # 48, Road # 15/A ,Dhanmondi ,Dhaka 1209</h6>
                            <h6>Hotline : 10615 , +8809757656556</h6>
                            <h6>info@tourism.com</h6>
                        </div>
                        {/* colam 3  */}
                        <div className="col-md-4 col-sm-6">
                            <h3 className="text-blue py-2">Services</h3>
                            <ul className="list-unstyled ">
                                <li className="py-3">About us </li>
                                <li className="py-3">Booking Tip </li>
                                <li className="py-3">Our Partners</li>
                                <li className="py-3">Privacy Policy</li>

                            </ul>
                        </div>
                        {/* colam 3  */}
                        <div className="col-md-4 col-sm-6 " >
                            <h3> Contact Us</h3>
                            <ul className="list-unstyled py-4">
                                <li className="py-3">
                                    <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="Email" />

                                </li>

                                <InputGroup>
                                    <FormControl as="textarea" aria-label="With textarea" placeholder="Messeage" />
                                </InputGroup>


                                <li className="py-3"><Button className="bg-primary">Submit</Button></li>
                            </ul>
                        </div>

                    </div>
                    <p className="text-white pt-3">Copyright © 2021 . tourism/or/travel.eu.com</p>
                </div>

            </div>

        </div>


    );
};

export default Footer;