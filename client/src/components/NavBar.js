import React from 'react';
import {Navbar, Nav, Container} from 'react-bootstrap';



function Navigation(){

    
    return(
        <>
        <Navbar collapseOnSelect fixed='top' expan='sm' bg='dark' variant='dark'>
            <Container>
                <Navbar.Brand href='/'>NF </Navbar.Brand>
                <Navbar.Toggle aria-controls='responsive-navbar-nav' />
                <Navbar.Collapse id='responsive-navbar-nav' >
                    <Nav>
                        <Nav.Link href='/'>Home</Nav.Link>
                        <Nav.Link href='/login'>Login</Nav.Link>
                        <Nav.Link href='/sign-up'>Sign up</Nav.Link>

                    </Nav>
                </Navbar.Collapse>
            </Container>

        </Navbar>
        </>
    )

}

export default Navigation;