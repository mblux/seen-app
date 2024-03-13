import React from "react"
import SearchBar from "./SearchBar"
import SearchResultsList from "./SearchResultsList"
import Navbar from "./Navbar"
import MediaList from "./MediaList"
import "./SearchPage.css"
import { Container } from "react-bootstrap"
import App from "../App"

const SearchPage = (props) => {
  return (
    <Container
      className="d-flex align-items-center justify-content-center"
      style={{ minHeight: "100vh" }}
    >
      <main className="main--wrapper">
        <div className="search-bar-container">
          <SearchBar setSearchResults={props.setSearchResults} />
          <SearchResultsList
            searchResults={props.searchResults}
            addNewMovie={props.addNewMovie}
          />
        </div>
        <Navbar className="navbar nav" />
        <MediaList
          // resetWatchedList={resetWatchedList}
          listElements={props.listElements}
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
    </Container>
  )
}

export default SearchPage
