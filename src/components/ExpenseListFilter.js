import React from "react"
import {connect} from "react-redux"
import { DateRangePicker } from "react-dates"
import {setTextFilter, sortByDate, sortByAmount, setStartDate, setEndDate} from "../actions/filters"


class ExpenseListFilter extends React.Component{
	constructor(props){
		super(props)
		this.state = { calendarFocused: null }
		this.onDatesChange = this.onDatesChange.bind(this)
		this.onFocusChange = this.onFocusChange.bind(this)
	}

	//this function is called by the react-dates library and by default it passes in an object
	//we destructured the object to obtain both the field names and values
	onDatesChange = ({ startDate, endDate }) => {
		this.props.dispatch(setStartDate(startDate))
		this.props.dispatch(setEndDate(endDate))
	}

	onFocusChange = (calendarFocused) => {
		this.setState(() => {
			return{
				calendarFocused: calendarFocused
			}
		})
	}

	render(){
		return(
			<div>
				<input 
					type="text" 
					value={this.props.filters.text}
					onChange={(event) => {
						this.props.dispatch(setTextFilter(event.target.value))
					}}
				/>
				<select
					onChange={(event) => {
						if(event.target.value === "date"){
							this.props.dispatch(sortByDate())
						} else if(event.target.value === "amount"){
							this.props.dispatch(sortByAmount())
						}
					}}
					value={this.props.filters.sortBy}
				>
					<option value="date">Date</option>
					<option value="amount">Amount</option>
				</select>
				<DateRangePicker //these are all required props
			 		startDate={this.props.filters.startDate}
			 		endDate={this.props.filters.endDate}
			 		onDatesChange={this.onDatesChange}
			 		focusedInput={this.state.calendarFocused}
			 		onFocusChange={this.onFocusChange}
			 		numberOfMonths={1}
			 		showClearDates={true}
			 		isOutsideRange={() => {
			 			return false
			 		}}
			 	/>
			</div>
		)

	}

}


const mapStateToProps = (state) => {
	return{
		filters: state.filters
	}
}

export default connect(mapStateToProps)(ExpenseListFilter)
