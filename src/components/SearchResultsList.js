import React from "react";

import "./SearchResultsList.css";

const SearchResultsList = ({ searchResults }) => {
  return (
    <div className="results-list">
      {searchResults.map((result) => {
        return (
          <div key={result.imdbID}>
            <a href={`https://www.imdb.com/title/${result.imdbID}`}>
              {result.Title} ({result.Year}){" "}
              <img
                className="movie-thumbnail"
                src={result.Poster}               
                // resizeMode="contain"
                alt="new"
              />
            </a>
          </div>
        );
      })}
    </div>
  );
};

export default SearchResultsList;
