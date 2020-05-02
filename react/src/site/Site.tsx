import React from 'react';
import './styles/main.sass'
import Main from "./pages/Main/Main";
import Icons from "./components/Icons/Icons";
import {slide as Menu} from "react-burger-menu";

const Site = () => {
	return (
		<>
			<Menu right>
				<a id="home" className="menu-item" href="/">Home</a>
				<a id="about" className="menu-item" href="/about">About</a>
				<a id="contact" className="menu-item" href="/contact">Contact</a>
			</Menu>
			<Main/>
			<Icons/>
		</>
	)
};

export default Site;