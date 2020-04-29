import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import ProductsContainer from "./pages/Products/ProductsContainer";
import Categories from "./pages/Categories/Categories";
import Auth from "./pages/Auth/Auth";


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
				<Redirect to={"/admin/products"}/>
			</Switch>
		)
	}

	return (
		<Switch>
			<Route exact path="/admin">
				<Auth/>
			</Route>
			<Redirect to={"/admin"}/>
		</Switch>
	)
};