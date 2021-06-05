import React from 'react';
import ReactDOM from 'react-dom';
import Flowercss from "./Flower.scss";

export function Flower(props){
	let mainStyle = "flower " + props.className;
	return <div className={mainStyle}>
			<div className="PetalLT" />
			<div className="PetalRT" />
			<div className="PetalRB" />
			<div className="PetalLB" />
		</div>
}