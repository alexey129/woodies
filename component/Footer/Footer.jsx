import React from 'react';
import ReactDOM from 'react-dom';
import {Flower} from "../Flower.jsx";
import {TittleSection} from "../TittleSection.jsx";
import Footercss from "./Footer.scss";

export function Footer(){
	return <>
		<div className="gradient">
			<p className="text">Subscribe to our newsletter<br></br>
A monthly digest of the new WOODIES products, hot offers, and resources.</p>
			<div className="subscribe">
				<div className="email">Your email address</div>
				<div className="button">Subscribe</div>
			</div>
		</div>
		<div className="contacts1">
			<div className="grid">
				<div className="div1"><Flower className="flower9"/><div>WOODIES</div></div>
				<div className="div2">Product</div>
				<div className="div3">Resources</div>
				<div className="div4">Company</div>
				<div className="div5">Follow Us</div>
				<div className="div6">(012) 8967453</div>
				<div className="div7">Furnitures</div>
				<div className="div8">Blog</div>
				<div className="div9">About Us</div>
				<div className="div10">Facebook</div>
				<div className="div11">woodies@gmail.com</div>
				<div className="div12">Packages</div>
				<div className="div13">FAQs</div>
				<div className="div14">Jobs</div>
				<div className="div15">Instagram</div>
				<div className="div16">Jakarta, Indonesia</div>
				<div className="div17">Services</div>
				<div className="div18">Contact Us</div>
				<div className="div19">Our Team</div>
				<div className="div20">Twitter</div>
			</div>
			<div className="company">© 2020 WOODIES</div>
		</div>
	</>
}