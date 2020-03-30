import React from "react";
import {Button, Col, DatePicker, Descriptions, Input, Row} from "antd";
import Select from "antd/lib/select";
import 'moment/locale/ru';

import PicturesWall from "./../PicturesWall/PicturesWall";
import s from "./ExpandedRowRender.module.css";
import {units, ProductType} from "../../../../redux/products-reducer";
import {CategoryType} from "../../../../redux/categories-reducer";

const { Option } = Select;
const { RangePicker } = DatePicker;


type PropsType = {
	product: ProductType
	categories: Array<CategoryType>
	editableProductId: number | null
}

const ExpandedRowRender: React.FC<PropsType> = ({product, categories, editableProductId}) => {
	const getCategoryTitle = () => categories.find(category => category.key === product.categoryId)?.title;

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
								defaultValue={getCategoryTitle()}
							>
								{categories.map(item => <Option key={item.key} value={item.title}>{item.title}</Option>)}
							</Select>
							: getCategoryTitle()
						}
					</Descriptions.Item>
					<Descriptions.Item label="Время цветения">
						{editableProductId === product.key
							? <RangePicker picker="month" format={"MMMM"} dropdownClassName={s.rangePicker} />
							: product.floweringTime[0] + " — " + product.floweringTime[1]
						}
					</Descriptions.Item>
					<Descriptions.Item label="Диаметр цветка">
						{editableProductId === product.key
						? <Input type="number" addonBefore="до" addonAfter={
								<Select defaultValue={product.flowerDiameter.unit}>
									{Object.values(units).map(unit => <Option value={unit}>{unit}</Option>)}
								</Select>
							} defaultValue={product.flowerDiameter.size} />
						: `до ${product.flowerDiameter.size} ${product.flowerDiameter.unit}`
						}
					</Descriptions.Item>
					<Descriptions.Item label="Высота растения">
						{editableProductId === product.key
							? <Input/>
							: `${product.plantHeight.from} — ${product.plantHeight.to} ${product.plantHeight.unit}`
						}
					</Descriptions.Item>
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