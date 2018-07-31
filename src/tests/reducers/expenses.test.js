import expensesReducer from "../../reducers/expenses"
import expenses from "../fixtures/expenses"

test("should set default state as an empty array", () => {
	const action = {type: "@@INIT"}
	const state = expensesReducer(undefined, action)
	expect(state).toEqual([])
})

test("should remove expense by id", () => {
	const id = expenses[2].id
	const action = {type: "REMOVE_EXPENSE", id}
	const state = expensesReducer(expenses, action)
	expect(state).toEqual([expenses[0], expenses[1]])
})

test("should not remove expenses if id not found", () => {
	const id = "-1"
	const action = {type: "REMOVE_EXPENSE", id}
	const state = expensesReducer(expenses, action)
	expect(state).toEqual(expenses)
})

test("should add an expense", () => {
	const expense = {
		id: "999",
		description: "",
		note: "",
		amount: 0,
		createdAt: 0
	}
	const action = {type: "ADD_EXPENSE", expense}
	const state = expensesReducer(expenses, action)
	expect(state).toEqual([
		...expenses,
		action.expense
	])
})

test("should edit an expense by id", () => {
	const id = expenses[0].id
	const updates = {	
		id: "1",
		description: "rent",
		note: "",
		amount: 50,
		createdAt: 0
	}
	const action = {
		type: "EDIT_EXPENSE", 
		id, 
		updates
	}
	const state = expensesReducer(expenses, action)
	expect(state).toEqual([
		action.updates, expenses[1], expenses[2]
	])
})

test("should not edit an expense if id not found", () => {
	const id = "-1"
	const updates = ""
	const action = {type: "EDIT_EXPENSE", id, updates}
	const state = expensesReducer(expenses, action)
	expect(state).toEqual(expenses)
})

test("should set expenses", () => {
	const action = {
		type: "SET_EXPENSES",
		expenses: [expenses[1]]
	}
	const state = expensesReducer(expenses, action)
	expect(state).toEqual([expenses[1]])
})