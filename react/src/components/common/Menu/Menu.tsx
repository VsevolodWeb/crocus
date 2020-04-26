import React, {useContext} from 'react';
import {Menu} from 'antd';
import {Link} from "react-router-dom";
import s from "./Menu.module.css";
import {AuthContext} from "../../../context/AuthContext";

type PropsType = {};

const MenuComponent: React.FC<PropsType> = () => {
	const auth = useContext(AuthContext);
	return auth.isAuthenticated ?
		<Menu
			theme="dark"
			mode="horizontal"
			className={s.mainMenu}
			defaultSelectedKeys={[window.location.pathname]}
		>
			<Menu.Item key="/products">
				<Link to="/products">
					Товары
				</Link>
			</Menu.Item>
			<Menu.Item key="/categories">
				<Link to="/categories">
					Категории
				</Link>
			</Menu.Item>
		</Menu> : null
};

export default MenuComponent;