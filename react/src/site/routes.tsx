import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Main from "./pages/Main/Main";


export const useRoutes = () => {
	return (
		<Switch>
			<Route exact path="/">
				<Main/>
			</Route>
		</Switch>
	)
};