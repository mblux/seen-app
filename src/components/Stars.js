import React, { useState, useEffect } from "react"
import { moviesCollection, db } from "../firebase.js"
import { updateDoc, docRef, doc } from "firebase/firestore"

export const Stars = (props, { id, updateRating, initialValue }) => {
  const [rating, setRating] = useState(initialValue)

  const handleStarRating = async (newRating) => {
    props.getMovieRating(props.id)
    setRating(newRating)
    await props.updateRating(props.id, newRating)
  }

  return (
    <div>
      {[...Array(5)].map((_, index) => (
        <span
          key={index}
          onClick={() => handleStarRating(index + 1)}
          style={{ cursor: "pointer", color: index < rating ? "gold" : "gray" }}
        >
          ★
        </span>
      ))}
    </div>
  )
}
