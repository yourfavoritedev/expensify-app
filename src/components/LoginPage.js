import React from "react"
import { connect } from "react-redux"
import { startLogin } from "../actions/auth"

export const LoginPage = (props) => {
	return(
		<div className="box-layout">
			<div className="box-layout__box">
				<h1 className="box-layout__title">Expensify</h1>
				<p>A better way to track your spending.</p>
				<button 
					className="login-button"
					onClick={props.startLogin}>
					Login with Google
				</button>
			</div>
		</div>
	)
}


const mapDispatchToProps = (dispatch) => {
	return{
		startLogin: () => {
			dispatch(startLogin())
		}
	}
}

export default connect(undefined, mapDispatchToProps)(LoginPage)