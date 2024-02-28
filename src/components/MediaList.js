import React from "react";

export default function MediaList(props) {
    return(
        <div className="medialist--container">
            <h2 className="medialist--header">
                Movies I Watched
            </h2>
            <ul className="medialist--list">
                {props.listElements}
                
            </ul>           
        </div>
    )
}