import React from "react"

import "./SearchResultsList.css"

const SearchResultsList = ({ searchResults }) => {
  return (
    <div className="results-list">
      {searchResults.map((result, id) => {
        return <div key={id}>{result.Title}</div>
      })}
    </div>
  )
}

export default SearchResultsList
