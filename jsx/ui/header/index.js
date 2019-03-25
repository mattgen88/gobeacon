import React, { Component } from "react";
import style from "./style.css";
import { Nav, NavItem } from './nav';

class Header extends Component {

	onNavOpen = (isOpened) => {
		this.setState(prevState => ({open: isOpened}));
		this.props.onNavOpen(isOpened);
	};

	constructor(props) {
		super(props);
		this.state = {
			open: false
		}
	}

	render() {
		return (
			<section id="header" className={`${this.state.open ? style.open : ""} ${style.navContainer}`}>
				<Nav className={style.nav} onNavOpen={this.onNavOpen}>
					<NavItem url="/" title="Home" />
					<NavItem url="/feeds" title="Feeds" />
				</Nav>
				<h1>Beacon: Your news, your way</h1>
			</section>
		);
	}
}

export default Header;
