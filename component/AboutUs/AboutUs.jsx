import React from 'react';
import ReactDOM from 'react-dom';
import {Flower} from "../Flower.jsx";
import {TittleSection} from "../TittleSection.jsx";
import Headercss from "./AboutUs.scss";

export function AboutUs(){
	return <div className="AboutUs">
		<Flower className="flower3"/>
		<TittleSection tittle1="Who we are" tittle2="ABOUT US"/>
		<div className="imgtextblock1">
			<div className="imgblock">
				<div className="back"></div>
				<img src="image/food.png" width="388px" height="306px"/>
			</div>
			<div className="textblock">
				<p className="text1">WOODIES is the home of modern wooden furniture</p>
				<p className="text2">the answer to your need for furniture with shapes, sizes and colors. </p>
			</div>
		</div>
		<div className="imgtextblock2">
			<div className="textblock">
				<p className="text1">WOODIES is the home of modern wooden furniture</p>
				<p className="text2">the answer to your need for furniture with shapes, sizes and colors. </p>
			</div>
			<img src="image/spoon.png" width="287px" height="384px"/>
		</div>
	</div>
}