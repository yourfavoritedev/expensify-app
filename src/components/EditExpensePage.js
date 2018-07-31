import React from 'react';
import ExpenseForm from "./ExpenseForm"
import { startEditExpense, startRemoveExpense } from "../actions/expenses"
import { connect } from "react-redux"


export class EditExpensePage extends React.Component {
	constructor(props){
		super(props)
	}
	
	onSubmit = (expense) => {
		this.props.startEditExpense(this.props.expense.id, expense)
		this.props.history.push("/")
	}

	onRemove = () => {
		this.props.startRemoveExpense(this.props.expense.id)
		this.props.history.push("/")
	}

	render(){
		return(
		<div>
			<ExpenseForm
				expense={this.props.expense}
				onSubmit={this.onSubmit}
			 />
			<button 
				onClick={this.onRemove}>Remove</button>		 
		</div>			
		)
	}
}

const mapStateToProps = (state, props) => {
	return{
		//use find, to go through each expense in the expenses array to find an item with the matching id
		expense: state.expenses.find((expense) => {
			return expense.id === props.match.params.id
		} )
	}
}

const mapDispatchToProps = (dispatch, props) => {
	return{
		startEditExpense: (id, expense) => {
			dispatch(startEditExpense(id, expense))
		},
		startRemoveExpense: (id) => {
			dispatch(startRemoveExpense(id))
		}
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(EditExpensePage);

