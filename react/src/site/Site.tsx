import React from 'react';
import './styles/main.sass'
import Main from "./pages/Main/Main";
import Icons from "./components/Icons/Icons";
import MobileMenu from './components/MobileMenu/MobileMenu';

const Site = () => {
	return (
		<>
			<MobileMenu/>
			<Main/>
			<Icons/>
		</>
	)
};

export default Site;