import configureMockStore from "redux-mock-store"
import thunk from "redux-thunk"
import { 
	startAddExpense, 
	addExpense, 
	removeExpense, 
	editExpense, 
	setExpenses, 
	startSetExpenses,
	startRemoveExpense,
	startEditExpense 
} from "../../actions/expenses"
import expenses from "../fixtures/expenses"
import database from "../../firebase/firebase"

const uid = "thisismytestuid"
const defaultAuthState = { auth: { uid }}
const createMockStore = configureMockStore([thunk])


beforeEach((done) => {
	const expensesData = {};
	expenses.forEach(({ id, description, note, amount, createdAt}) => {
		expensesData[id] = { description, note, amount, createdAt}
	})
	database.ref(`users/${uid}`).set(expensesData).then(() => done())
})

test("should setup action to remove expense object", () => {
	const id = "123"
	const action = removeExpense(id)
	expect(action).toEqual({
		type: "REMOVE_EXPENSE",
		id
	})
})

test("should remove expense from firebase", (done) => {
	const store = createMockStore(defaultAuthState)
	const id = expenses[2].id
	store.dispatch(startRemoveExpense(id)).then(() => {
		const actions = store.getActions();
		expect(actions[0]).toEqual({
			type: "REMOVE_EXPENSE",
			id
		});
		return database.ref(`users/${uid}/expenses/${id}`).once("value")
	}).then((snapshot) => {
		expect(snapshot.val()).toBeFalsy()
		done()
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

test("should edit expense from firebase", (done) => {
	const store = createMockStore(defaultAuthState)
	const id = expenses[0].id
	const updates = { amount: 210 }
	store.dispatch(startEditExpense(id, updates)).then(() => {
		const actions = store.getActions()
		expect(actions[0]).toEqual({
			type: "EDIT_EXPENSE",
			id,
			updates
		})
		return database.ref(`users/${uid}/expenses/${id}`).once("value")
	}).then((snapshot) => {
		expect(snapshot.val().amount).toBe(updates.amount)
		done()
	})
})

test("should setup action to add expense object", (done) => {
	const store = createMockStore(defaultAuthState)
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

		return database.ref(`users/${uid}/expenses/${actions[0].expense.id}`).once("value")
		}).then((snapshot) => {
			expect(snapshot.val()).toEqual(expenseData)
			done()
	})
})

test("should add expense with defaults to database and store", (done) => {
	const store = createMockStore(defaultAuthState)
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

		return database.ref(`users/${uid}/expenses/${actions[0].expense.id}`).once("value")
		}).then((snapshot) => {
			expect(snapshot.val()).toEqual(expenseDefaults)
			done()
	})
})

test("should setup set expense action object with data", () => {
	const action = setExpenses(expenses)
	expect(action).toEqual({
		type: "SET_EXPENSES",
		expenses
	})
})

test("should fetch the expenses from firebase", (done) => {
	const store = createMockStore(defaultAuthState)
	store.dispatch(startSetExpenses()).then(() => {
		const actions = store.getActions();
		expect(actions[0]).toEqual({
			type: "SET_EXPENSES",
			expenses: []
		})
		done()
	})
})