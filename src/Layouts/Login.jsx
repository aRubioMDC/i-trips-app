import React, { useState } from 'react'
import { Container, Form, Button } from 'react-bootstrap';
import { authentication } from '../Services/userService';

const Login = () => {

    const [userIdentity, setUserIdentity] = useState({
        email: '',
        password: ''
    });

    const handleSetUserIdentity = (state) => {
        setUserIdentity(state);
    };

    const handleLoginBtn = () => {
        if (userIdentity.email === null || userIdentity.email === '' || userIdentity.password === null || userIdentity.password === '') {
            alert('Usuario o contraseña invalido');
        }
        else {
            authentication(
                userIdentity.email,
                userIdentity.password,
                (data) => {
                    console.log(data);
                    if (data.data === 1) {
                        window.location.href = window.location.pathname + 'home';
                    }
                }, (error) => {
                    console.error(error);
                },
            );
        }
    };

    return (
        <Container id='main-container' className='d-grid h-100'>
            <Form id='sign-in-form' className="text-center w-100" >
                <img
                    className='iTrip-Login-Logo mb-4'
                    src='http://aseenti.com/servicios/assets/images/truck.png'
                    alt='iTripLogo'
                />
                <h1 className='mb-3 fs-3 fw-normal'>Sign In</h1>
                <Form.Group controlId='sign-in-usercode'>
                    <Form.Control
                        type='text'
                        size='lg'
                        placeholder='Usercode'
                        autoComplete='username'
                        value={userIdentity.email}
                        onChange={(event) => { handleSetUserIdentity({ ...userIdentity, email: event.target.value }) }}
                        className='position-relative'
                    />
                </Form.Group>
                <Form.Group controlId='sign-in-password' className='mb-3'>
                    <Form.Control
                        type='password'
                        size='lg'
                        placeholder='Password'
                        autoComplete='current-password'
                        value={userIdentity.password}
                        onChange={(event) => { handleSetUserIdentity({ ...userIdentity, password: event.target.value }) }}
                        className='position-relative'
                    />
                </Form.Group>
                <Form.Group controlId='remember-me' className='d-flex justify-content-center mb-4'>
                    <Form.Check label='Remember me' />
                </Form.Group>
                <div className='d-grid'>
                    <Button variant='primary' size='lg' onClick={handleLoginBtn}>Sign in</Button>
                </div>
                <p className='mt-5 text-muted'>&copy; 2023</p>
            </Form>
        </Container>
    );
}

export default Login;

