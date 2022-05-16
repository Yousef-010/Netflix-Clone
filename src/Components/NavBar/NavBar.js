import React from 'react'
import { Container, Nav, Navbar } from 'react-bootstrap'

function NavBar() {
  return (
  <Navbar bg="dark" variant="dark">
    <Container>
    <Navbar.Brand href="/">Netflix </Navbar.Brand>
    <Nav className="me-auto">
      <Nav.Link href="/">Home</Nav.Link>
      <Nav.Link href="">link</Nav.Link>
      <Nav.Link href="">link</Nav.Link>
    </Nav>
    </Container>
  </Navbar>
  )
}

export default NavBar