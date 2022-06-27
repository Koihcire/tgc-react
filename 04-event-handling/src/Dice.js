import React from "react"

export default class Dice extends React.Component {

    state = {
        "number": Math.floor(Math.random() * 6) + 1
    }

    roll = () => {
        this.setState({
            "number": Math.floor(Math.random() * 6) + 1
        })
    }

    checkColor = () => {
        if (this.state.number === 1) {
            return "red" 
            }
        else if (this.state.number === 6){
            return "green"
        } 
        else {
            return "black"
        }
    }


    render() {
        return (
            <React.Fragment>
                <div onClick={this.roll} style={{
                    "border": "1px solid green",
                    "padding": "10px",
                    "width": "20px",
                    "color": this.checkColor()
                }}>{this.state.number}
                </div>
            </React.Fragment>
        )
    }
}