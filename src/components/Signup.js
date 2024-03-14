import React, { useRef, useState } from "react"
import { Card, Form, Button, Alert } from "react-bootstrap"
import { Link } from "react-router-dom"
import { useAuth } from "./contexts/AuthContext"
import { useNavigate } from "react-router-dom"
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth"

function Signup() {
  const emailRef = useRef()
  const passwordRef = useRef()
  const passwordConfirmRef = useRef()
  const { signUp } = useAuth()
  const [error, setError] = React.useState("")
  const [loading, setLoading] = useState(false)
  const [currentUser, setCurrentUser] = useState(null)
  const navigate = useNavigate()

  async function handleSubmit(e) {
    e.preventDefault()

    if (passwordRef.current.value !== passwordConfirmRef.current.value) {
      return setError("Password does not match")
    }

    try {
      setError("")
      setLoading(true)
      await signUp(emailRef.current.value, passwordRef.current.value)
      navigate("/")
    } catch {
      setError("Failed to create an account")
    }
    setLoading(false)
  }
  return (
    <>
      <Card>
        <Card.Body>
          <h2 className="text-center mb-4">Sign Up</h2>
          {currentUser && currentUser.email}
          {error && <Alert variant="danger">{error}</Alert>}
          <Form onSubmit={handleSubmit}>
            <Form.Group id="email">
              <Form.Label>Email address</Form.Label>
              <Form.Control type="email" ref={emailRef} required />
            </Form.Group>
            <Form.Group id="password">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" ref={passwordRef} required />
            </Form.Group>
            <Form.Group id="password-confirm">
              <Form.Label>Confirm Password</Form.Label>
              <Form.Control type="password" ref={passwordConfirmRef} required />
            </Form.Group>
            <Button disabled={loading} className="w-100" type="submit">
              Sign Up
            </Button>
          </Form>
        </Card.Body>
      </Card>
      <div className="w-100 text-center mt-2">
        Have an account? <Link to="/login">Log In</Link>
      </div>
    </>
  )
}

export default Signup
