import React from "react"

import "./SearchResultsList.css"

const SearchResultsList = ({ searchResults, addNewMovie }, props) => {
  return (
    <div className="results-list">
      {searchResults.map((result) => {
        return (
          result && (
            <div
              className="movie-link-wrapper"
              key={result.imdbID}
              onClick={() =>
                addNewMovie(result.Title, result.imdbID, result.Year)
              }
            >
              <span className="movie-thumb-and-link">
                <img
                  className="movie-thumbnail"
                  src={result.Poster}
                  resizeMode="contain"
                  alt="new"
                />
                <span className="movie-link-text">
                  {result.Title} ({result.Year}){" "}
                  <p className="imdb-link-small-text">
                    <a href={`https://www.imdb.com/title/${result.imdbID}`}>
                      imdb
                    </a>
                  </p>
                </span>
              </span>
            </div>
          )
        )
      })}
    </div>
  )
}

export default SearchResultsList
