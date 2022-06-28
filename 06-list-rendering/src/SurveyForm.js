import React from "react"

export default class SurveyForm extends React.Component{

    //state 
    state={
        name: "",
        countries: "",
        fruits: "",
        colors: ""
    }

    updateFormField = (e) =>{
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    //non state variables
    countries=[
        {
            "display": "Singapore",
            "value": "singapore"
        },
        {
            "display": "Malaysia",
            "value": "malaysia"
        },
        {
            "display": "Indonesia",
            "value": "indonesia"
        },
        {
            "display": "USA",
            "value": "usa"
        }
    ]

    fruits=[
        {
            "display": "Apple",
            "value": "apple"
        },
        {
            "display": "Banana",
            "value": "banana"
        },
        {
            "display": "Cherries",
            "value": "cherries"
        }
    ]

    colors=[
        {
            "display": "Red",
            "value": "red"
        },
        {
            "display": "Green",
            "value": "green"
        },
        {
            "display": "Blue",
            "value": "blue"
        }
    ]

    renderColors(){
        let options = [];
        for (let color of this.colors){
            let e = (
                <React.Fragment key={color.value}>
                    <input name="colors" type="radio" value={color.value} checked={this.state.color===color.value} onChange={this.updateFormField}/>
                    <span>{color.display}</span>
                </React.Fragment>
            )
            options.push(e)
        }
        return options;
    }

    render(){
        return(
            <React.Fragment>
                <h2>Survey Form</h2>
                <div>
                    <label>Name:</label>
                    <input name="name" type="text" value={this.state.name} onChange={this.updateFormField}/>
                </div>
                <div>
                    <label>Favourite Color: </label>
                        {this.renderColors()}
                </div>
                <div>
                    <label>Countries: </label>
                    <select name="countries" value={this.state.countries} onChange={this.updateFormField}>
                        {this.countries.map((c)=>
                            <option key={c.value} value={c.value}>{c.display}</option>
                        )}
                    </select>
                </div>
                <div>
                    <label>Fruits: </label>
                    {this.fruits.map((f)=>(
                        // key should be put in the parent, not individual child
                        <React.Fragment key={f.value}> 
                            <input type="checkbox" name="fruits" checked={this.state.fruits.includes(f.value)} onChange={this.updateFormField}/>
                            <span>{f.display}</span>
                        </React.Fragment>
                    ))}
                </div>
            </React.Fragment>
        )
    }
}