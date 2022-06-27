import React from "react"
//or 
//import {Component} from "react" to only import the component from react

export default class TickleBox extends React.Component{

    state = {
        "message" : ""
    }

    mouseOver = () => {
        this.setState({
            "message" : "THAT TICKLES!"
        })
    }

    mouseOut = () => {
        this.setState({
            "message" : ""
        })
    }

    render(){
        return(
            <div onMouseOver={this.mouseOver} onMouseOut={this.mouseOut} style={{
                "border": "1px solid red",
                "width": "100px",
                "height": "40px"
            }}>{this.state.message}
            </div>
        )
    }
}
