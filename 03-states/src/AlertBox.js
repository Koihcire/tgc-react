import React from "react";

export default class AlertBox extends React.Component{
    state = {
        "message": this.props.initialValue
    }

    render(){
        return(
        <div style={{
            "border" : "4px solid black"
        }}>
            {this.state.message}
        </div>
        )
    }
}