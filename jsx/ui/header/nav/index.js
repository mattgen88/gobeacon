import React, { Component } from "react";
import style from "./style.css";

export class Nav extends Component {
	handleClick = (e) => {
		this.setState(prevState => {
			this.props.onNavOpen(!prevState.open);
			return {
				open: !prevState.open
			};
		});
	};

	constructor(props) {
		super(props);
		this.state = {
			open: false
		}
	}

	render() {
		return (
			<div>
				<a onClick={this.handleClick} className={`${this.props.className} ${style.menuLink}`}>&#9776;</a>
				<nav id="menu" role="navigation" className={`${style.menu} ${this.state.open ? style.open : ""}`}>
					<ul>
						{ this.props.children }
					</ul>
				</nav>
			</div>
		);
	}
}

export class NavItem extends Component {
	onClick = () => {
		window.location.href=this.props.url;
	}

	render() {
		return (
			<li onClick={this.onClick}>{this.props.title}</li>
		);
	}
}

