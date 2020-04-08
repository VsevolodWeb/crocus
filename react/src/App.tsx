import React from 'react'
import {Breadcrumb, Col, Layout, Row} from 'antd';
import { ConfigProvider } from 'antd';
import ruRU from 'antd/es/locale/ru_RU';
import {BrowserRouter as Router, Route} from "react-router-dom";
import {Provider} from "react-redux";
import s from './App.module.css';
import Categories from "./components/pages/Categories/Categories";
import MenuComponent from "./components/common/Menu/Menu";
import store from "./redux/store";
import ProductsContainer from "./components/pages/Products/ProductsContainer";
import AuthContainer from './components/pages/Auth/AuthContainer';


const {Header, Content, Footer} = Layout;

const App = () => {
	return (
		<Router>
			<Provider store={store}>
				<ConfigProvider locale={ruRU}>
					<Layout>
						<Header className={s.header}>
							<Row>
								<Col span={4}>
									<div className={s.logoWrapper}>
										<div className={s.logo}/>
									</div>
								</Col>
								<Col span={20}>
									<MenuComponent/>
								</Col>
							</Row>
						</Header>
						<Content className={s.mainArea}>
							<Breadcrumb className={s.breadcrumbs}>
								<Breadcrumb.Item>Главная</Breadcrumb.Item>
								<Breadcrumb.Item>XXX</Breadcrumb.Item>
							</Breadcrumb>
							<div className={s.content}>
								<Route exact path="/">
									<AuthContainer/>
								</Route>
								<Route path="/products">
									<ProductsContainer/>
								</Route>
								<Route path="/categories">
									<Categories/>
								</Route>
							</div>
						</Content>
						<Footer className={s.footer}>©{(new Date).getFullYear()} Крокус Великие Луки</Footer>
					</Layout>
				</ConfigProvider>
			</Provider>
		</Router>
	);
};

export default App;