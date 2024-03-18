import "./App.css"
import Signup from "./components/Signup.js"
import UpdateProfile from "./components/UpdateProfile.js"
import ForgotPassword from "./components/ForgotPassword.js"
import React from "react"
import { Container } from "react-bootstrap"
import { AuthProvider } from "./components/contexts/AuthContext"
import Login from "./components/Login.js"
import PrivateRoute from "./components/PrivateRoute.js"
import SearchPage from "./components/SearchPage.js"
import {
  BrowserRouter as Router,
  Switch,
  Routes,
  Navigate,
  Route,
  Link,
} from "react-router-dom"
import Dashboard from "./components/Dashboard.js"

function App() {
  return (
    <Container
      className="d-flex align-items-center justify-content-center"
      style={{ minHeight: "100vh" }}
    >
      <div className="w-100" style={{ maxWidth: "400px" }}>
        <Router>
          <AuthProvider>
            <Routes>
              <Route path="/seen-app" element={<Navigate to="/" />} />
              <Route
                path="/search"
                element={
                  <PrivateRoute>
                    <SearchPage />
                  </PrivateRoute>
                }
              />
              <Route
                path="/"
                element={
                  <PrivateRoute>
                    <Dashboard />
                  </PrivateRoute>
                }
              ></Route>
              <Route
                path="/update-profile"
                element={
                  <PrivateRoute>
                    <UpdateProfile />
                  </PrivateRoute>
                }
              ></Route>

              <Route path="/signup" element={<Signup />} />
              <Route path="/login" element={<Login />} />

              <Route path="/forgot-password" element={<ForgotPassword />} />
            </Routes>
          </AuthProvider>
        </Router>
      </div>
    </Container>
  )
}

export default App
