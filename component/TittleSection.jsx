import React from 'react';
import ReactDOM from 'react-dom';
import {Flower} from "./Flower.jsx";
import Flowercss from "./TittleSection.scss";

export function TittleSection(props){
	let mainStyle;
	if(props.className != undefined){
		mainStyle = "tittleSection " + props.className;
	} else {
		mainStyle = "tittleSection";
	};
	return <div className={mainStyle}>
			<Flower className="flowerTS"/>
			<div className="whoWeAre">{props.tittle1}</div>
			<div className="line"/>
			<div className="aboutUs">{props.tittle2}</div>
		</div>
}