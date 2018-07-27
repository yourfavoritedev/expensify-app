import { setTextFilter, sortByDate, sortByAmount, setStartDate, setEndDate } from "../../actions/filters"
import moment from "moment"

test("should generate action to create start date object", () => {
	const startDate = moment(0)
	const action = setStartDate(startDate)
	expect(action).toEqual({
		type: "SET_START_DATE",
		startDate
	})
})

test("should generate action to create end date object", () => {
	const endDate = moment(0)
	const action = setEndDate(endDate)
	expect(action).toEqual({
		type: "SET_END_DATE",
		endDate
	})
})

test("should generate action to create sort by amount object", () => {
	const amount = 5
	const action = sortByAmount(amount)
	expect(action).toEqual({
		type: "SORT_BY_AMOUNT",
		amount
	})
})

test("should generate action to create setTextFilter object", () => {
	const text = "bill"
	const action = setTextFilter(text)
	expect(action).toEqual({
		type: "SET_TEXT_FILTER",
		text
	})
})

test("should generate action to create setTextFilter object with default values", () => {
	const text = ""
	const action = setTextFilter(text)
	expect(action).toEqual({
		type: "SET_TEXT_FILTER",
		text
	})
})

test("should generate action to create sortByDate object", () => {
	const date = "1000"
	const action = sortByDate(date)
	expect(action).toEqual({
		type: "SORT_BY_DATE",
		date
	})
})

test("should generate action to create sortByDate object with default values", () => {
	const date = ""
	const action = sortByDate(date)
	expect(action).toEqual({
		type: "SORT_BY_DATE",
		date
	})
})