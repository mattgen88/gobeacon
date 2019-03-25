import React, { Component } from "react";
import style from "./style.css";

class Footer extends Component {

	constructor(props) {
		super(props);
	}

	render() {
		return (
			<section id="footer" className={style.footer}>
				<span>Copyright &copy; 2018 Matthew General. Product of <a href="http://digitalwny.com">DigitalWNY.com</a></span>
			</section>
		);
	}
}

export default Footer;
