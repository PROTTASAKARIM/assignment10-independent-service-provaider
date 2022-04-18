import React, { useRef } from 'react';
import { Button, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import ThankYou from '../ThankYou/ThankYou';

const CheckOut = () => {
    const emailRef = useRef();
    const passwordRef = useRef();
    const addressRef = useRef();
    const handleSubmit = () => {

    }

    return (
        <div>
            <div className='container w-50 mx-auto'>
                <h2 className='text-dark text-center mt-2'>Please Give your details</h2>
                <Form onSubmit={handleSubmit}>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Control ref={emailRef} type="email" placeholder="Enter email" required />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Control ref={passwordRef} type="password" placeholder="Password" required />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicAddress">
                        <Form.Control ref={addressRef} type="text" placeholder="Address" required />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicPhone">
                        <Form.Control ref={addressRef} type="number" placeholder="Phone-no" required />
                    </Form.Group>
                    <Button variant="dark w-50 mx-auto d-block mb-2" type="submit">
                        Order
                    </Button>
                </Form>



            </div>
        </div>
    );
};

export default CheckOut;