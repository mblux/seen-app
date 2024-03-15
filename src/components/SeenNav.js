import React from "react"
import "./SeenNav.css"
import Nav from "react-bootstrap/Nav"
import Navbar from "react-bootstrap/Navbar"
import NavDropdown from "react-bootstrap/NavDropdown"
import Container from "react-bootstrap/Container"

export default function SeenNav() {
  return (
    <Navbar>
      <Container>
        <Navbar expand="lg" className="bg-body-tertiary">
          <Container>
            <Navbar.Brand href="#home">
              {" "}
              <h1>seen </h1>
            </Navbar.Brand>
            <Navbar.Text>
              The #1 app for rating your favorite movies and shows
            </Navbar.Text>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto">
                <Nav.Link href="#home">Logout</Nav.Link>
                <Nav.Link href="#link">Update Profile</Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </Container>
    </Navbar>
  )
}
