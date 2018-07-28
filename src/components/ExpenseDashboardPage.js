import React from 'react';
import ExpenseListFilter from "./ExpenseListFilter"
import ExpenseList from "./ExpenseList"
import ExpenseListHeader from "./ExpenseListHeader"

const ExpenseDashboardPage = () => {
	return(
	  <div>
	  	<ExpenseListHeader/>
	  	<ExpenseListFilter/>
	    <ExpenseList/>
	  </div>
	)
}

export default ExpenseDashboardPage;
