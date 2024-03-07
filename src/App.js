import "./App.css"
import Navbar from "./components/Navbar"
import MediaList from "./components/MediaList"
import React from "react"
import SearchBar from "./components/SearchBar"
import { useEffect, useState } from "react"
import SearchResultsList from "./components/SearchResultsList"
import { onSnapshot, addDoc } from "firebase/firestore"
import { moviesCollection } from "./firebase.js"
import StarRatings from "./components/StarRatings"
import { FaStar } from "react-icons/fa"

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
  const [movieId, setMovieId] = useState(watchedList[0]?.id | "")
  const [searchResults, setSearchResults] = useState([])
  const [movieRating, setMovieRating] = useState(null)
  const [hover, setHover] = useState(null)

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
  }

  function resetWatchedList() {
    setWatchedList([])
  }

  const listElements =
    watchedList.length > 0 &&
    watchedList.map((watchedItem) => (
      <li key={watchedItem.id}>{watchedItem.title}</li>
    ))

  async function addNewMovie(event) {
    event.preventDefault()
    const newMovie = {
      title: movie,
      body: "#Type your review here!",
      rating: movieRating,
    }
    const newMovieRef = await addDoc(moviesCollection, newMovie)
    setMovieId(newMovieRef.id)
    setMovie("")
  }

  return (
    <main className="main--wrapper">
      <div className="search-bar-container">
        <SearchBar setSearchResults={setSearchResults} />
        <SearchResultsList searchResults={searchResults} />
      </div>
      <Navbar />
      <MediaList
        resetWatchedList={resetWatchedList}
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
          <StarRatings
            hover={hover}
            setMovieRating={setMovieRating}
            movieRating={movieRating}
            setHover={setHover}
          />
        </form>
      </div>
    </main>
  )
}

export default App
