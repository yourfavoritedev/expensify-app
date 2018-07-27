import React from "react"
import ExpenseListItem from "./ExpenseListItem"
import {connect} from "react-redux"
import getVisibleExpenses from "../selectors/expenses"

export const ExpenseList = (props) => {
	return(
		<div>
			{props.expenses.length === 0 ? 
				(<p>No Expenses</p>) : 
				(props.expenses.map((expense) => {
						return <ExpenseListItem key={expense.id} {...expense}/>
				}))
			}
		</div>
	)
}


const mapStateToProps = (state) => {
	return{
		expenses: getVisibleExpenses(state.expenses, state.filters)
	}
}
export default connect(mapStateToProps)(ExpenseList)