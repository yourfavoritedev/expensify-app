import React from 'react';
import ExpenseListFilter from "./ExpenseListFilter"
import ExpenseList from "./ExpenseList"

const ExpenseDashboardPage = () => {
	return(
	  <div>
	  	<ExpenseListFilter/>
	    <ExpenseList/>
	  </div>
	)
}

export default ExpenseDashboardPage;
