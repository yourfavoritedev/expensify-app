import { addExpense, removeExpense, editExpense } from "../../actions/expenses"

test("should setup action to remove expense object", () => {
	const id = "123"
	const action = removeExpense(id)
	expect(action).toEqual({
		type: "REMOVE_EXPENSE",
		id
	})
})

test("should setup action to edit expense object", () => {
	const id = "123"
	const updates = "woofers"
	const action = editExpense(id, updates)
	expect(action).toEqual({
		type: "EDIT_EXPENSE",
		id,
		updates
	})
})


test("should setup action to add expense object", () => {
	const expenseData = {
		description: "Rent",
		amount: 10000,
		createdAt: 1000,
		note: "This was June's rent"
	}
	const action = addExpense(expenseData)
	expect(action).toEqual({
		type: "ADD_EXPENSE",
		expense: {
			...expenseData,
			id: expect.any(String)
		}
	})

})

test("should setup action to add expense object using defaults", () => {
	const expenseData = {
		description: "",
		note: "",
		amount: 0,
		createdAt: 0,
	}	
	const action = addExpense(expenseData);
	expect(action).toEqual({
		type: "ADD_EXPENSE",
		expense: {
			...expenseData,
			id: expect.any(String)
		}
	})
})