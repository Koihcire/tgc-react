import React from "react"

export default class NumberBox extends React.Component {

    state = {
        "count": this.props.initialValue
    }

    add = () => {
        // alert("clicked")
        this.setState({
            "count": this.state.count + 1
        })
    }

    subtract = () => {
        this.setState({
            "count": this.state.count - 1
        })
    }

    render() {
        return (
            <React.Fragment>
                <div style={{"display": "flex"}}>
                    <button onClick={this.subtract} className="btn">-</button>
                    <div style={{
                        "border": "1px solid black",
                        "padding": "10px",
                        "width": "20px"
                    }}>{this.state.count}</div>
                    <button onClick={this.add} className="btn">+</button>
                </div>

            </React.Fragment>

        )
    }
}