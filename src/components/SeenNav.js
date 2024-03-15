import React from "react"
import "./SeenNav.css"
import Nav from "react-bootstrap/Nav"
import Navbar from "react-bootstrap/Navbar"
import NavDropdown from "react-bootstrap/NavDropdown"
import Container from "react-bootstrap/Container"
import { Link, NavLink } from "react-router-dom"

export default function SeenNav() {
  return (
    <Navbar>
      <Container className="container-xxl">
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
            <Nav.Link as={Link} to="/update-profile">
              Update Profile
            </Nav.Link>
            <Nav.Link as={Link} to="/login">
              Log In
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}
