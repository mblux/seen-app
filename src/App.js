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
  getDoc,
  deleteDoc,
  setDoc,
} from "firebase/firestore"
import { moviesCollection, db } from "./firebase.js"
import { Stars } from "./components/Stars.js"
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
    <main className="main--wrapper">
      <div className="search-bar-container">
        <SearchBar setSearchResults={setSearchResults} />
        <SearchResultsList
          searchResults={searchResults}
          addNewMovie={addNewMovie}
        />
      </div>
      <Navbar />
      <MediaList
        // resetWatchedList={resetWatchedList}
        listElements={listElements}
      />
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
    </main>
  )
}

export default App
