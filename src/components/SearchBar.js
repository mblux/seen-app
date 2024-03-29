import React, { useState } from "react"
import { FaSearch } from "react-icons/fa"
import "./SearchBar.css"

export default function SearchBar({ setSearchResults }) {
  const [input, setInput] = useState("")

  const omdbWebsite =
    "https://www.omdbapi.com/?apikey=" +
    process.env.REACT_APP_OMDB_API_KEY +
    "&s="

  console.log(omdbWebsite)

  const fetchData = (value) => {
    fetch(omdbWebsite + value)
      .then((response) => response.json())
      .then((json) => {
        if (input.length > 2) {
          const objArr = json.Search
          const results = objArr.filter((movie) => {
            return (
              movie.Title.toLowerCase().includes(input.toLowerCase()) &&
              movie.Year &&
              movie.imdbID &&
              movie.Type &&
              movie.Poster
            )
          })
          results && setSearchResults(results)
        }
      })

      .catch((error) => console.log(error))
  }

  const handleChange = (value) => {
    setInput(value)
    fetchData(value)
    if (value.length < 2) {
      setSearchResults([])
    }
  }
  return (
    <div className="search-input-wrapper">
      <FaSearch id="search-icon" />
      <input
        className="search-input-bar"
        placeholder="Search for your favorite movie or show"
        value={input}
        onChange={(event) => handleChange(event.target.value)}
      ></input>
    </div>
  )
}
