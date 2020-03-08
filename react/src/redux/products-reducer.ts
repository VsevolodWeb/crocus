type InitialStateType = {
	products: [
		{
			key: number
			name: string
			category: string
			description: string
			price: string
			tags: Array<string>
			floweringTime: string
			flowerDiameter: string
			plantHeight: string
			plantingLocation: string
			frostResistance: string
			isPublished: boolean
			inStock: boolean
			minAmount: number
			photos: Array<string>
		}
	]
}

const initialState: InitialStateType = {
	products: [
		{
			key: 1,
			name: "Астильба Арендса «Color Flash»",
			category: "Астильбы",
			description: "Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum",
			price: "250 ₽",
			tags: ["Хит продаж", "Акция", "Новинка"],
			floweringTime: "август-сентябрь",
			flowerDiameter: "до 1 см.",
			plantHeight: "60-70 см.",
			plantingLocation: "Полутень",
			frostResistance: "-34°C — -29°C (Зона 4)",
			isPublished: true,
			inStock: true,
			minAmount: 1,
			photos: ["https://crocus-vl.ru/images/mnogoletniki/astilby/color_flash.jpg", "https://crocus-vl.ru/images/mnogoletniki/astilby/color_flash.jpg", "https://crocus-vl.ru/images/mnogoletniki/astilby/color_flash.jpg"]
		}
	]
};

//type ActionsTypes = SetInitializationActionType;

const productsReducer = (state = initialState, action: any): InitialStateType => {
	switch (action.type) {
		case "case": {
			return state;
		}
		default: {
			return state;
		}
	}
};

export default productsReducer;