import React from "react";
import {connect} from "react-redux";
import {Button, Input, Switch, Tag} from "antd";
import {CheckOutlined, CloseOutlined, EditOutlined, SaveOutlined} from '@ant-design/icons';
import s from "./Products.module.css";
import {ColumnsType} from "antd/lib/table";
import Products from "./Products";
import {AppStateType} from "../../../redux/store";
import {ProductType,
	setLoadingActionCreator, SetLoadingActionCreatorType,
	switchStockActionCreator, SwitchStockActionCreatorType
} from "../../../redux/products-reducer";


type OwnType = {};
type MapDispatchToPropsType = {
	setLoading: (loading: boolean) => SetLoadingActionCreatorType
	switchStock: (productId: number) => SwitchStockActionCreatorType
};
type MapStateToPropsType = {
	loading: boolean
	products: Array<ProductType>
}
type PropsType = MapStateToPropsType & MapDispatchToPropsType & OwnType;
type StateType = {
	editableProductId: number | null
}

class ProductsContainer extends React.Component<PropsType, StateType> {
	columns: ColumnsType<ProductType>;

	state = {
		editableProductId: null
	};

	constructor(props: PropsType) {
		super(props);

		this.columns = [{
			title: "Наличие", key: 'quickActions',
			render: (product: ProductType) => {
				return (this.state.editableProductId === product.key) ? null
					: <Switch
						checkedChildren={<CheckOutlined/>}
						unCheckedChildren={<CloseOutlined/>}
						onChange={this.switchStock(product.key)}
						checked={product.inStock}
					/>
			}
			},
			{title: 'Наименование товара', key: 'name',
				render: (product: ProductType) => {
					return (this.state.editableProductId === product.key)
						? <Input placeholder="Наименование" defaultValue={product.name}/>
						: product.name
				}
			},
			{title: 'Цена', key: 'price',
				render: (product: ProductType) => {
					return (this.state.editableProductId === product.key)
						? <Input suffix="₽" defaultValue={product.price} type="number" style={{width: "85px"}}/>
						: product.price
				}
			},
			{
				title: 'Бэйджи', key: 'tags', dataIndex: 'tags',
				render: (tags: Array<string>) => (
					<div className={s.tagsWrapper}>
						{tags.map((tag: string) => {
							return <Tag color="volcano" key={tag}>{tag}</Tag>
						})}
					</div>)
			},
			{
				key: 'mainActions',
				render: (product: ProductType) => {
					return <div className={s.buttonsWrapper}>
						{(this.state.editableProductId === product.key) ?
							<>
								<Button shape="circle" icon={<SaveOutlined />} title="Сохранить"
								        onClick={this.switchEditable(product.key)}/>
								<Button shape="circle" icon={<CloseOutlined />} title="Выйти из режима редактирования без сохранения"
								        onClick={this.switchEditable(product.key)}/>
							</>
						:
						<Button shape="circle" icon={<EditOutlined/>} title="Редактировать товар"
						        onClick={this.switchEditable(product.key)}/>}
					</div>
				}
			}
		];
	}

	switchEditable = (productId: number) => {
		return () => {
			!this.state.editableProductId ? this.setState({editableProductId: productId})
				: this.setState({editableProductId: null})
		}
	};

	switchStock = (productId: number) => {
		return () => {
			this.props.setLoading(true);
			this.props.switchStock(productId);

			setTimeout(() => {
				this.props.setLoading(false);
			}, 2000);
		}
	};

	render() {
		return <Products columns={this.columns}
		                 products={this.props.products}
		                 loading={this.props.loading}
		                 editableProductId={this.state.editableProductId}/>
	}
}

const mapStateToProps = (state: AppStateType): MapStateToPropsType => ({
	loading: state.products.loading,
	products: state.products.list
});

export default connect<MapStateToPropsType, MapDispatchToPropsType, OwnType, AppStateType>(
	mapStateToProps,
	{setLoading: setLoadingActionCreator, switchStock: switchStockActionCreator}
)(ProductsContainer);