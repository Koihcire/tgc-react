import React from 'react'

export default class NumberBox extends React.Component{
    state = {
        count: this.props.initialValue
    }
    
    click = () => {
        alert("clicked")
    }

    render(){
        return (
            <div onClick={this.click} style={{
                "border" :"1px solid black",
                "padding" :"10px",
                "width" :"20px"
            }}>{this.state.count}</div>
        )
    }
}