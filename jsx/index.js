import React, { Component } from "react"
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Header from './ui/header';
import Footer from './ui/footer';
import style from './style.css';
const Home = () => (
	<div>Home!</div>
);

const Feeds = () => (
	<div>Feeds!</div>
);

class App extends Component {
	onNavOpen = (open) => {
		this.setState((prevState) => ({open}));
	};
	constructor(props) {
		super(props);
		this.state = {open: false};
	}
	render() {
		return (
			<Router>
				<section className={style.wrapper}>
					<Header onNavOpen={this.onNavOpen} />
					<section className={`${style.body} ${this.state.open ? style.open : ''}`}>
						<Route exact path="/" component={Home} />
						<Route exact path="/feeds" component={Feeds} />
					</section>
					<Footer />
				</section>
			</Router>
		);
	}
}

ReactDOM.render(<App />, document.getElementById("mount"));

