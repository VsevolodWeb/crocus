import React from 'react';
import { Fade } from 'react-slideshow-image';

import Header from "../../components/Header/Header";
import "./Main.sass";
import slide1 from "../../assets/img/pages/main/slides/slide1.svg";
import slide2 from "../../assets/img/pages/main/slides/slide2.svg";
import slide3 from "../../assets/img/pages/main/slides/slide3.svg";


const Main = () => {
	const slideshowProperties = {
		duration: 5000,
		transitionDuration: 500,
		infinite: false,
		indicators: true,
		arrows: false
	};

	return <>
		<div className="slider" style={{backgroundColor: "#FDFDF5"}}>
			<div className="container">
				<Header/>
				<div className="slider__list">
					<Fade {...slideshowProperties}>
						<div className="slider__item">
							<div className="slider__content">
								<h2 className="slider__title">Весенняя распродажа остатков</h2>
								<div className="slider__text">
									<p className="paragraph">С 1 апреля по 31 июня у нас скидки до 60% на многолетники,
										луковичные и почвопокровные. Спешите заказать по низким ценам!</p>
								</div>
								<a href="!#" className="link link_accent">
									Посмотреть скидки
									<svg className="link__icon">
										<use href="#arrow-right"/>
									</svg>
								</a>
							</div>
							<div className="slider__img">
								<img src={slide1} alt="Весенняя распродажа остатков"/>
							</div>
						</div>
						<div className="slider__item">
							<div className="slider__content">
								<h2 className="slider__title">Огромный выбор растений</h2>
								<div className="slider__text">
									<p className="paragraph">Сами выращиваем более 750 наименований: многолетники,  декоративные кустарники, почвопокровные растения,  луковичные и многое другое.</p>
								</div>
								<a href="!#" className="link link_accent">
									Перейти в каталог
									<svg className="link__icon">
										<use href="#arrow-right"/>
									</svg>
								</a>
							</div>
							<div className="slider__img">
								<img src={slide2} alt="Весенняя распродажа остатков"/>
							</div>
						</div>
						<div className="slider__item">
							<div className="slider__content">
								<h2 className="slider__title">Доставка саженцев и луковиц по всей России</h2>
								<div className="slider__text">
									<p className="paragraph">Мы отправляем редкие сорта Почтой России или Boxberry на следующий рабочий день после оплаты.</p>
								</div>
							</div>
							<div className="slider__img">
								<img src={slide3} alt="Весенняя распродажа остатков"/>
							</div>
						</div>
					</Fade>
				</div>
			</div>
		</div>
	</>
};

export default Main;