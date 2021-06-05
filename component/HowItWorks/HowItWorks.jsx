import React from 'react';
import ReactDOM from 'react-dom';
import {Flower} from "../Flower.jsx";
import {TittleSection} from "../TittleSection.jsx";
import HowItWorkscss from "./HowItWorks.scss";

export function HowItWorks(){
	return <>
		<TittleSection tittle1="How to custom" tittle2="HOW IT WORKS"/>
		<div className="howList">
			<div className="block1">
				<div className="number">1</div>
				<img src="image/group1.png"/>
				<div className="text">Choose Design</div>
			</div>
			<div className="block2">
				<div className="number">2</div>
				<img src="image/group2.png"/>
				<div className="text">Area measuring</div>
			</div>
			<div className="block3">
				<div className="number">3</div>
				<img src="image/group3.png"/>
				<div className="text">Budgeting</div>
			</div>
			<div className="block4">
				<div className="number">4</div>
				<img src="image/group4.png"/>
				<div className="text">Production</div>
			</div>
		</div>
		<div className="Hbutton">Get Personalized Now</div>
	</>
}