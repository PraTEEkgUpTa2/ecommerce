import { useState } from 'react';
import React from 'react';
import { Form, Button, Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Signup.css';
import Home from './Home';

function Signup() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    

    const handleLogin = (e) => {
      e.preventDefault();
      if (email && password) {
        // Perform your login operation here
        
         setIsLoggedIn(true);
        console.log('Logged in');
      } else {
        alert('Please fill in both fields');
      }
    };

    if (isLoggedIn) {
      return <Home />;
    }

  return (
    <Container >
    <Row>
      <Col md={6} className='signup__form--container'>
        <Form style={{ width: "90%"}} onSubmit={handleLogin}>
        <Col md={6} className="logo__image--container "></Col>
            <h1 className="mb-5">Create your account</h1>
            <Form.Group className="mb-3">
                
                <Form.Control type="" placeholder="Enter Name" value="" required ></Form.Control>
            </Form.Group>

            <Form.Group className="mb-3">
                
                <Form.Control type="email" placeholder="Enter email" value={email} required onChange={(e) => setEmail(e.target.value)}></Form.Control>
            </Form.Group>

            <Form.Group className="mb-3">
                
                 <Form.Control type="password" placeholder="Enter Password" value={password} required onChange={(e) => setPassword(e.target.value)} />
            </Form.Group>

            <Form.Group className="mt-5">
            
                <Button type="submit" >
                    Login
                </Button>
            
            </Form.Group>

            
        </Form>
      </Col>
      <Col md={6} className="signup__image--container"></Col>
    </Row>
   </Container>
  
  )
}

export default Signup