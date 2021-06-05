import React from 'react';
import ReactDOM from 'react-dom';

import Maincss from "./main.scss";

import {Flower} from "./component/Flower.jsx";
import {TittleSection} from "./component/TittleSection.jsx";

import {Header} from "./component/Header/Header.jsx";
import {TittleScreen} from "./component/TittleScreen/TittleScreen.jsx";
import {AboutUs} from "./component/AboutUs/AboutUs.jsx";
import {HowItWorks} from "./component/HowItWorks/HowItWorks.jsx";
import {Categories} from "./component/Categories/Categories.jsx";
import {Testimony} from "./component/Testimony/Testimony.jsx";
import {Footer} from "./component/Footer/Footer.jsx";

class App extends React.Component {
	render() {
		return <>
		<Header />
		<TittleScreen />
		<AboutUs />
		<HowItWorks />
		<Categories />
		<Testimony />
		<Footer />
		</>
	}
}

ReactDOM.render(
	<App />,
	document.getElementById('root')
);