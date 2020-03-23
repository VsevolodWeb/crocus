const TEST = "TEST";

export type CategoryType = {
	key: number
	title: string
	description: string
}

type InitialStateType = {
	list: Array<CategoryType>
}

const initialState: InitialStateType = {
	list: [
		{
			key: 1,
			title: "Астильбы",
			description: "Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum"
		},
		{
			key: 2,
			title: "Гвоздики",
			description: "Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum"
		}
	]
};

//type ActionsTypes = SetLoadingActionCreatorType | SwitchStockActionCreatorType;

const categoriesReducer = (state = initialState, action: any): InitialStateType => {
	switch (action.type) {
		case TEST: {
			return state
		}
		default: {
			return state;
		}
	}
};

export default categoriesReducer;