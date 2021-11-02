import axios from 'axios';
import React from 'react';
import { Button } from 'react-bootstrap';
// import axios from 'axios'
import { useForm } from 'react-hook-form';
import { Link, useParams } from 'react-router-dom';
import useAuth from '../../../Hookes/useAuth';

const AllOrder = () => {
    const { user } = useAuth();


    // all order client user information method

    const { register, handleSubmit, reset } = useForm();
    const onSubmit = data => {
        console.log(data);
        axios.post(`http://localhost:5000/allOrder `, data)
            .then(res => {
                if (res.data.insertedId) {
                    alert('added to successfully ')
                    reset();
                }
            })
    }



    return (

        <div className="">

            <div className="mx-auto w-50 my-5">
                <h3>Shipping Form</h3>

                <form onSubmit={handleSubmit(onSubmit)} className="d-block gy-3 text-start my-5">
                    <input {...register("name", { required: true, maxLength: 40 })} placeholder="Name" className="w-100" defaultValue={user?.displayName}></input>
                    <input {...register("email", { required: true, maxLength: 80 })} placeholder="Name" className="w-100" defaultValue={user?.email}></input>
                    <input type="number" {...register("Number", { required: true })} placeholder="Phone Number"
                        className="w-100 my-2" />
                    <input {...register("address")} placeholder="Address: District Name"
                        className="w-100 my-2" />

                    <textarea {...register("Address")} placeholder="Address Description " className="w-100 my-2" />

                    <input type="submit" className="d-block mx-auto bg-primary p-2  rounded border-1" />
                </form>

                <h6 className=""> Please complete Shipping Form ?</h6>
                <p>add conform the parcess ! Your All Tour </p>
                <Link as={Link} to={`/clientOrder`} className="my-5">
                    <Button>Conform on parcess </Button>
                </Link>
            </div>
        </div>





    );
};

export default AllOrder;