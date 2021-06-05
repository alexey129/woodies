import React from 'react';
import ReactDOM from 'react-dom';
import {Flower} from "../Flower.jsx";
import Headercss from "./Header.scss";

export function Header(){
	return <div className="header"> 
		<div className="logo">
			<Flower className="flower10"/>
			<div className="tittle">WOODIES</div>
		</div>
		<div className="menu">
			<div className="menuItem home">Home</div>
			<div className="menuItem">About Us</div>
			<div className="menuItem">How it works</div>
			<div className="menuItem">Categories</div>
			<div className="menuItem">Testimony</div>
			<div className="menuItem signUp">SIGN UP</div>
		</div>
	</div>
}