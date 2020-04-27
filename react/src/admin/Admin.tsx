import React from 'react'
import {Breadcrumb, Col, Layout, Row} from 'antd';
import s from './Admin.module.css';
import MenuComponent from "./components/common/Menu/Menu";
import {useRoutes} from './routes'


const {Header, Content, Footer} = Layout;

type PropsType = {
	isAuthenticated: boolean
}
const Admin: React.FC<PropsType> = props => {
	const routes = useRoutes(props.isAuthenticated);

	return (
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
					{routes}
				</div>
			</Content>
			<Footer className={s.footer}>©{(new Date()).getFullYear()} Крокус Великие Луки</Footer>
		</Layout>
	);
};

export default Admin;