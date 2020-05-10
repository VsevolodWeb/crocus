import React from 'react';
import { slide as BurgerMenu } from 'react-burger-menu';
import { Link } from 'react-router-dom';
import MenuList, { MenuItem } from '../../utils/MenuList';
import LocationContainer from '../Location/LocationContainer';

import s from './MobileMenu.module.sass';


const Menu = () => (
	<>
		<BurgerMenu className={s.mobileMenu} styles={{bmItemList: {height: "inherit"}}} disableAutoFocus right>
			<div className={s.mobileMenu__item}>
				<div className={s.mobileMenu__list}>
					{MenuList.map((item: MenuItem, index: number) => {
						return <div key={index}><Link to={item.link} className={s.mobileMenu__link}>{item.name}</Link></div>;
					})}
				</div>
			</div>
			<div className={s.mobileMenu__item}>
				<LocationContainer/>
			</div>
		</BurgerMenu>
	</>
);

export default Menu;