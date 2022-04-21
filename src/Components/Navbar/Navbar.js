import React from 'react'
import {Navbar, Nav,} from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'

function Navmenu() {
    return (
<div>      
<Navbar className="navborder" bg="light" expand="lg">
  <Navbar.Brand  className="name" href="#home">Elite Athletes & Scholars</Navbar.Brand>
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav">
  <Nav className="ml-auto navbar">
    <Nav.Link href="/">Home</Nav.Link>
    <Nav.Link href="/About">About</Nav.Link>
    <Nav.Link href="/Resources">Resources</Nav.Link>
    <Nav.Link href="/Pricing">Pricing</Nav.Link>
    <Nav.Link href="/Contact">Contact</Nav.Link>
    </Nav>
  </Navbar.Collapse>
</Navbar>
</div>  
    )}

export default Navmenu