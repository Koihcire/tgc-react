import React from "react"

export default class ContactForm extends React.Component {

    state = {
        firstName: "",
        lastName: "",
        enquiry: "",
        country: "singapore",
        contact: [],
        hasSubmitted: false
        // have to put singapore as the default value because if user did not "change" this on the form it will return empty
    }

    updateFormField = (e) => {
        this.setState({
            // same as firstName: e.target.value (note that firstName (name) in the form must be same as firstName (key) in state)
            [e.target.name]: e.target.value
        })
    }

    summary = () => {
        alert(`Name: ${this.state.firstName} ${this.state.lastName}
        Enquiry: ${this.state.enquiry}
        Country: ${this.state.country}`
        )
    }
    // how to update an array in react (1. clone the original array. 2. update the cloned array. 3. set the cloned array back into the state)
    // slicing an array without arguments clones the array
    updateContact = (e) => {
        let currentValues = this.state[e.target.name];
        let modifiedValues;
        //if currentValues does not include target value
        if (!currentValues.includes(e.target.value)) {
            // wtf is ...? spread operator copy all the items in the an array and spreads it out 
            // eg country = ['sg','my','in'], console.log(...country) will return sg my in; vs ['sg', 'my', 'in']
            //add the target value to the cloned modifiedValues to be setState later
            modifiedValues = [...currentValues, e.target.value];
        } else {
            modifiedValues = currentValues.filter((element) => {
                return element !== e.target.value
            })
        }
        this.setState({
            [e.target.name]: modifiedValues
        })
    }

    // HOW TO UPDATE ARRAYS IN REACT JS
    updateContactStraightforward = (e) => {
        if (this.state.contacts.includes(e.target.value)) {
            // specify which index to remove
            let indexToRemove = this.state.contacts.indexOf(e.target.value);
            //1. clone the original array
            let cloned = this.state.contact.slice();
            //2. update the cloned array (remove the element at index.remove)
            cloned.splice(indexToRemove,1);
            //3. set the cloned array back into the state
            this.setState({
                "contact": cloned
            })
        } else {
            // 1. clone the original array
            let cloned = this.state.contact.slice();
            // 2. update the cloned array (add element into array)
            cloned.push(e.target.value)
            // 3. set the cloned array back into the state
            this.setState({
                contact: cloned
            })
        }
    }

    // VALIDATION
    getNameError = () =>{
        if (this.state.name.length < 3) {
            return "the name must have more than more 3 characters";
        } else if (this.state.name.length >20) {
            return "the name must not exceed 20 characters";
        } else {
            return null;
        }
    }
    submit = () =>{
        if (!this.getNameError()) {
            alert ("all ok")
        }
    }
    getEmailError = () => {
        if (this.state.email.includes("@")){
            return "this email is not valid"
        } else {
            return null
        }
    }

    render() {
        return (
            <React.Fragment>
                <div>
                    <label>First Name:</label>
                    <input type="text" name="firstName" className="form-control" value={this.state.firstName} onChange={this.updateFormField} />
                </div>
                <div>
                    <label>Last Name:</label>
                    <input type="text" name="lastName" className="form-control" value={this.state.lastName} onChange={this.updateFormField} />
                    {this.getNameError() && this.state.hasSubmitted ? <span className="error">{this.getNameError}</span> : null}
                </div>
                <div>
                    <label>Enquiry:</label>
                    <input type="radio" name="enquiry" value="support" checked={this.state.enquiry === "support"} onChange={this.updateFormField} />Support
                    <input type="radio" name="enquiry" value="sales" checked={this.state.enquiry === "sales"} onChange={this.updateFormField} />Sales
                    <input type="radio" name="enquiry" value="marketing" checked={this.state.enquiry === "marketing"} onChange={this.updateFormField} />Marketing
                </div>
                <div>
                    <label>Country</label>
                    <select name="country" value={this.state.country} onChange={this.updateFormField}>
                        <option value="singapore">Singapore</option>
                        <option value="malaysia">Malaysia</option>
                        <option value="thailand">Thailand</option>
                    </select>
                </div>
                <div>
                    <label>How would you like to be contacted:</label>
                    <input type="checkbox" name="contact" value="email" checked={this.state.contact.includes("email")} onChange={this.updateContact} />Email
                    <input type="checkbox" name="contact" value="phone" checked={this.state.contact.includes("phone")} onChange={this.updateContact} />Phone
                    <input type="checkbox" name="contact" value="slowMail" checked={this.state.contact.includes("slowMail")} onChange={this.updateContact} />Slow Mail
                </div>
                <input type="submit" onClick={this.summary} disabled={!this.state.firstName || !this.state.lastName || !this.state.enquiry || !this.state.contact} />

            </React.Fragment>
        )
    }
}