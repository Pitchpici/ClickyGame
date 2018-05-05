import React, { Component } from 'react';

import "./Footer.css";

class Footer extends Component {
	render () {
		return (
			<footer>
				<h3>Clicky Game</h3>
				<img className="react" alt="react" src={require("../../images/react.png")} />
			</footer>
		);
	}
}

export default Footer;