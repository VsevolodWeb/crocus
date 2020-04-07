import React from 'react';
import {Menu} from 'antd';
import {Link} from "react-router-dom";
import s from "./Menu.module.css";

type PropsType = {};

const MenuComponent: React.FC<PropsType> = () => {
    return (
        <Menu
            theme="dark"
            mode="horizontal"
            className={s.mainMenu}
        >
            <Menu.Item key="1">
                <Link to="/products">
                    Товары
                </Link>
            </Menu.Item>
            <Menu.Item key="2">
                <Link to="/categories">
                    Категории
                </Link>
            </Menu.Item>
            <Menu.Item key="3">Заказы</Menu.Item>
            <Menu.Item key="4">Заказчики</Menu.Item>
        </Menu>
    )
};

export default MenuComponent;