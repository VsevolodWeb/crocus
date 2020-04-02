import React from "react";
import {Spin, Table, Typography} from "antd";
import ExpandedRowRender from "./ExpandedRowRender/ExpandedRowRender";
import {ColumnsType} from "antd/lib/table";
import {ProductType} from "../../../redux/products-reducer";
import {CategoryType} from "../../../redux/categories-reducer";
const {Title} = Typography;

type PropsType = {
	columns: ColumnsType<ProductType>
	products: Array<ProductType>
	categories: Array<CategoryType>
	units: Array<string>
	plantingLocationList: Array<string>
	loading: boolean
	editableProductId: number | null
}

const Products = (props: PropsType) => {
	return <>
		<Title>Товары</Title>
		<Spin spinning={props.loading}>
			<Table
				columns={props.columns}
				expandedRowRender={
					(product: ProductType) => <ExpandedRowRender product={product} categories={props.categories}
					                                             editableProductId={props.editableProductId} units={props.units}
					                                             plantingLocationList={props.plantingLocationList}/>
				}
				dataSource={props.products}
			/>
		</Spin>
	</>
};

export default Products;