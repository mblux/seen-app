import './App.css';
import InputBoxes from "./components/InputBoxes"
import Navbar from "./components/Navbar"
import MediaList from "./components/MediaList"
import React from "react"
import {useEffect, useState} from "react"

function App() {

const [watchedList, setWatchedList] = useState([]);

function createWatchedList() {
for(let i = 0; i < watchedList.length; i++) {
  setWatchedList(oldList => oldList.map(listItem => (<p>{listItem}</p>)))
}
}

console.log(watchedList)
  return (
    <main className="main--wrapper">
      <Navbar/>
      <MediaList/>
      <InputBoxes createWatchedList={createWatchedList}/>  
    </main>
  )
}

export default App
