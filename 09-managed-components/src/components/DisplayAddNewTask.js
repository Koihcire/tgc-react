import React from "react"
import "bootstrap/dist/css/bootstrap.min.css"

export default function DisplayAddNewTask(props){
    return(
        <React.Fragment>
            <label>Task Name: </label>
                    <input type="text" name="newTaskName" className="form-control" value={props.newTaskName} onChange={props.updateFormField} />
                    <button className="btn btn-sm btn-primary mt-2" onClick={props.addNewTask}>Add</button>
        </React.Fragment>
    )
}