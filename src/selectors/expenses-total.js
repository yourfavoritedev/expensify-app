const selectExpensesTotal = (expenses) => {
	return expenses //return our array of expenses
		.map((expense) => expense.amount) //map over our array and create a new array of expense amounts
		.reduce((sum, value) => sum + value, 0); //use reduce to add all values in the array
}

export default selectExpensesTotal