import React from "react";
import {Table, Typography, Tag, Button, Spin, Switch} from "antd";
import { CheckOutlined, CloseOutlined, EditOutlined } from '@ant-design/icons';
import s from "./Products.module.css";
import {state, StateProductType} from "../../../state/state";
import expandedRowRender from "./expandedRowRender";
import {ColumnsType} from "antd/lib/table";
const { Title } = Typography;


type StateType = {
    loading: boolean
    productsList: Array<StateProductType>
}

type PropsType = {}

class Products extends React.Component<PropsType, StateType> {
    columns: ColumnsType<StateProductType>;

    constructor(props: any) {
		super(props);
		
		this.state = {
			loading: false,
			productsList: state.products
		};
		
		this.columns = [
			{ title: "Наличие", key: 'quickActions',
				render: () => <Switch
					checkedChildren={<CheckOutlined />}
					unCheckedChildren={<CloseOutlined />}
					onChange={this.switchLoading}
					defaultChecked
				/>
			},
			{ title: 'Наименование товара', dataIndex: 'name', key: 'name'},
			{ title: 'Цена', dataIndex: 'price', key: 'price' },
			{ title: 'Бэйджи', key: 'tags', dataIndex: 'tags',
				render: (tags: Array<string>) => (
					<div className={s.tagsWrapper}>
						{tags.map((tag: string) => {
							return <Tag color="volcano" key={tag}>
										{tag}
									</Tag>
						})}
					</div>)
			},
			{ title: 'Время цветения', dataIndex: 'floweringTime', key: 'floweringTime' },
			{ title: 'Диаметр цветка', dataIndex: 'flowerDiameter', key: 'flowerDiameter' },
			{ title: 'Высота растения', dataIndex: 'plantHeight', key: 'plantHeight' },
			{ title: 'Местоположение', dataIndex: 'plantingLocation', key: 'plantingLocation' },
			{ title: 'Морозостойкость', dataIndex: 'frostResistance', key: 'frostResistance' },
			{ key: 'mainActions', render: () => <Button shape="circle" icon={<EditOutlined />} title="Редактировать товар"/> }
		];
	}
	
	switchLoading = () => {
		this.setState({ loading: true });
		
		setTimeout(() => {
			this.setState({ loading: false });
		}, 2000);
	};
	
	render() {
		return <>
				<Title>Товары</Title>
				<Spin spinning={this.state.loading}>
					<Table
						columns={this.columns}
						expandedRowRender={expandedRowRender}
						dataSource={this.state.productsList}
					/>
				</Spin>
			   </>
	}
}
export default Products;