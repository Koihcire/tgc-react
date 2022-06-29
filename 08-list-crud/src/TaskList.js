import React from "react"
import axios from "axios"

export default class TaskList extends React.Component{

    state={
        tasks: [
            {
                id: 1,
                description: "Walk the dog",
                done: false
            },
            {
                id: 2,
                description: "Water the plants",
                done: false
            },
            {
                id: 3,
                description: "Pay the bills",
                done: false
            }
        ],
        newTaskName: "",
    }

    updateFormField = (e) => {
        if (e.target.type === "checkbox") {
            let currentValues = this.state[e.target.name];
            let modifiedValues;
            if (!currentValues.includes(e.target.value)) {
                modifiedValues = [...currentValues, e.target.value];
            } else {
                modifiedValues = currentValues.filter((element) => {
                    return element !== e.target.value
                })
            }
            this.setState({
                [e.target.name]: modifiedValues
            })
        } else {
            this.setState({
                [e.target.name]: e.target.value
            })
        }
    }

    addNewTask = () => {
        let newTask = {
            id: Math.floor(Math.random()*100 + 1),
            description: this.state.newTaskName,
            done: false
        }
        //ADDING TO TASKS ARRAY (CREATE)
        //1. clone the array
        let cloned = this.state.tasks.slice();
        //2. modify cloned array
        cloned.push(newTask)
        //3. replace cloned array into state
        this.setState({
            "tasks": cloned
        })
    }

    updateTaskDone = (task) =>{
        // alert("done")
        //objects are immutable
        //1. clone the object. re-declare the done key value pair to over write the existing done key value pair
        let clonedTask = {...task, done: !task.done};
        console.log(clonedTask)
        //replace the element into the middle of an array
        //1. find the index of the modified task. indexof wont work...cos not string
        let index = this.state.tasks.findIndex(function(t){
            if (t.id === clonedTask.id){
                return true;
            } else {
                return false;
            }
        })
        console.log(index)
        //non functional updating an array
        // let clonedTaskArray = this.state.tasks.slice();
        // clonedTaskArray[index] = clonedTask;
        // this.setState({
        //     tasks: clonedTaskArray
        // })
        this.setState({
            tasks: [
                    ...this.state.tasks.slice(0, index),
                    clonedTask,
                    ...this.state.tasks.slice(index+1)
                    ]
        })

    }   
    
    render(){
        return(
            <React.Fragment>
                <h2>To Do List</h2>
                <ul>
                    {this.state.tasks.map(t=>(<React.Fragment>
                        <li>
                            {t.description}
                            <input key={(t.id)} type="checkbox" className="form-check-input ms-3 mt-2" checked={t.done} onChange={()=>{
                                this.updateTaskDone(t); //use closure function to pass in the t value into the function updateTaskDone
                            }}/>
                            <button className="btn btn-sm btn-primary ms-2 mt-2">Edit</button>
                            <button className="btn btn-sm btn-danger ms-2 mt-2">Delete</button>
                        </li>
                    </React.Fragment>))}
                </ul>

                <h2>Add a new task</h2>
                <div>
                    <label>Task Name: </label>
                    <input type="text" name="newTaskName" className="form-control" value={this.state.newTaskName} onChange={this.updateFormField}/>
                    <button className="btn btn-sm btn-primary mt-2" onClick={this.addNewTask}>Add</button>
                </div>
            </React.Fragment>
        )
    }
}