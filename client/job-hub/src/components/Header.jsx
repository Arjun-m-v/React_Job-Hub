import React from 'react'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';

function Header() {
  return (
    <>
        <Navbar className="bg-info">
        <Container>
          <Navbar.Brand href="#home">
          <i style={{padding:"15px", fontSize:"30px"}}  className="fa-solid fa-building"/>
            Job - Hub
          </Navbar.Brand>
        </Container>
      </Navbar>
    </>
  )
}

export default Header
