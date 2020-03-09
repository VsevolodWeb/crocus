import React from "react";
import {connect} from "react-redux";
import {Button, Switch, Tag} from "antd";
import {CheckOutlined, CloseOutlined, EditOutlined} from '@ant-design/icons';
import s from "./Products.module.css";
import {ColumnsType} from "antd/lib/table";
import Products from "./Products";
import {AppStateType} from "../../../redux/store";
import {ProductType} from "../../../redux/products-reducer";


type StateType = {
	loading: boolean
}

type OwnType = {};
type MapDispatchToPropsType = {};
type MapStateToPropsType = {
	products: Array<ProductType>
}
type PropsType = MapStateToPropsType & MapDispatchToPropsType & OwnType;

class ProductsContainer extends React.Component<PropsType, StateType> {
	columns: ColumnsType<ProductType>;

	constructor(props: PropsType) {
		super(props);

		this.state = {
			loading: false
		};

		this.columns = [{
			title: "Наличие", key: 'quickActions',
			render: () => <Switch
				checkedChildren={<CheckOutlined/>}
				unCheckedChildren={<CloseOutlined/>}
				onChange={this.switchLoading}
				defaultChecked/>
		},
			{title: 'Наименование товара', dataIndex: 'name', key: 'name'},
			{title: 'Цена', dataIndex: 'price', key: 'price'},
			{
				title: 'Бэйджи', key: 'tags', dataIndex: 'tags',
				render: (tags: Array<string>) => (
					<div className={s.tagsWrapper}>
						{tags.map((tag: string) => {
							return <Tag color="volcano" key={tag}>
								{tag}
							</Tag>
						})}
					</div>)
			},
			{title: 'Время цветения', dataIndex: 'floweringTime', key: 'floweringTime'},
			{title: 'Диаметр цветка', dataIndex: 'flowerDiameter', key: 'flowerDiameter'},
			{title: 'Высота растения', dataIndex: 'plantHeight', key: 'plantHeight'},
			{title: 'Местоположение', dataIndex: 'plantingLocation', key: 'plantingLocation'},
			{title: 'Морозостойкость', dataIndex: 'frostResistance', key: 'frostResistance'},
			{
				key: 'mainActions',
				render: () => <Button shape="circle" icon={<EditOutlined/>} title="Редактировать товар"/>
			}
		];
	}

	switchLoading = () => {
		this.setState({loading: true});

		setTimeout(() => {
			this.setState({loading: false});
		}, 2000);
	};

	render() {
		return <Products columns={this.columns} products={this.props.products} loading={this.state.loading}/>
	}
}

const mapStateToProps = (state: AppStateType): MapStateToPropsType => ({
	products: state.products.list
});

export default connect(mapStateToProps)(ProductsContainer);