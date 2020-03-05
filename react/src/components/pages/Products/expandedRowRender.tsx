import React from "react";
import {StateProductType} from "../../../state/state";
import {Col, Row, Descriptions, Button} from "antd";
import PicturesWall from "./PicturesWall";
import s from "./expandedRowRender.module.css";

const expandedRowRender = (product: StateProductType) => {
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

export default expandedRowRender