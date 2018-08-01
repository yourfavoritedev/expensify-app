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
		this.props.setStartDate(startDate)
		this.props.setEndDate(endDate)
	}

	onFocusChange = (calendarFocused) => {
		this.setState(() => {
			return{
				calendarFocused: calendarFocused
			}
		})
	}

	onTextChange = (event) => {
		this.props.setTextFilter(event.target.value)
	}

	onSortChange = (event) => {
		if(event.target.value === "date"){
			this.props.sortByDate()
		} else if(event.target.value === "amount"){
			this.props.sortByAmount()
		}
	}

	render(){
		return(
			<div className="content-container">
				<div className="input-group">
					<div className="input-group__item">
						<input 
							type="text"
							className="text-input" 
							value={this.props.filters.text}
							placeholder="Search Expenses"
							onChange={this.onTextChange}
						/>					
					</div>
					<div className="input-group__item">
						<select
							onChange={this.onSortChange}
							className="select"
							value={this.props.filters.sortBy}
						>
							<option value="date">Date</option>
							<option value="amount">Amount</option>
						</select>					
					</div>
					<div className="input-group__item">
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
				</div>
			</div>
		)

	}

}


const mapStateToProps = (state) => {
	return{
		filters: state.filters
	}
}

const mapDispatchToProps = (dispatch) => {
	return{
		setTextFilter: (text) => {
			dispatch(setTextFilter(text))
		},
		sortByDate: () => {
			dispatch(sortByDate())
		},
		sortByAmount: () => {
			dispatch(sortByAmount())
		},
		setStartDate: (startDate) => {
			dispatch(setStartDate(startDate))
		},
		setEndDate: (endDate) => {
			dispatch(setEndDate(endDate))
		}

	}
}

export default connect(mapStateToProps, mapDispatchToProps)(ExpenseListFilter)
