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
    <>
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
                <Route path="/search" element={<SearchPage />} />
                <Route path="/forgot-password" element={<ForgotPassword />} />
              </Routes>
            </AuthProvider>
          </Router>
        </div>
      </Container>

      {/* OLD METHOD OF ADDING MOVIE TO WATCHED LIST
      #TODO: USE THIS FORM TO ADD A CUSTOM MOVIE THAT COULDN'T BE SEARCHED 
      TO WATCHED LIST 
      
      <div className="input--form--container">
        <p>
          Can't find a movie in search? Enter and submit a custom title here
        </p>
        <form onSubmit={addNewMovie} className="title-form">
          <input
            type="text"
            placeholder="My Movies and Shows"
            className="title--form--input"
            name="title"
            id={movie}
            onChange={handleChange}
            value={movie}
          />
          <button className="submit--btn">Add Movie</button>
        </form>
      </div> */}
      {/* </main> */}
    </>
  )
}

export default App
