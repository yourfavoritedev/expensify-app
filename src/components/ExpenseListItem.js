import React from "react"
import { Link } from "react-router-dom"
import moment from "moment"
import numeral from "numeral"

const ExpenseListItem = (props) => {
	return(
		<div>
			<h3>{props.description} <Link to={`/edit/${props.id}`}>Edit</Link></h3> 
			<p>
				{numeral(props.amount / 100).format("$0,0.00")} -- 
				{moment(props.createdAt).format("MMMM Do, YYYY")} -- 
				{props.note}
			</p>
		</div>
	)
}



export default ExpenseListItem