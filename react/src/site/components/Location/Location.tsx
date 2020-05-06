import React from 'react';
import ReactTooltipWrapper from "../../utils/ReactTooltipWrapper.util";
import classNames from "classnames";

import s from "./Location.module.sass";


const Location = () => {
	return (
		<div>
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
					<input className={classNames("formElement__item", s.location__formElement)}
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
	);
};

export default Location;