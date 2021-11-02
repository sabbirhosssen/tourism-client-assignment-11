import axios from 'axios'
import React from 'react';
import { useForm } from "react-hook-form";

const TourShiping = () => {
    const { register, handleSubmit, reset } = useForm();
    const onSubmit = data => {
        console.log(data)
        axios.post('http://localhost:5000/tourShiping', data)
            .then(res => {
                if (res.data.insertedId) {
                    alert('added  successfully')
                    reset();
                }
            })
    };

    return (
        <div className="mx-auto w-25 my-5">
            <h3>Please add a  Shipping </h3>
            <form onSubmit={handleSubmit(onSubmit)} className="d-block gy-3 text-start">
                <input {...register("title", { required: true, maxLength: 20 })} placeholder="title" className="w-100" />
                <input type="number" {...register("price")} placeholder="Price"
                    className="w-100 my-2" />


                <input {...register("img")} placeholder="Image url" className="w-100 my-2" />
                <textarea {...register("body")} placeholder="Description1" className="w-100 my-2" />
                <textarea {...register("description")} placeholder="Description2" className="w-100 my-2" />

                <input type="submit" className="d-block mx-auto bg-info" />
            </form>



        </div>
    );
};

export default TourShiping;
{/* <input {...register("address")} placeholder="Address"
    className="w-100 my-2" /> */}

{/* <textarea {...register("body2")} placeholder="Description3" className="w-100 my-2" /> */ }