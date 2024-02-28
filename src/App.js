import './App.css';
import Navbar from "./components/Navbar"
import MediaList from "./components/MediaList"
import React from "react"
import {useEffect, useState} from "react"

function App() {

const[mediaName, setMediaName] = useState("")

const [watchedList, setWatchedList] = useState([])



function handleChange(event) {
  const {value, name} = event.target 
  setMediaName(value)
  console.log(watchedList)
}


function handleSubmit(event) {
event.preventDefault()
setWatchedList(oldList => [...oldList, mediaName])
}

const listElements = (watchedList.length > 0) && watchedList.map(watchedItem => (<li>{watchedItem}</li>))



  return (
    <main className="main--wrapper">
      <Navbar/>
      <MediaList listElements={listElements}/>
      <div className="input--form--container">
      <form className="title-form" onSubmit={handleSubmit}>
        <input
        type="text"
        placeholder="Title"
        className="title--form--input"
        name="title"
        onChange={handleChange}
        value={mediaName}
       
        
        />
        <button className="submit--btn">Submit</button>
      </form>
    </div> 
    </main>
  )
}

export default App
