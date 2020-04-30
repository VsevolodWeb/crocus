import React from 'react';
import s from './Header.module.sass';
import logo from '../../assets/img/logo.svg';
import {Link, NavLink} from "react-router-dom";
import classNames from "classnames";
import ReactTooltip from "react-tooltip";

const Header = () => {
	return (
		<header className={s.header}>
			<Link to="/">
				<img src={logo} alt="Крокус Великие Луки"/>
			</Link>
			<div className={s.header__location}>
				<div>
					<a className="link link_dashed link_accent" href="!#">Санкт-Петербург</a>
					<div className="tooltip">
						<a data-tip data-for="city-selection">
							<div className="tooltip__icon"/>
						</a>
						<ReactTooltip
							id="city-selection"
							place="bottom"
							effect="solid"
							className="tooltip__content"
							textColor="var(--color-common)"
							backgroundColor="var(--tooltip-background-color)"
						>
							Ваше местоположение определилось для того, чтобы рассчитать доставку.<br/>
							Пожалуйста, выберите другой регион, если он не совпадает с вашим населенным пунктом.
						</ReactTooltip>
					</div>
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
			<nav className="menu">
				<ul className="menu__list">
					<li className="menu__item">
						<NavLink className="link menu__link" to="/catalog">
							Каталог 2021
						</NavLink>
					</li>
					<li className="menu__item">
						<NavLink className="link menu__link" to="/delivery">
							О доставке
						</NavLink>
					</li>
					<li className="menu__item">
						<NavLink className="link menu__link" to="/payments">
							Об оплате
						</NavLink>
					</li>
					<li className="menu__item">
						<NavLink className="link menu__link" to="/about">
							О нас
						</NavLink>
					</li>
					<li className="menu__item">
						<NavLink className="link menu__link" to="/contacts">
							Контакты
						</NavLink>
					</li>
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