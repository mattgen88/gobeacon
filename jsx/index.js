import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route } from 'react-router-dom';

const Home = () => (
	<div>Home!</div>
);

const Feeds = () => (
	<div>Feeds!</div>
);

const App = () => (
	<Router>
		<div>
			<Route exact path="/" component={Home} />
			<Route exact path="/feeds" component={Feeds} />
		</div>
	</Router>
);

ReactDOM.render(<App />, document.getElementById("mount"));

