import React from 'react'; //like const React = require ("react")
import logo from './logo.svg'
import "./style.css";

//create a react component
function App(){
  //app.js is the entry point to all react app 
  //react component always must return jsx
  return(
    // jsx component can only have 1 parent. note that inline style follows js camel case
    <React.Fragment>
      <h1 style={{color: "blue", backgroundColor: "yellow"}}>hello world</h1>
      <p>what is up everyone</p>
      {/* first method for importing pictures */}
      <img src={logo}/> 
      {/* second method for importing pictures */}
      <img src={require("./singapore-background.jpeg")}/>
    </React.Fragment>
  )
}

//must always export
export default App;