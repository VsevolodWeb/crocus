import {UploadFile} from "antd/lib/upload/interface";

const SET_LOADING = "SET_LOADING";
const SWITCH_STOCK = "SWITCH_STOCK";

export enum flowerDiameterUnit {
	centimeter,
	meter
}

export type flowerDiameterType = {
	size: number
	unit: flowerDiameterUnit
}

export type ProductType = {
	key: number
	name: string
	categoryId: number
	description: string
	price: number
	tags: Array<string>
	floweringTime: Array<string>
	flowerDiameter: flowerDiameterType
	plantHeight: string
	plantingLocation: string
	frostResistance: string
	isPublished: boolean
	inStock: boolean
	minAmount: number
	photos: Array<UploadFile>
}

type InitialStateType = {
	list: Array<ProductType>
	loading: boolean
}

const initialState: InitialStateType = {
	list: [
		{
			key: 1,
			name: "Астильба Арендса «Color Flash»",
			categoryId: 1,
			description: "Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum",
			price: 250,
			tags: ["Хит продаж", "Акция", "Новинка"],
			floweringTime: ["август", "сентябрь"],
			flowerDiameter: "1 см.",
			plantHeight: "60-70 см.",
			plantingLocation: "Полутень",
			frostResistance: "-34°C — -29°C (Зона 4)",
			isPublished: true,
			inStock: true,
			minAmount: 1,
			photos: [
				{
					uid: '1',
					url: 'https://crocus-vl.ru/images/mnogoletniki/astilby/color_flash.jpg',
				},
				{
					uid: '2',
					url: 'https://crocus-vl.ru/images/mnogoletniki/astilby/color_flash.jpg',
				},
				{
					uid: '3',
					url: 'https://crocus-vl.ru/images/mnogoletniki/astilby/color_flash.jpg',
				}
			] as Array<UploadFile>
		},
		{
			key: 2,
			name: "Астильба Арендса «Color Flash»",
			categoryId: 2,
			description: "Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum",
			price: 990,
			tags: ["Хит продаж", "Акция", "Новинка"],
			floweringTime: ["август", "сентябрь"],
			flowerDiameter: "до 1 см.",
			plantHeight: "60-70 см.",
			plantingLocation: "Полутень",
			frostResistance: "-34°C — -29°C (Зона 4)",
			isPublished: true,
			inStock: false,
			minAmount: 1,
			photos: [
				{
					uid: '1',
					url: 'https://crocus-vl.ru/images/mnogoletniki/astilby/color_flash.jpg',
				},
				{
					uid: '2',
					url: 'https://crocus-vl.ru/images/mnogoletniki/astilby/color_flash.jpg',
				},
				{
					uid: '3',
					url: 'https://crocus-vl.ru/images/mnogoletniki/astilby/color_flash.jpg',
				}
			] as Array<UploadFile>
		}
	],
	loading: false
};

type ActionsTypes = SetLoadingActionCreatorType | SwitchStockActionCreatorType;

const productsReducer = (state = initialState, action: ActionsTypes): InitialStateType => {
	switch (action.type) {
		case SET_LOADING: {
			return {...state, loading: action.loading}
		}
		case SWITCH_STOCK: {
			return {...state, list: state.list.map((product: ProductType) => {
					return product.key === action.productId ? {...product, inStock: !product.inStock} : product;
				})}
		}
		default: {
			return state;
		}
	}
};

export type SetLoadingActionCreatorType = {
	type: typeof SET_LOADING
	loading: boolean
}
export const setLoadingActionCreator = (loading: boolean): SetLoadingActionCreatorType => ({type: SET_LOADING, loading});
export type SwitchStockActionCreatorType = {
	type: typeof SWITCH_STOCK
	productId: number
}
export const switchStockActionCreator = (productId: number): SwitchStockActionCreatorType => ({type: SWITCH_STOCK, productId});

export default productsReducer;