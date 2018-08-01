import React from "react"
import { connect } from "react-redux"
import { Link } from "react-router-dom"
import getVisibleExpenses from "../selectors/expenses"
import selectExpensesTotal from "../selectors/expenses-total"
import numeral from "numeral"


export const ExpenseListHeader = (props) => {
	return(
		<div className="page-header">
			<div className="content-container">
				<h1 className="page-header__title">
					Viewing <span>{props.expenses.length} </span> 
					{props.expenses.length == 1 ? "item " : "items " } 
					totalling <span>{numeral(selectExpensesTotal(props.expenses) / 100).format("$0,0.00")}</span>					
				</h1>
				<div className="page-header__actions">
					<Link className="create-button" to="/create">Add Expense</Link>
				</div>			
			</div>
		</div>
	)
}


const mapStateToProps = (state) => {
	return{
		expenses: getVisibleExpenses(state.expenses, state.filters)
	}
}


export default connect(mapStateToProps)(ExpenseListHeader)
