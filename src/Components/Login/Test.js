import React from 'react';
import { Button } from 'react-bootstrap';
import useFirebase from '../../Hookes/useFirebase';

const Test = () => {
    const { logInUsingGoogle } = useFirebase();
    return (
        <div>
            <Button onClick={logInUsingGoogle}> google</Button>

        </div>
    );
};

export default Test;