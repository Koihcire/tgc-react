import React from "react"
import axios from "axios"

export default class SurveyForm extends React.Component{

    //state 
    state={
        name: "",
        countries: "",
        fruits: "",
        colors: "",
        all_countries:[],
        all_fruits: [],
        all_colors: []
    }

    updateFormField = (e) =>{
        if (e.target.type == "checkbox"){
            let currentValues = this.state[e.target.name];
            let modifiedValues;
            if (!currentValues.includes(e.target.value)){
                modifiedValues = [...currentValues, e.target.value];
            } else {
                modifiedValues = currentValues.filter((element)=>{
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

    renderColors(){
        let options = [];
        for (let color of this.state.all_colors){
            let e = (
                <React.Fragment key={color.value}>
                    <input name="colors" type="radio" value={color.value} checked={this.state.colors===color.value} onChange={this.updateFormField}/>
                    <span>{color.display}</span>
                </React.Fragment>
            )
            options.push(e)
        }
        return options;
    }

    async componentDidMount(){
        let r = await axios.get("./json/colors.json");
        let all_colors = r.data;

        r = await axios.get("./json/countries.json");
        let all_countries = r.data;

        r = await axios.get("./json/fruits.json");
        let all_fruits = r.data;

        this.setState({
            "all_colors": all_colors,
            "all_countries": all_countries,
            "all_fruits": all_fruits
        })
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
                    <select name="countries" value={this.state.country} onChange={this.updateFormField}>
                        {this.state.all_countries.map((c)=>
                            <option key={c.value} value={c.value}>{c.display}</option>
                        )}
                    </select>
                </div>
                <div>
                    <label>Fruits: </label>
                    {this.state.all_fruits.map((f)=>(
                        // key should be put in the parent, not individual child
                        <React.Fragment key={f.value}> 
                            <input type="checkbox" name="fruits" value={f.value} checked={this.state.fruits.includes(f.value)} onChange={this.updateFormField}/>
                            <span>{f.display}</span>
                        </React.Fragment>
                    ))}
                </div>
            </React.Fragment>
        )
    }
}