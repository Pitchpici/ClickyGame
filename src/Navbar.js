import React, { Component } from 'react';

import "./Navbar.css";

class Navbar extends Component {
	render () {
		return (
			<nav>
				<h1 style={{marginLeft: "20px"}}>Clicky Game</h1>
				<h2 style={{color: "yellow"}}> Click an image to begin! </h2>

				<div style={{marginRight: "20px"}}>
					<h2>Your Score: 0</h2>
					<h2>Top Score:  0</h2>
				</div>
			</nav>
		);

	}

}

export default Navbar;