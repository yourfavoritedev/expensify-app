import React from "react"
import { connect } from "react-redux"
import getVisibleExpenses from "../selectors/expenses"
import selectExpensesTotal from "../selectors/expenses-total"
import numeral from "numeral"


export const ExpenseListHeader = (props) => {
	return(
		<div>
			<h2>Viewing {props.expenses.length} {props.expenses.length == 1 ? "item" : "items" } </h2>
			<h2>Total: {numeral(selectExpensesTotal(props.expenses) / 100).format("$0,0.00")}</h2>
		</div>
	)
}


const mapStateToProps = (state) => {
	return{
		expenses: getVisibleExpenses(state.expenses, state.filters)
	}
}


export default connect(mapStateToProps)(ExpenseListHeader)
