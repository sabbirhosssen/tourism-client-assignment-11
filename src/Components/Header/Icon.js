import React from 'react';
import { useState } from 'react';
import { useRef } from 'react';
import { Button, Nav, Overlay, Popover } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Icon = () => {
    const [show, setShow] = useState(false);
    const [target, setTarget] = useState(null);
    const ref = useRef(null);

    const handleClick = (event) => {
        setShow(!show);
        setTarget(event.target);
    };

    return (
        <div ref={ref}>
            <Button className=" fs-2 text-info px-3 bg-white border border-info rounded-pill shadow " onClick={handleClick}> <i className="far fa-user"></i></Button>

            <Overlay
                show={show}
                target={target}
                placement="bottom"
                container={ref}
                containerPadding={20}
            >
                <Popover id="popover-contained">
                    <Popover.Header as="h3">
                        <Nav>
                            <Nav.Link as={Link} to={"/login"} className="text-info"> Login</Nav.Link>
                        </Nav>
                    </Popover.Header>
                    <Popover.Header as="h3">
                        <Nav>
                            <Nav.Link as={Link} to={"/signup"} className="text-info"> Signup</Nav.Link>
                        </Nav>
                    </Popover.Header>

                </Popover>
            </Overlay>
        </div>
    );
};


export default Icon;



