import React from "react"
import axios from "axios"
import "bootstrap/dist/css/bootstrap.min.css"

export default class TaskList extends React.Component {

    state = {
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
        taskBeingEdited: null, //alternatively, store the id of the task that is being edited (lab sheet example)
        modifiedTaskName: "",
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
            id: Math.floor(Math.random() * 100 + 1),
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

    updateTaskDone = (task) => {
        // alert("done")
        //objects are immutable
        //1. clone the object. re-declare the done key value pair to over write the existing done key value pair
        let clonedTask = { ...task, done: !task.done };
        console.log(clonedTask)
        //replace the element into the middle of an array
        //1. find the index of the modified task. indexof wont work...cos not string
        let index = this.state.tasks.findIndex(function (t) {
            if (t.id === clonedTask.id) {
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
                ...this.state.tasks.slice(index + 1)
            ]
        })

    }

    displayTask = (task) => {
        return (
            <li>
                {task.description}
                <input key={(task.id)} type="checkbox" className="form-check-input ms-3 mt-2" checked={task.done} onChange={() => {
                    this.updateTaskDone(task); //use closure function to pass in the t value into the function updateTaskDone
                }} />
                <button className="btn btn-sm btn-primary ms-2 mt-2" onClick={() => {
                    this.setState({
                        taskBeingEdited: task,
                        modifiedTaskName: task.description
                    }) //can write this function directly if the edit button is the only place calling this function
                }}>Edit</button>
                <button className="btn btn-sm btn-danger ms-2 mt-2" onClick={()=>{
                    this.deleteTask(task)
                }}>Delete</button>
            </li>
        )

    }

    updateTask = () => {
        const modifiedTask = {
            ...this.state.taskBeingEdited,
            description: this.state.modifiedTaskName
        }
        //update in the middle of an array
        //0. find the index of the task that we want to update
        let index = this.state.tasks.findIndex(t => t.id === modifiedTask.id) //arrow function returns true
        //manual linear search
        // let index=-1; //no such index at -1 means not found
        // for (let i=0, i < this.state.tasks.length, i++){
        //     if (this.state.tasks[i].id === modifiedTask.id){
        //         index = i            
        //     } else {
        //         break
        //     }
        // }
        
        //1. clone the existing array
        let cloned = this.state.tasks.slice()
        //2. modify the array
        cloned.splice(index, 1, modifiedTask)
        //3. replace the original array in the state with the modified one
        this.setState({
            "tasks": cloned,
            taskBeingEdited: null
        })
    }

    displayEditTask(task) {
        return (
            <li className="=mt-2">
                <input key={task.id} type="text" name="modifiedTaskName" value={this.state.modifiedTaskName} onChange={this.updateFormField} />
                <button className="btn btn-sm btn-primary" onClick={this.updateTask}>Update</button>
            </li>
        )
    }

    deleteTask=(task)=>{
        //find index of task we want to delete
        let index = this.state.tasks.findIndex(t => t.id === task.id)
        //remove from the middle 
        const cloned = [
            ...this.state.tasks.slice(0,index),
            ...this.state.tasks.slice(index+1)
        ]
        this.setState({
            tasks: cloned
        })
    }

    render() {
        return (
            <React.Fragment>
                <h2>To Do List</h2>
                <ul>
                    {this.state.tasks.map(t => (<React.Fragment>

                        {this.state.taskBeingEdited === null || this.state.taskBeingEdited.id !== t.id ?
                            this.displayTask(t)
                            :
                            this.displayEditTask(t)}
                    </React.Fragment>))}
                </ul>

                <h4>Add a new task</h4>
                <div>
                    <label>Task Name: </label>
                    <input type="text" name="newTaskName" className="form-control" value={this.state.newTaskName} onChange={this.updateFormField} />
                    <button className="btn btn-sm btn-primary mt-2" onClick={this.addNewTask}>Add</button>
                </div>
            </React.Fragment>
        )
    }
}