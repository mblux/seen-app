import React from "react";

export default function MediaList(props) {
    return(
        <div className="medialist--container">
            <h2 className="medialist--header">
                Movie/Show Log
            </h2>
            <ul className="medialist--list">
                {props.listElements}
                
            </ul>           
            <button className="medialist--clear--button" 
            onClick={props.resetWatchedList}>Reset List</button>
        </div>
    )
}