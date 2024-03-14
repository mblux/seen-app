import React from "react"
import "./MediaList.css"

export default function MediaList(props, { listElements }) {
  return (
    <div className="medialist--container">
      <h2 className="medialist--header">My Movies and Shows</h2>
      <ul className="medialist--list">{props.listElements}</ul>
      <button
        className="medialist--clear--button"
        // onClick={props.resetWatchedList}
      ></button>
    </div>
  )
}
