import React from "react"
import { FaStar } from "react-icons/fa"

const StarRatings = ({ setMovieRating, setHover, hover, movieRating }) => {
  return (
    <>
      <span className="rating-wrapper">
        {[...Array(5)].map((star, index) => {
          const currentRating = index + 1
          return (
            <label>
              <input
                type="radio"
                name="rating"
                value={currentRating}
                onClick={() => setMovieRating(currentRating)}
              />
              <FaStar
                className="star"
                size={30}
                color={
                  currentRating <= (hover || movieRating)
                    ? "#ffc107"
                    : "#e4e5e9"
                }
                onMouseEnter={() => setHover(currentRating)}
                onMouseLeave={() => setHover(null)}
              />
            </label>
          )
        })}
      </span>
    </>
  )
}

export default StarRatings
