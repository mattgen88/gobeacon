import React, { Component } from "react"
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Header from './ui/header';

const Home = () => (
	<div>Home!</div>
);

const Feeds = () => (
	<div>Feeds!</div>
);

const App = () => (
	<Router>
		<div>
			<Header />
			<Route exact path="/" component={Home} />
			<Route exact path="/feeds" component={Feeds} />
		</div>
	</Router>
);

ReactDOM.render(<App />, document.getElementById("mount"));

