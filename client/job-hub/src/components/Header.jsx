import React from 'react'
// import Container from 'react-bootstrap/Container';
// import Navbar from 'react-bootstrap/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';  
import {Nav, Navbar, Container, NavDropdown} from 'react-bootstrap';  

function Header() {
  return (
    <>
      <Navbar  style={{ backgroundColor: '#98afd7' }} expand="md">  
    <Container> 
      <div style={{padding:"15px"}}>
        <i style={{padding:"5px", fontSize:"30px",color: "#065ff9"}}  className="fa-solid fa-j fa-beat-fade"/> 
        <i style={{padding:"5px", fontSize:"30px",color: "#065ff9"}}  className="fa-solid fa-h fa-beat-fade"/> 
      </div>
      <Navbar.Brand href="#home"style={{fontFamily:"cursive",fontSize:"25px"}}>Job - Hub</Navbar.Brand>  
      <Navbar.Toggle aria-controls="basic-navbar-nav" />  
      <Navbar.Collapse id="basic-navbar-nav">  
        <Nav className="me-auto">  
          <Nav.Link href="#home">Home</Nav.Link>  
          <Nav.Link href="#link">Link</Nav.Link>  
          <NavDropdown title="Dropdown" id="basic-nav-dropdown">  
            <NavDropdown.Item href="#action/3.1">Dropdown Item 1</NavDropdown.Item>  
            <NavDropdown.Item href="#action/3.2">Dropdown Item 2</NavDropdown.Item>  
            <NavDropdown.Item href="#action/3.3">Dropdown Item 3</NavDropdown.Item>  
            <NavDropdown.Divider />  
            <NavDropdown.Item href="#action/3.4">Another Item</NavDropdown.Item>  
          </NavDropdown>  
        </Nav>  
      </Navbar.Collapse>  
    </Container>  
  </Navbar> 
    </>
  )
}

export default Header
