import React, {useContext} from 'react';
import {Menu} from 'antd';
import {Link} from "react-router-dom";
import {
	InboxOutlined,
	UnorderedListOutlined,
	UserOutlined,
	LogoutOutlined
} from '@ant-design/icons';
import s from "./Menu.module.css";
import {AuthContext} from "../../../../context/AuthContext";
import SubMenu from "antd/lib/menu/SubMenu";

type PropsType = {};

const MenuComponent: React.FC<PropsType> = () => {
	const auth = useContext(AuthContext);

	const logoutHandler = (event: React.MouseEvent) => {
		event.preventDefault();
		auth.logout();
	};

	return auth.isAuthenticated ?
		<Menu
			theme="dark"
			mode="horizontal"
			className={s.mainMenu}
			defaultSelectedKeys={[window.location.pathname]}
		>
			<Menu.Item key="/admin/products">
				<Link to="/admin/products">
					<InboxOutlined />
					Товары
				</Link>
			</Menu.Item>
			<Menu.Item key="/admin/categories">
				<Link to="/admin/categories">
					<UnorderedListOutlined />
					Категории
				</Link>
			</Menu.Item>
			<SubMenu
				key="user-settings"
				title={
					<span>
						<UserOutlined />
						Личный кабинет
					</span>
				}
			>
				<Menu.Item key="logout">
					<a href="/" onClick={logoutHandler}>
						<LogoutOutlined />
						Выйти
					</a>
				</Menu.Item>
			</SubMenu>
		</Menu> : null
};

export default MenuComponent;