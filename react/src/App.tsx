import React from 'react'
import { ConfigProvider } from 'antd';
import ruRU from 'antd/es/locale/ru_RU';
import {Provider} from "react-redux";
import {Switch, BrowserRouter, Route} from "react-router-dom";
import store from "./redux/store";
import {useAuth} from "./hooks/auth.hook";
import {AuthContext} from "./context/AuthContext";
import Admin from "./admin/Admin";
import Site from "./site/Site";


const App = () => {
	const {token, login, logout, userId} = useAuth();
	const isAuthenticated = !!token;

	return (
		<AuthContext.Provider value={{token, login, logout, userId, isAuthenticated}}>
			<BrowserRouter>
				<Provider store={store}>
					<ConfigProvider locale={ruRU}>
						<Switch>
							<Route path="/admin">
								<Admin isAuthenticated={isAuthenticated} />
							</Route>
							<Route path="/">
								<Site/>
							</Route>
						</Switch>
					</ConfigProvider>
				</Provider>
			</BrowserRouter>
		</AuthContext.Provider>
	);
};

export default App;