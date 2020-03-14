import React from "react";
import {connect} from "react-redux";
import {Button, Switch, Tag} from "antd";
import {CheckOutlined, CloseOutlined, EditOutlined, SaveOutlined} from '@ant-design/icons';
import s from "./Products.module.css";
import {ColumnsType} from "antd/lib/table";
import Products from "./Products";
import {AppStateType} from "../../../redux/store";
import {ProductType, setLoadingActionCreator, SetLoadingActionCreatorType} from "../../../redux/products-reducer";


type OwnType = {};
type MapDispatchToPropsType = {
	setLoading: (loading: boolean) => SetLoadingActionCreatorType
};
type MapStateToPropsType = {
	loading: boolean
	products: Array<ProductType>
}
type PropsType = MapStateToPropsType & MapDispatchToPropsType & OwnType;
type StateType = {
	editable: boolean
}

class ProductsContainer extends React.Component<PropsType, StateType> {
	columns: ColumnsType<ProductType>;

	state = {
		editable: false
	};

	constructor(props: PropsType) {
		super(props);

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
							return <Tag color="volcano" key={tag}>{tag}</Tag>
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
				render: () => {
					return <div className={s.buttonsWrapper}>
						{this.state.editable ?
							<>
								<Button shape="circle" icon={<SaveOutlined />} title="Сохранить" onClick={this.switchEditable}/>
								<Button shape="circle" icon={<CloseOutlined />} title="Выйти из режима редактирования без сохранения" onClick={this.switchEditable}/>
							</>
						:
						<Button shape="circle" icon={<EditOutlined/>} title="Редактировать товар" onClick={this.switchEditable}/>}
					</div>
				}
			}
		];
	}

	switchEditable = () => {
		this.setState({editable: !this.state.editable});
	};

	switchLoading = () => {
		this.props.setLoading(true);

		setTimeout(() => {
			this.props.setLoading(false);
		}, 2000);
	};

	render() {
		return <Products columns={this.columns} products={this.props.products} loading={this.props.loading} editable={this.state.editable}/>
	}
}

const mapStateToProps = (state: AppStateType): MapStateToPropsType => ({
	loading: state.products.loading,
	products: state.products.list
});

export default connect<MapStateToPropsType, MapDispatchToPropsType, OwnType, AppStateType>(
	mapStateToProps,
	{setLoading: setLoadingActionCreator}
)(ProductsContainer);