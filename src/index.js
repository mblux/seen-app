import React from "react"
import ReactDOM from "react-dom/client"
import "./index.css"
import "bootstrap/dist/css/bootstrap.min.css"
import App from "./App"
// import { createBrowserRouter, RouterProvider } from "react-router-dom"
// const router = createBrowserRouter([
//   { path: "/", element: <div>Login here!</div> },
// ])

const root = ReactDOM.createRoot(document.getElementById("root"))

root.render(
  <>
    <App />
  </>
)
