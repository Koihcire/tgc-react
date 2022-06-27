import React from "react"

export default class ContactForm extends React.Component{

    state = {
        "firstName": "",
        "lastName": "",
        "enquiry": "",
        "country": "",
    }

    updateFormField = (e) =>{
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    summary = () =>{
        alert(`Name: ${this.state.firstName} ${this.state.lastName}
        Enquiry: ${this.state.enquiry}
        Country: ${this.state.country}`
        )
    }

    render(){
        return(
            <React.Fragment>
                <div>
                    <label>First Name:</label>
                    <input type="text" name="firstName" className="form-control" value={this.state.firstName} onChange={this.updateFormField}/>
                </div>
                <div>
                    <label>Last Name:</label>
                    <input type="text" name="lastName" className="form-control" value={this.state.lastName} onChange={this.updateFormField}/>
                </div>
                <div>
                    <label>Country:</label>
                    <input type="radio" name="enquiry" value="support" checked={this.state.enquiry === "support"} onChange={this.updateFormField}/>Support 
                    <input type="radio" name="enquiry" value="sales" checked={this.state.enquiry === "sales"} onChange={this.updateFormField}/>Sales 
                    <input type="radio" name="enquiry" value="marketing" checked={this.state.enquiry === "marketing"} onChange={this.updateFormField}/>Marketing
                </div>
                <div>
                    <label>Country</label>
                    <select name="country" value={this.state.country} onChange={this.updateFormField}>
                        <option value="singapore">Singapore</option>
                        <option value="malaysia">Malaysia</option>
                        <option value="thailand">Thailand</option>
                    </select>
                </div>
                <button onClick={this.summary} disabled={!this.state.firstName || !this.state.lastName || !this.state.enquiry}>Submit</button>

            </React.Fragment>
        )
    }
}