import React, { Component } from "react";
import "./../styles/components/App.css";

export default class App extends Component {
	constructor() {
		super();
		this.state = {
			isSignUp: true,
			validation: {
				name: false,
				email: false,
				password: false,
			},
			checkName: true,
			checkEmail: true,
			checkPassword: true,
		};
	}
	render() {
		const validation = (e) => {
			e.preventDefault();
			const value = e.target.value;
			if (e.target.type === "text" && e.target.name === "name") {
				if (!value.search(/\w*/)) {
					this.setState({
						validation: {
							name: true,
							email: this.state.validation.email,
							password: this.state.validation.password,
						},
						checkName: true,
					});
				}
			} else if (e.target.name === "email") {
				if (!value.search(/\S\w+@\w+\.\w+/)) {
					this.setState({
						validation: {
							name: this.state.validation.name,
							email: true,
							password: this.state.validation.password,
						},
						checkEmail: true,
					});
				}
			} else if (e.target.name === "password") {
				if (value.length > 5) {
					this.setState({
						validation: {
							name: this.state.validation.name,
							email: this.state.validation.email,
							password: true,
						},
						checkPassword: true,
					});
				}
			}
		};
		
		/* ------------------------ */
		
		const checkInputs = (e) => {
			const stateValidation = this.state.validation;
			if (!stateValidation.name) {
				this.setState({ checkName: false });
				e.preventDefault();
			}
			if (!stateValidation.email) {
				this.setState({ checkEmail: false });
				e.preventDefault();
			}
			if (!stateValidation.password) {
				this.setState({ checkPassword: false });
				e.preventDefault();
			}
		};

		/* ------------------------ */

		if (this.state.isSignUp) {
			return (
				<form onSubmit={checkInputs} className="auth" action="#">
					<div className="auth__container">
						<h1 className="auth__title">Sign Up</h1>
						<h3 className="auth__subtitle">Sign up to join</h3>
						<div className="auth__inputs">
							<label htmlFor="name">Name</label>
							<input onChange={validation} autoComplete="off" type="text" id="name" className={`auth__input ${this.state.checkName ? "" : "error"}`} placeholder="Please type full name" name="name" />
							<label htmlFor="email">Email</label>
							<input onChange={validation} autoComplete="off" type="text" id="email" className={`auth__input ${this.state.checkEmail ? "" : "error"}`} placeholder="email@example.com" name="email" />
							<label htmlFor="password">Password</label>
							<input onChange={validation} autoComplete="off" type="password" className={`auth__input ${this.state.checkPassword ? "" : "error"}`} placeholder="●●●●●●●" name="password" id="password" />
						</div>
						<button className="auth__button" type="submit">
							Sign Up
						</button>
						<div className="auth__no-acc">
							<p>
								have an account?
								<a
									onClick={() => {
										this.setState({ isSignUp: false });
									}}
									href="#"
								>
									Sign In
								</a>
							</p>
						</div>
					</div>
				</form>
			);
		}

		/* ------------------------ */

		return (
			<form onSubmit={checkInputs} className="auth" action="#">
				<div className="auth__container">
					<h1 className="auth__title">Sign In</h1>
					<h3 className="auth__subtitle">Sign in to continue</h3>
					<div className="auth__inputs">
						<label htmlFor="email-in">Email</label>
						<input onChange={validation} autoComplete="off" type="text" id="email-in" className={`auth__input ${this.state.checkEmail ? "" : "error"}`} placeholder="email@example.com" name="email" />
						<label htmlFor="password-in">Password</label>
						<input onChange={validation} autoComplete="off" type="password-in" className={`auth__input ${this.state.checkPassword ? "" : "error"}`} placeholder="●●●●●●●" name="password" id="password" />
					</div>
					<button className="auth__button" type="submit">
						Login
					</button>
					<div className="auth__no-acc">
						<p>
							Don't have an account?
							<a
								onClick={() => {
									this.setState({ isSignUp: true });
								}}
								href="#"
							>
								Sign Up
							</a>
						</p>
					</div>
				</div>
			</form>
		);
	}
}
