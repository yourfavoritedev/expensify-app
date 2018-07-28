import selectExpensesTotal from "../../selectors/expenses-total"
import expenses from "../fixtures/expenses"

test("should return 0 if no expenses", () => {
	const results = selectExpensesTotal([])
	expect(results).toBe(0)
})

test("should correctly add up a single expense", () => {
	const results = selectExpensesTotal([expenses[0]])
	expect(results).toBe(100)
})

test("should correctly add up multiple expenses", () => {
	const results = selectExpensesTotal(expenses)
	expect(results).toBe(150)
})