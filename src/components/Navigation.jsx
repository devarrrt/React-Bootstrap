import React, { useState } from 'react'
import { Navbar, Nav, Button, Container, Modal, Form } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import styled from 'styled-components'



const Styles = styled.div`
a, .navbar-brand,  .navbar-nav, .nav-link {
    color: #ccc;
    margin-right: 10px;
    &:hover {
        color: #fff,
        text-decoration: none
    }
}`





const Navigation = () => {
    const [show, setShow] = useState(false)

    const handleShow = ( ) => {
        setShow( true )
    }

    const handleClose = ( ) => {
        setShow( false )
    }



    return (
        <>
        <Styles>
            <Navbar collapseOnSelect  bg="dark" variant="dart"   >
                <Container>
                <Navbar.Brand>
                    DEVARRRT
              </Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav" >
                    <Nav className="mr-auto" >
                        <Nav.Link>
                            <Link to="/"> Home </Link>
                            <Link to="/users"> Users </Link>
                            <Link to="/about"> About </Link>
                        </Nav.Link>
                    </Nav>
                    <Nav>
                    <Button 
                    onClick={ handleShow }
                    className="mr-2" variant="primary"> Log In </Button>
                    <Button 
                    onClick={ handleShow }
                    variant="primary"> Sign out
                     </Button>
                    </Nav>
                </Navbar.Collapse>
                </Container>
            </Navbar>
            </Styles>
                        <Modal show={ show } onHide={ handleClose } >
                        <Modal.Header closeButton>
                            <Modal.Title>
                                Log In
                            </Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                            <Form>
                                <Form.Group controlId='fromBasicEmail'>
                                    <Form.Label> Email </Form.Label>
                                    <Form.Control type="email" placeholder="Enter email"/>
                                    <Form.Text className="text-muted"> No </Form.Text>
                                </Form.Group>
                                <Form.Group controlId='fromBasicPassword'>
                                    <Form.Label> Email </Form.Label>
                                    <Form.Control type="password" placeholder="Enter password"/>
                                </Form.Group>
                                <Form.Group controlId='fromBasicCheckbox'>
                                    <Form.Check type="checkbox" label="Remember me"/>
                                </Form.Group>
                            </Form>
                        </Modal.Body>
                    </Modal>
      </>
    )
}




export default Navigation
