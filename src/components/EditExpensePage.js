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
			<div className="page-header">
				<div className="content-container">
					<h1 className="page-header__title">Edit Expense</h1>
				</div>
			</div>
			<div className="content-container">
				<ExpenseForm
					expense={this.props.expense}
					onSubmit={this.onSubmit}
				 />
				<button 
					className="remove-button"
					onClick={this.onRemove}>Remove Expense</button>
			</div>		 
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

