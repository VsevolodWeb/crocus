import {createStore, combineReducers} from 'redux';

import productsReducer from './products-reducer'
import categoriesReducer from "./categories-reducer";

const rootReducer = combineReducers({
	products: productsReducer,
	categories: categoriesReducer
});

type RootReducerType = typeof rootReducer;
export type AppStateType = ReturnType<RootReducerType>

const store = createStore(rootReducer);

export default store;