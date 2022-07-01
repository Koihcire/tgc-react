import React from "react"
import "bootstrap/dist/css/bootstrap.min.css"
import DisplayTask from "./components/DisplayTask";
import DisplayEditTask from "./components/DisplayEditTask";
import DisplayDeleteTask from "./components/DisplayDeleteTask";
import DisplayAddNewTask from "./components/DisplayAddNewTask";

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
        taskBeingDeleted: null
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

        this.setState({
            tasks: [
                ...this.state.tasks.slice(0, index),
                clonedTask,
                ...this.state.tasks.slice(index + 1)
                // clonedTask
            ]
        })

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

    processDeleteTask = (task) => {
        //find index of task we want to delete
        let index = this.state.tasks.findIndex(t => t.id === task.id)
        //remove from the middle 
        const cloned = [
            ...this.state.tasks.slice(0, index),
            ...this.state.tasks.slice(index + 1)
        ]
        this.setState({
            tasks: cloned
        })
    }

    beginEditTask = (task) =>{
        this.setState({
            taskBeingEdited: task,
            modifiedTaskName: task.description
        })
    }

    beginDeleteTask = (task) =>{
        this.setState({
            taskBeingDeleted: task
        })
    }
    
    endDeleteTask = ()=>{
        this.setState({
            taskBeingDeleted:null
        })
    }

    render() {
        return (
            <React.Fragment>
                <h2>To Do List</h2>
                <ul>
                    {this.state.tasks.map(t => (<React.Fragment>
                        {
                            (() => {
                                if (this.state.taskBeingEdited != null && this.state.taskBeingEdited.id === t.id) {
                                    return <DisplayEditTask task={t}
                                                            modifiedTaskName={this.state.modifiedTaskName}
                                                            updateFormField={this.updateFormField}
                                                            updateTask={this.updateTask}/>
                                } else if (this.state.taskBeingDeleted != null && this.state.taskBeingDeleted.id === t.id) {
                                    return <DisplayDeleteTask task={t} 
                                                            description={t.description}
                                                            processDeleteTask={this.processDeleteTask}
                                                            endDeleteTask={this.endDeleteTask}/>
                                } else {
                                    return <DisplayTask task={t}  
                                                        updateTaskDone={this.updateTaskDone}
                                                        beginEditTask={this.beginEditTask}
                                                        beginDeleteTask={this.beginDeleteTask}/>
                                }
                            })()
                        }
                    </React.Fragment>))}
                </ul>

                <h4>Add a new task</h4>
                <DisplayAddNewTask newTaskName={this.state.newTaskName}
                                    updateFormField={this.updateFormField}
                                    addNewTask={this.addNewTask}/>
            </React.Fragment>
        )
    }
}