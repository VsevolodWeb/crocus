import React from 'react';
import { Form, Input, Button, Checkbox } from 'antd';
import s from './Auth.module.css';

type PropsType = {}

const Auth: React.FC<PropsType> = props => {
	const tailLayout = {
		wrapperCol: { offset: 8, span: 16 },
	};

	return (
		<div className={s.container}>
			<Form
				labelCol={{ span: 8 }}
				wrapperCol={{ span: 16 }}
				name="basic"
				initialValues={{ remember: true }}
			>
				<Form.Item
					label="Логин"
					name="username"
					rules={[{ required: true, message: 'Пожалуйста, введите ваш логин.' }]}
				>
					<Input />
				</Form.Item>

				<Form.Item
					label="Пароль"
					name="password"
					rules={[{ required: true, message: 'Пожалуйста, введите ваш пароль.' }]}
				>
					<Input.Password />
				</Form.Item>

				<Form.Item {...tailLayout} name="remember">
					<Checkbox>Запомнить меня</Checkbox>
				</Form.Item>

				<Form.Item {...tailLayout}>
					<Button type="primary" htmlType="submit">
						Submit
					</Button>
				</Form.Item>
			</Form>
		</div>
	);
};

export default Auth;