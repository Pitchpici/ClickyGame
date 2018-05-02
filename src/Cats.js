import React, { Component } from 'react';

import "./Cats.css";

class Cats extends Component {
	render () {
		return (
			<div className="cats">	
				<div className="container">
					<h3>Images go here!</h3>
					<div className="imgbox"></div>
				</div>
			</div>
		);
	}
}

export default Cats;