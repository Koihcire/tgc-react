import React from "react"
import "bootstrap/dist/css/bootstrap.min.css"

export default class BudgetTracker extends React.Component {

    state = {
        expenses: [
            {
                _id: 1,
                item: "Grab to TGC",
                amount: 1950,
                category: "others",
                reconciled: false
            },
            {
                _id: 2,
                item: "Watch top gun in IMAX",
                amount: 1700,
                category: "others",
                reconciled: false
            },
            {
                _id: 3,
                item: "Macbook Air",
                amount: 160000,
                category: "others",
                reconciled: false
            }
        ],
        allCategories: [
            {
                "display": "Transport",
                "value": "transport"
            },
            {
                "display": "Entertainment",
                "value": "entertainment"
            },
            {
                "display": "Food",
                "value": "food"
            },
            {
                "display": "Bills",
                "value": "bills"
            },
            {
                "display": "Loans",
                "value": "loans"
            },
            {
                "display": "Others",
                "value": "others"
            },
        ],
        newExpenseItem: "",
        newExpenseAmount: "",
        newExpenseCategory: "others",

        expenseBeingEdited: null,
        modifiedExpenseItem: "",
        modifiedExpenseAmount: "",
        modifiedExpenseCategory: "",

        expenseBeingDeleted: null,
    }

    updateFormField = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    updateReconciled = (expense) => {
        let clonedExpense = {
            ...expense, reconciled: !expense.reconciled
        };
        // console.log(clonedExpense)

        let index = this.state.expenses.findIndex(function (e) {
            if (e._id === clonedExpense._id) {
                return true;
            } else {
                return false;
            }
        })
        // console.log(index)

        this.setState({
            expenses: [
                ...this.state.expenses.slice(0, index),
                clonedExpense,
                ...this.state.expenses.slice(index + 1)
            ]
        })
    }

    addNewExpense = () => {
        let newExpense = {
            _id: Math.floor(Math.random() * 100 + 1),
            item: this.state.newExpenseItem,
            amount: this.state.newExpenseAmount*100,
            category: this.state.newExpenseCategory,
            reconciled: false
        }

        let cloned = this.state.expenses.slice();
        cloned.push(newExpense);
        this.setState({
            expenses: cloned,
            newExpenseItem: "",
            newExpenseAmount: "",
            newExpenseCategory: "others"
        })


    }

    updateExpense = () => {
        const modifiedExpense = {
            ...this.state.expenseBeingEdited,
            item: this.state.modifiedExpenseItem,
            amount: this.state.modifiedExpenseAmount,
            category: this.state.modifiedExpenseCategory
        }

        let index = this.state.expenses.findIndex(e => e._id === modifiedExpense._id)

        let cloned = this.state.expenses.slice()
        cloned.splice(index, 1, modifiedExpense)

        this.setState({
            "expenses": cloned,
            expenseBeingEdited: null
        })
    }

    displayEditExpense = (expense) => {
        return (
            <div className="card">
                <div className="card-body">
                    <h5 className="card-title">
                        Item: <input type="text" name="modifiedExpenseItem" className="form-control" value={this.state.modifiedExpenseItem} onChange={this.updateFormField} />
                    </h5>
                    <h6>
                        Amount: <input type="text" name="modifiedExpenseAmount" className="form-control" value={this.state.modifiedExpenseAmount} onChange={this.updateFormField} />
                    </h6>
                    <div>
                        <label>Category:</label>
                        <select name="modifiedExpenseCategory" value={this.state.modifiedExpenseAmount} onChange={this.updateFormField}>
                            {this.state.allCategories.map(c => (
                                <option key={c.value} value={c.value}>{c.display}</option>
                            ))}
                        </select>
                    </div>
                    <button className="btn btn-sm btn-primary mt-2" onClick={this.updateExpense}>Update</button>
                </div>
            </div>
        )
    }

