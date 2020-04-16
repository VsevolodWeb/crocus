import React, {useState} from 'react';
import {Form, Input, Button, Checkbox, Col, Row, Typography, Spin} from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import {useHttp} from "../../../hooks/http.hook";

const { Title } = Typography;

export const Auth = () => {
	const {loading, errors, request} = useHttp();
	let errorsList;

	const registerHandler = async (values: any) => {
		try {
			const data = await request('/api/auth/register', 'POST', {...values});
			console.log(data);
		} catch(e) {}
	};

	if(errors) {
		errorsList = <ul>
			{errors.map(item => <li>{item}</li>)}
		</ul>
	}

	console.log(errors)

	return <>
		<Title>Войти личный кабинет</Title>
		<Spin spinning={loading}>
			<Row>
			<Col span={6}>
				<Form onFinish={registerHandler}>
					<Form.Item
						name="email"
						rules={[{ required: true, message: 'Введите ваш e-mail' }, { type: 'email', message: 'Введите правильный e-mail' }]}
					>
						<Input prefix={<UserOutlined />} placeholder="E-mail"/>
					</Form.Item>
					<Form.Item
						name="password"
						rules={[{ required: true, message: 'Введите ваш пароль' }, { min: 6, message: 'Минимальная длина пароля 6 символов' }]}
					>
						<Input
							prefix={<LockOutlined/>}
							type="password"
							placeholder="Пароль"
						/>
					</Form.Item>

					<Form.Item>
						<Button type="primary" htmlType="submit">
							Register
						</Button>
					</Form.Item>
					<div>
						{errorsList}
					</div>
				</Form>
			</Col>
		</Row>
		</Spin>
	</>
};

export default Auth;