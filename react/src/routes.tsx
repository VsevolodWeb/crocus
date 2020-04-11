import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import ProductsContainer from "./components/pages/Products/ProductsContainer";
import Categories from "./components/pages/Categories/Categories";
import Auth from "./components/pages/Auth/Auth";


export const useRoutes = (isAuthenticated: boolean) => {
	if(isAuthenticated) {
		return (
			<Switch>
				<Route exact path="/products">
					<ProductsContainer/>
				</Route>
				<Route exact path="/categories">
					<Categories/>
				</Route>
				<Redirect to="/404"/>
			</Switch>
		)
	}

	return (
		<Switch>
			<Route exact path="/">
				<Auth/>
			</Route>
			<Redirect to="/"/>
		</Switch>
	)
};