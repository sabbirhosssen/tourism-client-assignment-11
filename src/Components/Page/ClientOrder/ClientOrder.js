import React, { useEffect, useState } from 'react';
import useAuth from '../../../Hookes/useAuth';

const ClientOrder = () => {
    const { user } = useAuth();
    const [client, setClientOrder] = useState();

    useEffect(() => {
        fetch(`http://localhost:5000/allOrder?email=${user.email}`)
            .then(res => res.json())
            .then(data => setClientOrder(data))
    }, [])
    console.log(client);
    return (
        <div>

            <div className="w-75 border border-dark mx-auto p-5 my-5">

                <h1>You have placed : {client.length} Orders</h1>


                {client?.map(client =>

                    <div key={client?._id} className="w-50 border  mx-auto m-5 p-3  text-start">


                        <li> Id : {client?._id} </li>
                        <li> Name : {client?.name}</li>
                        <li> Email : {client?.email}</li>
                        <li> Number : {client?.Number}</li>
                        <li> Address to District: {client?.Address}</li>
                        <li> Address : {client?.address}</li>
                        <li> Time : {client?.createdAt}</li>

                    </div>






                )}


            </div>
        </div>
    );
};

export default ClientOrder;