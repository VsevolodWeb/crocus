import React from 'react';
import Header from "../../components/Header/Header";

const Main = () => {
	return <>
		<div className="slider" style={{backgroundColor: "#FDFDF5"}}>
			<div className="container">
				<Header/>
				<div className="slider__list">
					<div className="slider__item">
						<div className="slider__content">
							<h2 className="slider__title">Весенняя распродажа остатков</h2>
							<div className="slider__text">
								<p className="paragraph">С 1 апреля по 31 июня у нас скидки до 60% на многолетники,
									луковичные и почвопокровные. Спешите заказать по низким ценам!</p>
							</div>
							<a href="#" className="link link_accent">
								Посмотреть скидки
								<svg className="link__icon">
									<use href="#arrow-right"/>
								</svg>
							</a>
						</div>
						<div className="slider__img">
							<img src="assets/img/pages/main/slides/slide1.svg" alt="Весенняя распродажа остатков"/>
						</div>
					</div>
				</div>
				<div className="sliderPagination slider__pagination">
					<button className="sliderPaginationItem sliderPaginationItem_active"/>
					<button className="sliderPaginationItem"/>
					<button className="sliderPaginationItem"/>
				</div>
			</div>
		</div>
	</>
};

export default Main;