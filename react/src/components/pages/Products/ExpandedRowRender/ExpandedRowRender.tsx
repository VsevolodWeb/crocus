import React from "react";
import {Col, Row, Descriptions, Button} from "antd";
import PicturesWall from "./../PicturesWall/PicturesWall";
import s from "./ExpandedRowRender.module.css";
import {ProductType} from "../../../../redux/products-reducer";

const ExpandedRowRender = (product: ProductType, index:number , indent:number, expanded:boolean) => {
	console.log(index, expanded);
	return <Row>
		<Col span={12}>
			<Descriptions column={3}>
				<Descriptions.Item label="Категория" span={3}>{product.category}</Descriptions.Item>
				<Descriptions.Item label="Время цветения">{product.floweringTime}</Descriptions.Item>
				<Descriptions.Item label="Диаметр цветка">{product.flowerDiameter}</Descriptions.Item>
				<Descriptions.Item label="Высота растения">{product.plantHeight}</Descriptions.Item>
				<Descriptions.Item label="Местоположение">{product.plantingLocation}</Descriptions.Item>
				<Descriptions.Item label="Морозостойкость">{product.frostResistance}</Descriptions.Item>
				<Descriptions.Item label="Мин. кол-во">{product.minAmount}</Descriptions.Item>
				<Descriptions.Item label="Описание" span={3}>{product.description}</Descriptions.Item>
			</Descriptions>
			<Button className={s.footerLink} type="link" danger>Удалить товар</Button>
		</Col>
		<Col offset={1} span={11}>
			<PicturesWall photos={product.photos}/>
		</Col>
	</Row>
};

export default ExpandedRowRender