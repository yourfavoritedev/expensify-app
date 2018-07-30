import configureMockStore from "redux-mock-store"
import thunk from "redux-thunk"
import { startAddExpense, addExpense, removeExpense, editExpense } from "../../actions/expenses"
import expenses from "../fixtures/expenses"
import database from "../../firebase/firebase"

const createMockStore = configureMockStore([thunk])

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


test("should setup action to add expense object", (done) => {
	const store = createMockStore({})
	const expenseData = {
		description: "Computer",
		amount: 30000,
		note: "This one is better",
		createdAt: 1000
	}
	store.dispatch(startAddExpense(expenseData)).then(() => {
		const actions = store.getActions()
		expect(actions[0]).toEqual({
			type: "ADD_EXPENSE",
			expense: {
				id: expect.any(String),
				...expenseData
			}
		})

		return database.ref(`expenses/${actions[0].expense.id}`).once("value")
		}).then((snapshot) => {
			expect(snapshot.val()).toEqual(expenseData)
			done()
	})
})

test("should add expense with defaults to database and store", (done) => {
	const store = createMockStore({})
	const expenseDefaults = {
		description: "",
		amount: 0,
		note: "",
		createdAt: 0
	}
	store.dispatch(startAddExpense({})).then(() => {
		const actions = store.getActions()
		expect(actions[0]).toEqual({
			type: "ADD_EXPENSE",
			expense: {
				id: expect.any(String),
				...expenseDefaults
			}
		})

		return database.ref(`expenses/${actions[0].expense.id}`).once("value")
		}).then((snapshot) => {
			expect(snapshot.val()).toEqual(expenseDefaults)
			done()
	})
})