import React from "react";
import {Col, Row, Descriptions, Button} from "antd";
import PicturesWall from "./../PicturesWall/PicturesWall";
import s from "./ExpandedRowRender.module.css";
import {ProductType} from "../../../../redux/products-reducer";

const ExpandedRowRender = (product: ProductType) => {
	return <Row>
		<Col span={12}>
			<Descriptions column={2}>
				<Descriptions.Item label="Категория">{product.category}</Descriptions.Item>
				<Descriptions.Item label="Мин. количество для заказа">{product.minAmount}</Descriptions.Item>
				<Descriptions.Item label="Описание" span={2}>{product.description}</Descriptions.Item>
			</Descriptions>
			<Button className={s.footerLink}type="link" danger>Удалить товар</Button>
		</Col>
		<Col offset={1} span={11}>
			<PicturesWall photos={product.photos}/>
		</Col>
	</Row>
};

export default ExpandedRowRender