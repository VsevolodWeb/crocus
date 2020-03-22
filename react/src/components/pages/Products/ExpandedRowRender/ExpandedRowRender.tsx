import React from "react";
import {Button, Col, Descriptions, Row} from "antd";
import PicturesWall from "./../PicturesWall/PicturesWall";
import s from "./ExpandedRowRender.module.css";
import {ProductType} from "../../../../redux/products-reducer";
import Select from "antd/lib/select";
import OptionProps from "rc-select/lib/Option";

type PropsType = {
	product: ProductType
	editableProductId: number | null
}

const ExpandedRowRender: React.FC<PropsType> = ({product, editableProductId}) => {
	return (
		<Row>
			<Col span={12}>
				<Descriptions column={3}>
					<Descriptions.Item label="Категория" span={3}>
						{editableProductId === product.key ?
							<Select
								showSearch
								style={{ width: 200 }}
								placeholder="Выберите категорию"
								optionFilterProp="children"
								filterOption={(input: string, option: OptionProps) =>
									option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
								}
							>
								<Option value="jack">Jack</Option>
								<Option value="lucy">Lucy</Option>
								<Option value="tom">Tom</Option>
							</Select>
							: product.category}
					</Descriptions.Item>
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
	)
};

export default ExpandedRowRender