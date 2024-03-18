import React from "react"
import "./SeenNav.css"
import Nav from "react-bootstrap/Nav"
import Navbar from "react-bootstrap/Navbar"
import NavDropdown from "react-bootstrap/NavDropdown"
import Container from "react-bootstrap/Container"
import { Link, NavLink } from "react-router-dom"
import { useAuth } from "./contexts/AuthContext"
import { useState } from "react"

import { useNavigate } from "react-router-dom"

export default function SeenNav() {
  const [error, setError] = useState("")
  const { logout } = useAuth()
  const navigate = useNavigate()

  async function handleLogout() {
    setError("")
    try {
      await logout()
      navigate("/login")
    } catch (error) {
      setError("Failed to log out")
    }
  }
  return (
    <Navbar>
      <Container className="container-md g-md-1">
        <Navbar.Brand href="#home">
          {" "}
          <span className="seen-logo-span">
            <h1 className="seen-logo">seen.</h1>
          </span>
        </Navbar.Brand>
        <Navbar.Text>
          The #1 app for rating your favorite movies and shows
        </Navbar.Text>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/search">
              Home
            </Nav.Link>
            <Nav.Link as={Link} to="/update-profile">
              Update Profile
            </Nav.Link>
            <button onClick={handleLogout}>Log Out</button>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}
