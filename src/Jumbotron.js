import React, {Component} from "react";

import './Jumbotron.css';

class Jumbotron extends Component {
	render() {
		return (
			<div className = "jumbo">
				<div style={{position: "absolute", bottom: "0px", left: "20%", padding: "10px"}}>
					<h1>Clicky Game!</h1>
					<h2>Click on an image to earn points, but don't click on any more than once!</h2>
				</div>
			</div>
			);
	}
}

export default Jumbotron;