import React from 'react';
import ExpenseForm from "./ExpenseForm"
import { editExpense, removeExpense } from "../actions/expenses"
import { connect } from "react-redux"


export const EditExpensePage = (props) => {
	return (
	<div>
		<ExpenseForm
			expense={props.expense}
			onSubmit={(expense) => {
				props.dispatch(editExpense(props.expense.id, expense))
				props.history.push("/")
			}}
		 />
		<button 
			onClick={(event) => {
				props.dispatch(removeExpense(props.match.params.id))
				props.history.push("/")
			}}>Remove</button>		 
	</div>
	);
};

const mapStateToProps = (state, props) => {
	return{
		//use find, to go through each expense in the expenses array to find an item with the matching id
		expense: state.expenses.find((expense) => {
			return expense.id === props.match.params.id
		} )
	}
}

export default connect(mapStateToProps)(EditExpensePage);
