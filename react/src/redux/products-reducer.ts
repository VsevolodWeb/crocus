import {UploadFile} from "antd/lib/upload/interface";

const SET_LOADING = "SET_LOADING";
const SWITCH_STOCK = "SWITCH_STOCK";
const SWITCH_PUBLISH = "SWITCH_PUBLISH";

export type ProductType = {
	key: number
	name: string
	categoryId: number
	description: string
	price: number
	tags: Array<string>
	floweringTime: Array<string>
	flowerDiameter: {
		size: number
		unit: string
	}
	plantHeight: {
		from: number
		to: number
		unit: string
	}
	plantingLocation: string
	frostResistance: string
	isPublished: boolean
	inStock: boolean
	minAmount: number
	photos: Array<UploadFile>
}
export type ProductOptionsType = {
	plantingLocationList: Array<string>
	frostResistance: Array<string>
}

type InitialStateType = {
	list: Array<ProductType>
	units: Array<string>
	productOptions: ProductOptionsType
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
			flowerDiameter: {
				size: 1,
				unit: "см."
			},
			plantHeight: {
				from: 60,
				to: 70,
				unit: "м."
			},
			plantingLocation: "Полутень",
			frostResistance: "-34°C...-29°C (Зона 4)",
			isPublished: false,
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
			flowerDiameter: {
				size: 1,
				unit: "см."
			},
			plantHeight: {
				from: 60,
				to: 70,
				unit: "см."
			},
			plantingLocation: "Полутень",
			frostResistance: "-34°C...-29°C (Зона 4)",
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
	units: ["см.", "м."],
	productOptions: {
		plantingLocationList: ["Солнце", "Солнце-полутень", "Тень-полутень", "Полутень"],
		frostResistance: ["-34°C...-29°C (Зона 4)", "-29°C...-23°C (Зона 5)", "-23°C...-18°C (Зона 6)", "+4°C...+10°C (Зона 11)"]
	},
	loading: false
};

type ActionsTypes = SetLoadingActionCreatorType | SwitchStockActionCreatorType | SwitchPublishActionCreatorType;

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
		case SWITCH_PUBLISH: {
			return {...state, list: state.list.map((product: ProductType) => {
					return product.key === action.productId ? {...product, isPublished: !product.isPublished} : product;
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

export type SwitchPublishActionCreatorType = {
	type: typeof SWITCH_PUBLISH
	productId: number
}
export const switchPublishActionCreator = (productId: number): SwitchPublishActionCreatorType => {
	return {type: SWITCH_PUBLISH, productId}
};

export default productsReducer;