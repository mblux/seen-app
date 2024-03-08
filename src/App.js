import "./App.css"
import Navbar from "./components/Navbar"
import MediaList from "./components/MediaList"
import React from "react"
import SearchBar from "./components/SearchBar"
import { useEffect, useState } from "react"
import SearchResultsList from "./components/SearchResultsList"
import {
  onSnapshot,
  addDoc,
  updateDoc,
  doc,
  deleteDoc,
  setDoc,
} from "firebase/firestore"
import { moviesCollection, db } from "./firebase.js"
import { Stars } from "./components/Stars.js"

//#TODO: Add a button to add a movie FROM THE SEARCH BAR to the watched list!!!!

//#TODO: Add a button to add a movie FROM THE SEARCH BAR to the watched list!!!!

//#TODO: Add a button to add a movie FROM THE SEARCH BAR to the watched list!!!!

//#TODO: Add a button to add a movie FROM THE SEARCH BAR to the watched list!!!!

//#TODO: Add a button to add a movie FROM THE SEARCH BAR to the watched list!!!!

//#TODO: Add a button to add a movie FROM THE SEARCH BAR to the watched list!!!!

//#TODO: Add a button to add a movie FROM THE SEARCH BAR to the watched list!!!!

function App() {
  const [movie, setMovie] = useState("")
  const [watchedList, setWatchedList] = useState([])
  const [currentMovieId, setCurrentMovieId] = useState("")
  const [searchResults, setSearchResults] = useState([])

  //#TODO: Add a button to add a movie FROM THE SEARCH BAR to the watched list!!!!
  //#TODO: Add a button to add a movie FROM THE SEARCH BAR to the watched list!!!!
  //#TODO: Add a button to add a movie FROM THE SEARCH BAR to the watched list!!!!

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

  function handleChange(event) {
    const { value } = event.target
    setMovie(value)
    console.log(watchedList)
  }

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
        Title: {movie.title}
        <br />
        Rating:{" "}
        <Stars
          updateRating={updateRating}
          id={movie.id}
          initialValue={movie.rating}
          onChange={(newRating) => handleRatingChange(movie.id, newRating)}
        />
      </li>
    )
  })

  async function addNewMovie(event) {
    event.preventDefault()
    const newMovie = {
      title: movie,
      rating: 0,
    }
    const newMovieRef = await addDoc(moviesCollection, newMovie)
    setCurrentMovieId(newMovieRef.id)
    setMovie("")
  }

  function updateRating(currentMovieId, newRating) {
    const docRef = doc(db, "movies", currentMovieId)
    updateDoc(docRef, { rating: newRating })
  }

  return (
    <main className="main--wrapper">
      <div className="search-bar-container">
        <SearchBar setSearchResults={setSearchResults} />
        <SearchResultsList searchResults={searchResults} />
      </div>
      <Navbar />
      <MediaList
        // resetWatchedList={resetWatchedList}
        listElements={listElements}
      />
      <div className="input--form--container">
        <form onSubmit={addNewMovie} className="title-form">
          <input
            type="text"
            placeholder="Enter Title"
            className="title--form--input"
            name="title"
            id={movie}
            onChange={handleChange}
            value={movie}
          />
          <button className="submit--btn">Add Movie</button>
        </form>
      </div>
    </main>
  )
}

export default App
