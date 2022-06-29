import React from "react"
import "bootstrap/dist/css/bootstrap.min.css"
import TaskList from "./TaskList";

function App() {
  return (
    <React.Fragment>
      <h1>List CRUD</h1>
      <div className="container">
      <TaskList/>
      </div>
    </React.Fragment>
  );
}

export default App;
