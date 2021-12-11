import React from 'react';
import {Form, Button} from 'react-bootstrap';



function LoginForm(){
    return(


    <Form className='login-form center'>
        
        <Form.Group className='mb-2 w-50 h-10' controlId='formBasicEmail'>
            <Form.Label>Email address</Form.Label>
            <Form.Control type='email' placeholder='Enter email'/>
            <Form.Text className='text-muted'>
                We'll never share your email with anyone else.
            </Form.Text>
        </Form.Group>

        <Form.Group className='mb-3 w-50' controlId='formBasicPassword'>
            <Form.Label>Password</Form.Label>
            <Form.Control type='password' placeholder='Password' />
            
            <Button variant='primary' type='submit'>
                Login
            </Button>
        </Form.Group>

        

    </Form>
    )}

export default LoginForm;