import React from "react"
import { Link } from "react-router-dom"

const ExpenseListItem = (props) => {
	return(
		<div>
			<h3>{props.description} <Link to={`/edit/${props.id}`}>Edit</Link></h3> 
			<p>cost: {props.amount} - date: {props.createdAt} note: {props.note}</p>
		</div>
	)
}



export default ExpenseListItem