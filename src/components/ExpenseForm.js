import React from "react"
import moment from "moment"
import { SingleDatePicker } from "react-dates";

export default class ExpenseForm extends React.Component{
	constructor(props){
		super(props)
		this.state = {
			description: props.expense ? props.expense.description : "",
			note: props.expense ? props.expense.note : "",
			amount: props.expense ? ( props.expense.amount / 100 ).toString() : "",
			createdAt: props.expense ? moment(props.expense.createdAt) : moment(),
			calendarFocused: false,
			error: ""
		}
		this.onDescriptionChange = this.onDescriptionChange.bind(this)
		this.onNoteChange = this.onNoteChange.bind(this)
		this.onAmountChange = this.onAmountChange.bind(this)
		this.onDateChange = this.onDateChange.bind(this)
		this.onFocusChange = this.onFocusChange.bind(this)
		this.onSubmit = this.onSubmit.bind(this)
	}

	onDescriptionChange = (event) => {
		const description = event.target.value
		this.setState(() => {
			return{
				description: description
			}
		})
	}

	onNoteChange = (event) => {
		const note = event.target.value
		this.setState(() => {
			return{
				note: note
			}
		})

	}

	onAmountChange = (event) => {
		const amount = event.target.value

		if(!amount || amount.match(/^\d{1,}(\.\d{0,2})?$/)){
			this.setState(() => {
				return{
					amount: amount
				}
			})
		}
	}

	onDateChange = (createdAt) => {
		if(createdAt){
			this.setState(() => {
				return{
					createdAt: createdAt
				}
			})
		}
	}

	onFocusChange = (event) => {
		this.setState(() => {
			return{
				calendarFocused: event.focused
			}
		})
	}

	onSubmit = (event) => {
		event.preventDefault();

		if(!this.state.description || !this.state.amount){
			this.setState(() => {
				return{
					error: "Please provide a description and a amount."
				}
			})
		} else {
			this.setState(() => {
				return{
					error: ""
				}
			})
			//call function that we passed down as a property.
			//satisfy argument by passing in an object that contains our expense info
			this.props.onSubmit({
				description: this.state.description,
				amount: parseFloat(this.state.amount, 10) * 100,
				createdAt: this.state.createdAt.valueOf(),
				note: this.state.note
			})
		}
	}

	render(){
		return(
			<div>
				<form className="form" onSubmit={this.onSubmit}>
					{this.state.error && <p className="form__error">{this.state.error}</p>}
					<input 
						type="text"
						placeholder="Description"
						className="text-input"
						autoFocus
						value={this.state.description}
						onChange={this.onDescriptionChange}
					/>

					<input
						type="text"
						placeholder="Amount"
						className="text-input"
						value={this.state.amount}
						onChange={this.onAmountChange}
					/>

					<SingleDatePicker
						date={this.state.createdAt}
						numberOfMonths={1}
						onDateChange={this.onDateChange}
						focused={this.state.calendarFocused}
						onFocusChange={this.onFocusChange}
						isOutsideRange={() => {
							return false
						}}
					 />

					<textarea
						className="text-area"
						placeholder="Add a note for your expense (optional)"
						value={this.state.note}
						onChange={this.onNoteChange}
					></textarea>

					<div>
						<button className="create-button">Save Expense</button>
					</div>

				</form>
			</div>
		)
	}
}
