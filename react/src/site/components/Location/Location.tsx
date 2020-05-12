import React, { useState } from 'react';
import classNames from "classnames";

import ReactTooltipWrapper from "../../utils/ReactTooltipWrapper.util";
import s from "./Location.module.sass";

type LocationPropsType = {
	currentLocation: string | null
}

const Location: React.FC<LocationPropsType> = props => {
	const [isEditLocation, setEditLocation] = useState(false);

	const toggleEditLocation = () => {
		setEditLocation(!isEditLocation);
	};

	return (
		<div>
			{isEditLocation ?
			 <div className="formElement">
				<div className="dropdown">
					<label className="formElement__label" htmlFor="location-search">
						Поиск по населенным пунктам
					</label>
					<input
						className={classNames("formElement__item", s.location__formElement)}
						id="location-search"
						type="search"
						placeholder="Регион доставки"
					/>
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
			</div> :
			<div>
				<a className="link link_dashed link_accent" onClick={toggleEditLocation} href="!#">{props.currentLocation}</a>
				<ReactTooltipWrapper id="city-selection">
					Ваше местоположение определилось для того, чтобы рассчитать доставку.<br/>
					Пожалуйста, выберите другой регион, если он не совпадает с вашим населенным пунктом.
				</ReactTooltipWrapper>
			</div>
			}
		</div>
	);
};

export default Location;