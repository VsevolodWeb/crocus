import React from 'react';
import {Form, Input, Button, Checkbox, Col, Row, Typography} from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import {useHttp} from "../../../hooks/http.hook";

const { Title } = Typography;

export const Auth = () => {
	const {loading, error, request} = useHttp();

	const registerHandler = async () => {
		try {
			const data = await request('/api/auth/register');
		} catch(e) {}
	}

	const onFinish = (values: any) => {
		console.log('Received values of form: ', values);
	};

	return <>
		<Title>Войти личный кабинет</Title>
		<Row>
			<Col span={6}>
				<Form
					name="normal_login"
					className="login-form"
					initialValues={{ remember: true }}
					onFinish={onFinish}
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
						<Form.Item name="remember" valuePropName="checked" noStyle>
							<Checkbox>Запомнить меня</Checkbox>
						</Form.Item>

						<a className="login-form-forgot" href="!#">
							Forgot password
						</a>
					</Form.Item>

					<Form.Item>
						<Button type="primary" htmlType="submit" className="login-form-button">
							Log in
						</Button>
						<div style={{marginTop: 20}}>
							Or <a href="!#">register now!</a>
						</div>
					</Form.Item>
				</Form>
			</Col>
		</Row>
	</>
};

export default Auth;