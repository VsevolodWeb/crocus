import React from "react";
import {Button, Col, DatePicker, Descriptions, Input, Row} from "antd";
import Select from "antd/lib/select";
import moment from "moment";
import 'moment/locale/ru';

import PicturesWall from "./../PicturesWall/PicturesWall";
import s from "./ExpandedRowRender.module.css";
import {ProductOptionsType, ProductType} from "../../../../redux/products-reducer";
import {CategoryType} from "../../../../redux/categories-reducer";

const { Option } = Select;
const { TextArea } = Input;
const { RangePicker } = DatePicker;


type PropsType = {
	product: ProductType
	categories: Array<CategoryType>
	editableProductId: number | null
	units: Array<string>
	productOptions: ProductOptionsType
}

const ExpandedRowRender: React.FC<PropsType> = (props) => {
	const getCategoryTitle = () => props.categories.find(category => category.key === props.product.categoryId)?.title;

	return (
		<Row>
			<Col span={13}>
				<Descriptions column={3}>
					<Descriptions.Item label="Категория" span={3}>
						{props.editableProductId === props.product.key ?
							<Select
								showSearch
								style={{ width: 200 }}
								placeholder="Выберите категорию"
								optionFilterProp="children"
								defaultValue={getCategoryTitle()}
							>
								{props.categories.map(item => <Option key={item.key} value={item.title}>{item.title}</Option>)}
							</Select>
							: getCategoryTitle()
						}
					</Descriptions.Item>
					<Descriptions.Item label="Время цветения">
						{props.editableProductId === props.product.key
							? <RangePicker picker="month" format={"MMMM"} dropdownClassName={s.rangePicker}
							               defaultValue={[moment(props.product.floweringTime[0], 'MMMM'),
								               moment(props.product.floweringTime[1], 'MMMM')]}/>
							: props.product.floweringTime[0] + " — " + props.product.floweringTime[1]
						}
					</Descriptions.Item>
					<Descriptions.Item label="Диаметр цветка">
						{props.editableProductId === props.product.key
						? <Input.Group compact>
							<Input type="number" addonBefore="до" min="1" style={{width: 120}} defaultValue={props.product.flowerDiameter.size} />
							<Select defaultValue={props.product.flowerDiameter.unit}>
								{Object.values(props.units).map(
									(unit: string, index) => <Option key={index} value={unit}>{unit}</Option>)}
							</Select>
						  </Input.Group>
						: `до ${props.product.flowerDiameter.size} ${props.product.flowerDiameter.unit}`
						}
					</Descriptions.Item>
					<Descriptions.Item label="Высота растения">
						{props.editableProductId === props.product.key
							? <Input.Group compact>
								<Input style={{width: 60}} type="number" min="1" placeholder="от" defaultValue={props.product.plantHeight.from}/>
								<Input style={{width: 60}} type="number" min="1" placeholder="до" defaultValue={props.product.plantHeight.to}/>
								<Select defaultValue={props.product.flowerDiameter.unit}>
									{Object.values(props.units).map((unit: string, index) => <Option key={index} value={unit}>{unit}</Option>)}
								</Select>
							  </Input.Group>
							: `${props.product.plantHeight.from}-${props.product.plantHeight.to} ${props.product.plantHeight.unit}`
						}
					</Descriptions.Item>
					<Descriptions.Item label="Местоположение">
						{props.editableProductId === props.product.key ?
							<Select
								showSearch
								style={{ width: 200 }}
								placeholder="Выберите расположение"
								optionFilterProp="children"
								defaultValue={props.product.plantingLocation}
							>
								{props.productOptions.plantingLocationList.map((item, index) => <Option key={index} value={item}>{item}</Option>)}
							</Select>
							: props.product.plantingLocation
						}
					</Descriptions.Item>
					<Descriptions.Item label="Морозостойкость">
						{props.editableProductId === props.product.key ?
							<Select
								showSearch
								style={{ width: 200 }}
								placeholder="Выберите морозостойкость"
								optionFilterProp="children"
								defaultValue={props.product.frostResistance}
							>
								{props.productOptions.frostResistance.map((item, index) => <Option key={index} value={item}>{item}</Option>)}
							</Select>
							: props.product.frostResistance
						}
					</Descriptions.Item>
					<Descriptions.Item label="Мин. кол-во, шт.">
						{props.editableProductId === props.product.key
							? <Input defaultValue={props.product.minAmount} min="1" type="number" style={{width: "60px"}}/>
							: props.product.minAmount}
					</Descriptions.Item>
					<Descriptions.Item label="Описание" span={3} className={s.descriptionsItemTextarea}>
						{props.editableProductId === props.product.key
							? <TextArea rows={4} defaultValue={props.product.description}/>
							: props.product.description}
					</Descriptions.Item>
				</Descriptions>
				<Button className={s.footerLink} type="link" danger>Удалить товар</Button>
			</Col>
			<Col offset={1} span={10}>
				<PicturesWall photos={props.product.photos} productId={props.product.key} editableProductId={props.editableProductId} />
			</Col>
		</Row>
	)
};

export default ExpandedRowRender