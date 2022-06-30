import React from "react"
import "bootstrap/dist/css/bootstrap.min.css"
import TaskList from "./TaskList";
import BudgetTracker from "./BudgetTracker";

function App() {
  return (
    <React.Fragment>
      <h1>List CRUD</h1>
      <div className="container">
      <TaskList/>
      <hr></hr>
      {/* <BudgetTracker/> */}
      </div>
    </React.Fragment>
  );
}

export default App;
