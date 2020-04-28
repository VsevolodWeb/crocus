import React, { Suspense } from 'react'
import {Provider} from "react-redux";
import {Switch, BrowserRouter, Route} from "react-router-dom";
import store from "./redux/store";
import {useAuth} from "./hooks/auth.hook";
import {AuthContext} from "./context/AuthContext";
const Admin = React.lazy(() => import('./admin/Admin'));
const Site = React.lazy(() => import('./site/Site'));


const App = () => {
	const {token, login, logout, userId} = useAuth();
	const isAuthenticated = !!token;

	return (
		<AuthContext.Provider value={{token, login, logout, userId, isAuthenticated}}>
			<BrowserRouter>
				<Provider store={store}>
					<Switch>
						<Route path="/admin">
							<Suspense fallback={<div>Загрузка</div>}>
								<Admin isAuthenticated={isAuthenticated}/>
							</Suspense>
						</Route>
						<Route path="/">
							<Suspense fallback={<div>Загрузка</div>}>
								<Site/>
							</Suspense>
						</Route>
					</Switch>
				</Provider>
			</BrowserRouter>
		</AuthContext.Provider>
	);
};

export default App;