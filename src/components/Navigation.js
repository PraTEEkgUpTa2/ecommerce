import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faCartShopping } from '@fortawesome/free-solid-svg-icons';
import { LinkContainer } from 'react-router-bootstrap';
import Button from 'react-bootstrap/Button';

function Navigation() {
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
      <LinkContainer to="/home">
      <Navbar.Brand >
        <h1>Sigma Mall</h1>
      </Navbar.Brand> 
      </LinkContainer>
     
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link href="/"><Button style={{ width: '100px'}}>Sign Out</Button></Nav.Link>
            <div style={{ width:'40px', height:'40px'}}><FontAwesomeIcon icon={faCartShopping} style={{ width:'30px', height:'30px', padding:'10px'}} /></div>
            
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navigation;