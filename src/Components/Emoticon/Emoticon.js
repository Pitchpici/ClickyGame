import React, { Component } from 'react';

import "./Emoticon.css";


const Emoticon = props => (
		//create card for images
		<div className="emoti" onClick={props.clickEmoti}>

			<div className="img-container">
				<img alt={props.image.replace(".jpg", "")} src={require("../../images/" + props.image)} />
			</div>
		</div>			
);

export default Emoticon;