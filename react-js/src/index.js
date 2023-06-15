import React from "react"
import  ReactDOM  from "react-dom"
import Header from "./Header"
import './index.css'
import Center from "./Center"
import Bottom from "./Bottom"

function Main(){
  return (
    <div>
      <Header></Header>
      <Center></Center>
      <Bottom></Bottom>
    </div>
    
  )
}

ReactDOM.render(<Main></Main>, document.getElementById("root"))