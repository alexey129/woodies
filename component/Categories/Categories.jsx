import React from 'react';
import ReactDOM from 'react-dom';
import {Flower} from "../Flower.jsx";
import {TittleSection} from "../TittleSection.jsx";
import Categoriescss from "./Categories.scss";

export function Categories(){
	return <div>
		<TittleSection tittle1="What we have" tittle2="CATEGORIES"/>
		<div className="category">
			<div className="cat1">
				<div className="tittle">Desk</div>
				<img src="image/desk.png"/>
				<div className="button">Shop Now</div>
			</div>
			<div className="cat2">
				<div className="tittle">Chair</div>
				<img src="image/chair.png"/>
				<div className="button">Shop Now</div>
			</div>
			<div className="cat3">
				<div className="tittle">Kitchenware</div>
				<img src="image/plate.png"/>
				<div className="button">Shop Now</div>
			</div>
			<div className="cat4">
				<div className="tittle">Book Shelf</div>
				<img src="image/bookshelf.png"/>
				<div className="button">Shop Now</div>
			</div>
			<div className="cat5">
				<div className="tittle">Electronics</div>
				<img src="image/radio.png"/>
				<div className="button">Shop Now</div>
			</div>
		</div>
	</div>
}