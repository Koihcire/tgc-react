import React from "react"
import "bootstrap/dist/css/bootstrap.min.css"

export default function DisplayTask(props) {
    return (
        <React.Fragment>
            <li className="mt-2">
                {props.task.description}
                <input key={props.task.id} type="checkbox" className="form-check-input ms-3 mt-2" checked={props.task.done} onChange={() => {
                    props.updateTaskDone(props.task); //use closure function to pass in the t value into the function updateTaskDone
                }} />
                <button className="btn btn-sm btn-primary ms-2 mt-2" onClick={()=>{props.beginEditTask(props.task)}}
                > Edit</button>
            <button className="btn btn-sm btn-danger ms-2 mt-2" onClick={()=>{{props.beginDeleteTask(props.task)}}}
            >Delete</button>
        </li>
        </React.Fragment >
    )
}