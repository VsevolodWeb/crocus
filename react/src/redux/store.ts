import {createStore, combineReducers} from 'redux';

//import productsReducer from './products-reducer'

const rootReducer = combineReducers({
	//products: productsReducer
});

type RootReducerType = typeof rootReducer;
export type AppStateType = ReturnType<RootReducerType>

const store = createStore(rootReducer);

export default store;