import React, {useEffect} from 'react';
import {Form, Input, Button, Col, Row, Typography, Spin, message} from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import {useHttp} from "../../../hooks/http.hook";

const { Title } = Typography;

export const Auth = () => {
	const {loading, errors, request} = useHttp();

	const loginHandler = async (values: any) => {
		try {
			const data = await request('/api/auth/login', 'POST', {...values});
			message.success(data.message);
		} catch(e) {}
	};

	useEffect(() => {
		if(errors?.errors) {
			errors.errors.forEach(item => {
				message.error(item.msg)
			});
		} else if(errors?.message) {
			message.error(errors.message);
		}
	}, [errors]);

	return <>
		<Title>Вход в личный кабинет</Title>
		<Spin spinning={loading}>
			<Row>
				<Col span={6}>
					<Form onFinish={loginHandler}>
						<Form.Item
							name="email"
							rules={[{ required: true, message: 'Введите ваш e-mail' }, { type: 'email', message: 'Некорректный e-mail' }]}
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
								Войти
							</Button>
						</Form.Item>
					</Form>
				</Col>
			</Row>
		</Spin>
	</>
};

export default Auth;