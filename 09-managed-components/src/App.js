import React from "react"
import SignupForm from "./SignupForm";
import TaskList from "./TaskList";
import "bootstrap/dist/css/bootstrap.min.css"


function App() {
  return (
   <React.Fragment>
    <h1>Managed Components</h1>
    
    <SignupForm/>
    <TaskList/>
   </React.Fragment>
  );
}

export default App;
