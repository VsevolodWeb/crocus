import React from 'react';
import { Switch, Route } from 'react-router-dom';
import ProductsContainer from "./components/pages/Products/ProductsContainer";
import Categories from "./components/pages/Categories/Categories";
import Auth from "./components/pages/Auth/Auth";


export const useRoutes = (isAuthenticated: boolean) => {
	if(isAuthenticated) {
		return (
			<Switch>
				<Route exact path="/admin/products">
					<ProductsContainer/>
				</Route>
				<Route exact path="/admin/categories">
					<Categories/>
				</Route>
			</Switch>
		)
	}

	return (
		<Switch>
			<Route exact path="/admin">
				<Auth/>
			</Route>
		</Switch>
	)
};