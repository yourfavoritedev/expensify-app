import moment from "moment"

const expenses = [{
	id: "1",
	description: "rent",
	note: "",
	amount: 100,
	createdAt: 0
}, {
	id: "2",
	description: "gas",
	note: "",
	amount: 20,
	createdAt: moment(0).subtract(4, "days").valueOf()	
},{
	id: "3",
	description: "groceries",
	note: "",
	amount: 30,
	createdAt: moment(0).add(4, "days").valueOf()
}]

export default expenses