import React, { useState, useEffect } from "react"
import { moviesCollection, db } from "../firebase.js"
import { updateDoc, docRef, doc, getDoc } from "firebase/firestore"
import { FaStar } from "react-icons/fa"

export const Stars = (props, { initialValue }) => {
  const [rating, setRating] = useState(initialValue)

  useEffect(() => {
    // Fetch the rating from Firestore document
    const fetchRating = async () => {
      try {
        const docSnap = await getDoc(doc(db, "movies", props.id))
        if (docSnap.exists()) {
          const { rating } = docSnap.data()
          setRating(rating)
        }
      } catch (error) {
        console.error("Error fetching rating:", error)
      }
    }
    fetchRating()
  }, [props.id])

  const handleRatingChange = (newRating) => {
    setRating(newRating)
    props.updateRating(props.id, newRating)
  }

  return (
    <span>
      {[...Array(10)].map((_, index) => (
        <span
          key={index}
          onClick={() => handleRatingChange(index + 1)}
          style={{
            cursor: "pointer",
            color: index < rating ? "#e2c82f" : "gray",
          }}
        >
          <FaStar size={18} />
        </span>
      ))}
      <hr className="hr1" />
    </span>
  )
}
