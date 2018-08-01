import React from "react"
import { connect } from "react-redux"
import { Route, Redirect } from "react-router-dom"
import Header from "../components/Header"

//we have a prop named component which is passed down from AppRouter.
//it actually contains the component we want to render if the user is authenticated.
//we use : to rename the prop, making it uppercase as all components should be.
//...rest just refers to all the other props being passed down from AppRouter
export const PrivateRoute = ({ isAuthenticated, component: Component, ...rest}) => {
	return(
		<Route {...rest} component={(props) => {
			return(
				<div>
					{
						isAuthenticated ? (
						<div>
							<Header/>
							<Component {...props} />
						</div>
					) : (
						<Redirect to="/" />
						)
					}			
				</div>
			)
		}}/>
	)
}

const mapStateToProps = (state) => {
	return{
		isAuthenticated: !!state.auth.uid
	}
}

export default connect(mapStateToProps)(PrivateRoute)