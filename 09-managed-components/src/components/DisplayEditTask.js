import React from "react"
import "bootstrap/dist/css/bootstrap.min.css"

export default function DisplayEditTask(props) {

    return(
        <React.Fragment>
            <li className="mt-2">
                <input key={props.key} type="text" name="modifiedTaskName" value={props.modifiedTaskName} onChange={props.updateFormField} />
                <button className="btn btn-sm btn-primary ms-2" onClick={props.updateTask}>Update</button>
            </li>
        </React.Fragment>
    )
}