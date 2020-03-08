import React from "react";
import {Spin, Table, Typography} from "antd";
import expandedRowRender from "./ExpandedRowRender/ExpandedRowRender";
import {ColumnsType} from "antd/lib/table";
import {ProductType} from "../../../redux/products-reducer";
const {Title} = Typography;

type PropsType = {
	columns: ColumnsType<ProductType>
	products: Array<ProductType>
}

const Products = (props: PropsType) => {
	return <>
		<Title>Товары</Title>
		<Spin spinning={this.state.loading}>
			<Table
				columns={props.columns}
				expandedRowRender={expandedRowRender}
				dataSource={this.state.productsList}
			/>
		</Spin>
	</>
};

export default Products;