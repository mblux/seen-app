import React from "react";

import "./SearchResultsList.css";

const SearchResultsList = ({ searchResults }) => {
  return (
    <div className="results-list">
      {searchResults.map((result) => {
        return (
          <div className="movie-link-wrapper" key={result.imdbID}>
            <a className="movie-thumb-and-link" href={`https://www.imdb.com/title/${result.imdbID}`}>
              
              <img
                className="movie-thumbnail"
                src={result.Poster}               
                // resizeMode="contain"
                alt="new"
              />
              <span className="movie-link-text">{result.Title} ({result.Year}){" "}</span>
            </a>
          </div>
        );
      })}
    </div>
  );
};

export default SearchResultsList;
