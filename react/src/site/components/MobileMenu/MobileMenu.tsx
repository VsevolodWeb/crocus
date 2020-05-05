import React from 'react';
import {slide as BurgerMenu} from "react-burger-menu";
import { NavLink } from 'react-router-dom';
import MenuList, {MenuItem} from '../../utils/MenuList'

const Menu = () => (
	<BurgerMenu right>
		{MenuList.map((item: MenuItem) => <div>1</div>)}
	</BurgerMenu>
);

export default Menu;