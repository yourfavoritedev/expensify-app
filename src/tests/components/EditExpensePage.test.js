import React from "react"
import { shallow } from "enzyme"
import expenses from "../fixtures/expenses"
import { EditExpensePage } from "../../components/EditExpensePage"

test("should render EditExpensePage", () => {
	const editExpense = jest.fn()
	const removeExpense = jest.fn()
	const history = { push: jest.fn() }
	const wrapper = shallow(
		<EditExpensePage
			editExpense = {editExpense}
			removeExpense = {removeExpense}
			history = {history}
			expense = {expenses[0]}
		/>
	)
	expect(wrapper).toMatchSnapshot()
})