    displayExpenses = (expense) => {
        return (
            <div className="card mt-2">
                <div className="card-body">
                    <h5 className="card-title">{expense.item}</h5>
                    <h6>${(expense.amount / 100).toFixed(2)}</h6>
                    <h6>Category: {expense.category}</h6>
                    <div>
                        <input key={expense._id} type="checkbox" checked={expense.reconciled} onChange={() => {
                            this.updateReconciled(expense);
                        }} /> Reconciled
                    </div>
                    <div className="mt-2">
                        <button className="btn btn-sm btn-primary" onClick={() => {
                            this.setState({
                                expenseBeingEdited: expense,
                                modifiedExpenseItem: expense.item,
                                modifiedExpenseAmount: expense.amount,
                                modifiedExpenseCategory: expense.category,
                            })
                        }}>Edit</button>
                        <button className="btn btn-sm btn-danger ms-2" onClick={() => {
                            this.setState({
                                expenseBeingDeleted: expense,
                            })
                        }}>Delete</button>
                    </div>
                </div>
            </div>
        )
    }

    displayDeleteExpense = (expense) => {
        return (
            <React.Fragment>
                <div className="card">
                    <div className="card-body">
                        Are you sure you want to delete this expense record? (item: {expense.item})
                        <div className="mt-2">
                            <button className="btn btn-sm btn-danger" onClick={()=>{this.processDeleteExpense(expense)}}>Yes</button>
                            <button className="btn btn-sm btn-primary ms-2" onClick={()=>{
                                this.setState({
                                    expenseBeingDeleted: null
                                })
                            }}>No</button>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        )
    }

    processDeleteExpense = (expense) => {
        let index = this.state.expenses.findIndex(e => e._id === expense._id);

        if (index === -1){
            return;
        }

        let cloned = this.state.expenses.slice();
        cloned.splice(index,1);
        this.setState({
            expenses: cloned,
            expenseBeingDeleted: null
        })
    }

    calculateTotal=()=>{
        let totalSoFar= 0;
        for (let expense of this.state.expenses){
            totalSoFar += Number(expense.amount)/100
        }
        
        return totalSoFar.toFixed(2);
    }

    render() {
        return (
            <React.Fragment>
                <h2>Budget Tracker</h2>
                {/* calculate total expense */}
                <h4>Total Spent: ${this.calculateTotal()}</h4>
                {/* display the expenses */}
                {this.state.expenses.map(m => (
                    <React.Fragment>
                        {
                            (() => {
                                if (this.state.expenseBeingEdited != null && this.state.expenseBeingEdited._id === m._id) {
                                    return this.displayEditExpense(m)
                                } else if (this.state.expenseBeingDeleted != null && this.state.expenseBeingDeleted._id === m._id) {
                                    return this.displayDeleteExpense(m)
                                } else {
                                    return this.displayExpenses(m);
                                }
                            })()
                        }

                        {/* {this.state.expenseBeingEdited === null || this.state.expenseBeingEdited._id !== m._id ? 
                            this.displayExpenses(m)
                            :
                            this.displayEditExpense(m)
                        } */}
                    </React.Fragment>
                ))}
                <hr></hr>
                {/* form for adding new expense */}
                <h3>Add a new expense</h3>
                <div className="card">
                    <div className="card-body">
                        <h5 className="card-title">
                            Item: <input type="text" name="newExpenseItem" className="form-control" value={this.state.newExpenseItem} onChange={this.updateFormField} />
                        </h5>
                        <h6>
                            Amount (in dollars eg. 15.60): <input type="text" name="newExpenseAmount" className="form-control" value={this.state.newExpenseAmount} onChange={this.updateFormField} placeholder="$"/>
                        </h6>
                        <div>
                            <label>Category:</label>
                            <select name="newExpenseCategory" value={this.state.newExpenseCategory} onChange={this.updateFormField}>
                                {this.state.allCategories.map(c => (
                                    <option key={c.value} value={c.value}>{c.display}</option>
                                ))}
                            </select>
                        </div>
                        <button className="btn btn-sm btn-primary mt-2" onClick={this.addNewExpense}>Add</button>
                    </div>
                </div>


            </React.Fragment>
        )
    }
}