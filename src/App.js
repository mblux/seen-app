import "./App.css"
import Navbar from "./components/Navbar"
import MediaList from "./components/MediaList"
import React from "react"
import SearchBar from "./components/SearchBar"
import { useEffect, useState } from "react"
import SearchResultsList from "./components/SearchResultsList"

console.log(process.env.REACT_APP_OMDB_API_KEY)

function App() {
  const [mediaName, setMediaName] = useState("")

  const [watchedList, setWatchedList] = useState([])

  const [searchResults, setSearchResults] = useState([])

  useEffect(() => console.log(watchedList), [watchedList])

  function handleChange(event) {
    const { value, name } = event.target
    setMediaName(value)
    console.log(watchedList)
  }

  function handleSubmit(event) {
    event.preventDefault()
    setWatchedList((oldList) => [...oldList, mediaName])
    setMediaName("")
  }

  function resetWatchedList() {
    setWatchedList([])
  }

  const listElements =
    watchedList.length > 0 &&
    watchedList.map((watchedItem) => <li>{watchedItem}</li>)

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
        <form className="title-form" onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Enter Title"
            className="title--form--input"
            name="title"
            onChange={handleChange}
            value={mediaName}
          />
          <button className="submit--btn">Add Movie</button>
        </form>
      </div>
    </main>
  )
}

export default App
