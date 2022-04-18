import React from 'react';
import { Link, useParams } from 'react-router-dom';

const ServiceDeatail = () => {
    const { serviceId } = useParams();
    return (
        <div>
            <h2 className='m-2'>Welcome to detail: {serviceId}</h2>
            <div className='text-center m-2'>
                <Link to="/checkout">
                    <button className='btn btn-dark'>Proceed Checkout</button>
                </Link>
            </div>
        </div>
    );
};

export default ServiceDeatail;