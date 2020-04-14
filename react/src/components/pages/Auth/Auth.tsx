import React, {useState} from 'react';
import {Form, Input, Button, Checkbox, Col, Row, Typography, Spin} from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import {useHttp} from "../../../hooks/http.hook";

const { Title } = Typography;

export const Auth = () => {
	const {loading, errors, request} = useHttp();

	const registerHandler = async (values: any) => {
		try {
			const data = await request('/api/auth/register', 'POST', {...values});
			console.log(data);
		} catch(e) {}
	};

	if(errors) {
		//errors.find(x => x.id === '45').foo
	}

	return <>
		<Title>Войти личный кабинет</Title>
		<Spin spinning={loading}>
			<Row>
			<Col span={6}>
				<Form onFinish={registerHandler}>
					<Form.Item
						name="email"
						rules={[{ required: true, message: 'Введите ваш e-mail' }]}
					>
						<Input prefix={<UserOutlined />} placeholder="E-mail"/>
					</Form.Item>
					<Form.Item
						name="password"
						rules={[{ required: true, message: 'Введите ваш пароль' }]}
					>
						<Input
							prefix={<LockOutlined/>}
							type="password"
							placeholder="Password"
						/>
					</Form.Item>

					<Form.Item>
						<Button type="primary" htmlType="submit">
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