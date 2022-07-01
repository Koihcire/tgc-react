import React from "react"
import TaskList from "./TaskList";
import "bootstrap/dist/css/bootstrap.min.css"
import BudgetTracker from "./BudgetTracker";


function App() {
  return (
   <React.Fragment>
    <h1>Managed Components</h1>
    
    <TaskList/>
    <BudgetTracker/>
   </React.Fragment>
  );
}

export default App;
