import React from "react"

export default class RestaurantBookingForm extends React.Component {
    //define state variables
    state = {
        firstName: "",
        lastName: "",
        seating: "",
        smoking: "non-smoking",
        appetizer: []
    }

    seating = [
        {
            "display": "Outdoors",
            "value": "outdoors"
        },
        {
            "display": "Indoors",
            "value": "indoors"
        },
        {
            "display": "VIP Indoors",
            "value": "vip indoors"
        }
    ]

    smoking = [
        {
            "display": "Non-Smoking",
            "value": "non-smoking"
        },
        {
            "display": "Smoking",
            "value": "smoking"
        }
    ]

    appetizer = [
        {
            "display": "Raw Sashimi",
            "value": "raw sashimi"
        },
        {
            "display": "Salad",
            "value": "salad"
        },
        {
            "display": "Fried Cuttlefish",
            "value": "fried cuttlefish"
        },
        {
            "display": "Peanuts",
            "value": "peanuts"
        }
    ]

    updateFormField = (e) => {
        if (e.target.type == "checkbox") {
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

    // updateAppetizer = (e) => {
    //     let currentValues = this.state[e.target.name];
    //     let modifiedValues;
    //     if (!currentValues.includes(e.target.value)) {
    //         modifiedValues = [...currentValues, e.target.value];
    //     } else {
    //         modifiedValues = currentValues.filter((element) => {
    //             return element !== e.target.value
    //         })
    //     }
    //     this.setState({
    //         [e.target.name]: modifiedValues
    //     })
    // }

    render() {
        return (
            <React.Fragment>
                <h2>Restaurant Booking Form</h2>
                {/* first name input */}
                <div>
                    <label>First Name: </label>
                    <input type="text" name="firstName" key="firstName" value={this.state.firstName} onChange={this.updateFormField} />
                </div>
                {/* last name input */}
                <div>
                    <label>Last Name: </label>
                    <input type="text" name="lastName" key="lastName" value={this.state.lastName} onChange={this.updateFormField} />
                </div>
                {/* seatin preference input radio*/}
                <div>
                    <label>Seating Preference: </label>
                    {this.seating.map((s) => (
                        <React.Fragment key={s.value}>
                            <input type="radio" name="seating" value={s.value} checked={this.state.seating === s.value} onChange={this.updateFormField} />
                            <span>{s.display}</span>
                        </React.Fragment>
                    ))}
                </div>
                {/* smoking preference input dropdown*/}
                <div>
                    <label>Smoking Preference: </label>
                    <select name="smoking" value={this.state.smoking} onChange={this.updateFormField}>
                        {this.smoking.map((s) =>
                            <option key={s.value} value={s.value}>{s.display}</option>
                        )}
                    </select>
                </div>
                {/* appetizer preference input checkbox */}
                <div>
                    <label>Appetizer Preference: </label>
                    {this.appetizer.map((a) => (
                        <React.Fragment key={a.value}>
                            <input type="checkbox" name="appetizer" value={a.value} checked={this.state.appetizer.includes(a.value)} onChange={this.updateFormField} />
                            <span>{a.display}</span>
                        </React.Fragment>
                    ))}
                </div>
            </React.Fragment>
        )
    }
}