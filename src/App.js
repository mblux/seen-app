import "./App.css"
import Signup from "./components/Signup.js"
import UpdateProfile from "./components/UpdateProfile.js"
import ForgotPassword from "./components/ForgotPassword.js"
import React from "react"
import { useEffect, useState } from "react"
import { Container } from "react-bootstrap"
import { AuthProvider } from "./components/contexts/AuthContext"
import Login from "./components/Login.js"
import PrivateRoute from "./components/PrivateRoute.js"

import SearchPage from "./components/SearchPage.js"
import {
  onSnapshot,
  addDoc,
  updateDoc,
  doc,
  getDoc,
  deleteDoc,
  setDoc,
} from "firebase/firestore"
import { moviesCollection, db } from "./firebase.js"
import { Stars } from "./components/Stars.js"
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
  const [movie, setMovie] = useState("")
  const [watchedList, setWatchedList] = useState([])
  const [currentMovieId, setCurrentMovieId] = useState("")
  const [searchResults, setSearchResults] = useState([])

  useEffect(() => {
    const unsubscribe = onSnapshot(moviesCollection, function (snapshot) {
      //sync local movie list with snapshot data
      const moviesArray = snapshot.docs.map((doc) => ({
        ...doc.data(),
        id: doc.id,
      }))
      setWatchedList(moviesArray)
    })
    return unsubscribe
  }, [])

  // function handleChange(event) {
  //   const { value } = event.target
  //   setMovie(value)
  // }

  const handleRatingChange = (id, newRating) => {
    setWatchedList(
      watchedList.map((item) =>
        item.id === id ? { ...item, rating: newRating } : item
      )
    )
  }

  const listElements = watchedList.map((movie) => {
    return (
      <li key={movie.id} className="list-item">
        <a
          className="watched-title-link"
          href={`https://www.imdb.com/title/${movie.imdbID}`}
        >
          {movie.title}
        </a>
        <br />
        Year: {movie.year}
        <br />
        {`Rating:  `}
        <Stars
          updateRating={updateRating}
          id={movie.id}
          initialValue={movie.rating}
          imdbID={movie.imdbID}
          year={movie.year}
          onChange={(newRating) => handleRatingChange(movie.id, newRating)}
          getMovieRating={getMovieRating(movie.id)}
        />
      </li>
    )
  })

  async function addNewMovie(movie, imdbID, year) {
    const newMovie = {
      title: movie,
      rating: 0,
      imdbID: imdbID,
      year: year,
    }
    const newMovieRef = await addDoc(moviesCollection, newMovie)
    setCurrentMovieId(newMovieRef.id)
    setMovie("")
  }

  function updateRating(currentMovieId, newRating) {
    const docRef = doc(db, "movies", currentMovieId)
    updateDoc(docRef, { rating: newRating })
  }

  //GET rating from each movie in watchedList array from firebase
  async function getMovieRating(currentMovieId) {
    const docRef = doc(db, "movies", currentMovieId)
    const docSnap = await getDoc(docRef)
    if (docSnap.exists()) {
      const currentRating = docSnap.data().rating
      console.log("Document data:", currentRating)
    } else {
      console.log("No such document!")
    }
  }

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
                <Route
                  path="/search"
                  element={
                    <SearchPage
                      searchResults={searchResults}
                      setSearchResults={setSearchResults}
                      addNewMovie={addNewMovie}
                      listElements={listElements}
                    />
                  }
                />
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
          <StarRatings
            hover={hover}
            setMovieRating={setMovieRating}
            movieRating={movieRating}
            setHover={setHover}
          />
        </form>
      </div> */}
      {/* </main> */}
    </>
  )
}

export default App
