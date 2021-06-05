import React from 'react';
import ReactDOM from 'react-dom';
import {Flower} from "../Flower.jsx";
import Headercss from "./TittleScreen.scss";

export function TittleScreen(){
	return <div className="tittleScreen">
		<div className="rectangle" />
		<Flower className="flower"/>
		<div className="tittleScreen2">
			<div className="text1">
				<div className="P1">Are you looking for woodden furniture for your place?</div>
				<div className="P2">This is the Right Place</div>
				<div className="Button1">Explore furniture</div>
			</div>
			<img className="image" src="image/table.png"></img>
		</div>
	</div>
}