import React, {useState} from 'react';
import {Form, Input, Button, Checkbox, Col, Row, Typography, Spin} from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import {useHttp} from "../../../hooks/http.hook";

const { Title } = Typography;

export const Auth = () => {
	const {loading, error, request} = useHttp();

	const registerHandler = async (values: any) => {
		try {
			const data = await request('/api/auth/register', 'POST', {...values});
			console.log(data);
		} catch(e) {}
	};

	return <>
		<Title>Войти личный кабинет</Title>
		<Spin spinning={loading}>
			<Row>
			<Col span={6}>
				<Form
					name="normal_login"
					className="login-form"
					initialValues={{ remember: true }}
					onFinish={registerHandler}
				>
					<Form.Item
						name="username"
						rules={[{ required: true, message: 'Введите ваш логин' }]}
					>
						<Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Логин" />
					</Form.Item>
					<Form.Item
						name="password"
						rules={[{ required: true, message: 'Введите ваш пароль' }]}
					>
						<Input
							prefix={<LockOutlined className="site-form-item-icon" />}
							type="password"
							placeholder="Password"
						/>
					</Form.Item>

					<Form.Item>
						<Button type="primary" htmlType="submit" className="login-form-button">
							Register
						</Button>
					</Form.Item>
				</Form>
			</Col>
		</Row>
		</Spin>
	</>
};

export default Auth;