import React, { useState, useEffect } from "react"
import { moviesCollection, db } from "../firebase.js"
import { updateDoc, docRef, doc } from "firebase/firestore"

export const Stars = (props, { initialValue }) => {
  const [rating, setRating] = useState(initialValue)

  const handleRatingChange = (newRating) => {
    setRating(newRating)
    props.updateReviewStars(props.id, newRating)
  }

  return (
    <div>
      {[...Array(5)].map((_, index) => (
        <span
          key={index}
          onClick={() => handleRatingChange(index + 1)}
          style={{ cursor: "pointer", color: index < rating ? "gold" : "gray" }}
        >
          ★
        </span>
      ))}
    </div>
  )
}
