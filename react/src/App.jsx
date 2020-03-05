import React from 'react'
import {Breadcrumb, Col, Layout, Row} from 'antd';
import {BrowserRouter as Router, Route} from "react-router-dom";

import s from './App.module.css';
import Products from "./components/pages/Products/Products";
import Categories from "./components/pages/Categories/Categories";
import MenuComponent from "./components/common/Menu/Menu";

const {Header, Content, Footer} = Layout;

const App = () => {
	return (
		<Router>
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
							<Products/>
						</Route>
						<Route path="/categories">
							<Categories/>
						</Route>
					</div>
				</Content>
				<Footer className={s.footer}>Crocus ©2020 Created by Vsevolod Ivanov</Footer>
			</Layout>
		</Router>
	);
};

export default App;