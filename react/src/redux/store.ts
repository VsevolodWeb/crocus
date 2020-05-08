import {createStore, combineReducers, applyMiddleware} from 'redux';
import thunkMiddleware from 'redux-thunk';

import productsReducer from './products-reducer'
import categoriesReducer from "./categories-reducer";
import userReducer from './user-reducer';

const rootReducer = combineReducers({
	products: productsReducer,
	categories: categoriesReducer,
	user: userReducer
});

type RootReducerType = typeof rootReducer;
export type AppStateType = ReturnType<RootReducerType>

const store = createStore(rootReducer, applyMiddleware(thunkMiddleware));

export default store;