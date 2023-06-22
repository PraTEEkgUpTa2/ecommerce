import {React, useState} from 'react';
import { Form, Button, Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Home from './Home';

function Login() {
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
   <Container>
    <Row>
    
      <Col md={6} className='login__form--container'>
        <Form style={{ width: "90%"}} onSubmit={handleLogin}>
        <Col md={6} className="logo__image--container "></Col>
            <h1 className='mb-5'>Login to your account</h1>
            <Form.Group className='mb-3'>
                
                <Form.Control type="email" placeholder="Enter email" value={email} required onChange={(e) => setEmail(e.target.value)}></Form.Control>
            </Form.Group>

            <Form.Group className="mb-3">
                
                 <Form.Control type="password" placeholder="Enter Password" value={password} required onChange={(e) => setPassword(e.target.value)} />
            </Form.Group>
          
          
            
            <Form.Group className="mt-5" >
            
                <Button type="submit"  >
                    Login
                </Button>
                
            </Form.Group>
            

            <p className="pt-4 text-center">
                Don't have an account? <Link to="/signup">Create account</Link>{" "}
            </p>  
        </Form>
      </Col>
      <Col md={6} className="login__image--container"></Col>
    </Row>
   </Container>
  )
}

export default Login;