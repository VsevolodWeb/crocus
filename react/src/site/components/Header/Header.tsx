import React from 'react';
import s from './Header.module.sass';
import logo from '../../assets/img/logo.svg';
import {Link, NavLink} from "react-router-dom";
import classNames from "classnames";
import ReactTooltipWrapper from "../../utils/ReactTooltipWrapper.util";
import MenuList, {MenuItem} from '../../utils/MenuList';

const Header = () => {
	return (
		<header className={s.header}>
			<Link to="/">
				<img src={logo} alt="Крокус Великие Луки"/>
			</Link>
			<div className={s.header__location}>
				<div>
					<a className="link link_dashed link_accent" href="!#">Санкт-Петербург</a>
					<ReactTooltipWrapper id="city-selection">
						Ваше местоположение определилось для того, чтобы рассчитать доставку.<br/>
						Пожалуйста, выберите другой регион, если он не совпадает с вашим населенным пунктом.
					</ReactTooltipWrapper>
				</div>
				<div className="formElement" style={{display: "none"}}>
					<div className="dropdown">
						<label className="formElement__label" htmlFor="location-search">
							Поиск по населенным пунктам
						</label>
						<input className={classNames("formElement__item", s.header__locationFormElementItem)}
							id="location-search" type="search"
							placeholder="Регион доставки"/>
						<ul className="dropdown__list">
							<li>
								<button className="dropdown__button">г. Великие Луки</button>
							</li>
							<li>
								<button className="dropdown__button">г. Санкт-Петербург</button>
							</li>
							<li>
								<button className="dropdown__button">г. Тверь</button>
							</li>
						</ul>
					</div>
				</div>
			</div>
			<nav className={s.menu}>
				<ul className={s.menu__list}>
					{MenuList.map((item: MenuItem, index: number) => (
						<li className={s.menu__item} key={index}>
							<NavLink className={classNames("link", s.menu__link)} to={item.link}>{item.name}</NavLink>
						</li>
					))}
				</ul>
				<div className="menu__search">
					<div className="formElement">
						<label className="formElement__label" htmlFor="catalog-search">
							Поиск
						</label>
						<input
							className="formElement__item"
							id="catalog-search"
							type="search"
							placeholder="Поиск по каталогу"
						/>
						<button className="iconButton formElement__button">
							<svg className="iconButton__icon" width="11" height="17">
								<use href="#arrow-right"/>
							</svg>
						</button>
					</div>
				</div>
			</nav>
		</header>
	)
};


export default Header;