import React from "react";

export default function InputBoxes(props) {

function handleClick(event) {
    const {name, value} = [event.target]
    console.log(name)

}

    return(
    <div className="input--form--wrapper">
    <form>
        <label>Enter a movie or show: 
            <br/>
    <input 
    type="text" 
    name="name"
    />
        </label>
        <br/>

        
        <input type="submit" name="submitButton"  onClick={handleClick} />
    </form>
    </div>
    )
}