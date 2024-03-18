import Container from "react-bootstrap/Container"
import Nav from "react-bootstrap/Nav"
import { Navbar, NavItem } from "react-bootstrap"
import NavDropdown from "react-bootstrap/NavDropdown"
import { Link, NavLink, useNavigate } from "react-router-dom"
import { useAuth } from "./contexts/AuthContext"
import { useState } from "react"
function NavPane() {
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
    <Navbar
      expand="lg"
      className="bg-body-tertiary "
      style={{ fontFamily: "Poppins" }}
    >
      <Container>
        <Navbar.Brand href="#home">seen.</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/search">
              Home
            </Nav.Link>
            <Nav.Link as={Link} to="/">
              Update Profile
            </Nav.Link>
            <Nav.Link onClick={handleLogout}>Log Out</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default NavPane
