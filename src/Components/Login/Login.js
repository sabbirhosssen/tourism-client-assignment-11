import React from 'react';
import { Form, Button, Image } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useFirebase from '../../Hookes/useFirebase';











const Login = () => {

    const { logInUsingGoogle } = useFirebase();
    return (
        <div className="w-25 border border-2 p-3 m-5 rounded mx-auto">
            <Form>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label className="fs-3 text-info">Log in</Form.Label>
                    <Form.Control type="email" placeholder="Enter Your Email or Username" />

                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">

                    <Form.Control type="password" placeholder="Password" />
                </Form.Group>

                <Button variant="info w-100  fs-5" type="submit">
                    Log in
                </Button>
                <br /> <br />

                <Form.Text className="text-muted">
                    Don't have an account yet ?
                    <Link as={Link} to={'/signup'} className="text-decoration-none "> Sign up here</Link>
                </Form.Text>
                <br />
                <Form.Label className="text-success fs-2">or</Form.Label>

                <Button onClick={logInUsingGoogle} className="bg-info border-0 rounded w-100  fs-5" >
                    <Image width="35px" src="https://www.freepnglogos.com/uploads/google-logo-png/google-logo-png-webinar-optimizing-for-success-google-business-webinar-13.png" />
                    Sign in with Google
                </Button>



            </Form>
        </div >
    );
};

export default Login;