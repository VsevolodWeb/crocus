import {useCallback, useEffect, useState} from "react";


export type AuthLoginType = (jwtToken: string, id: number) => void;
export type AuthLogoutType = () => void;
export type TokenType = null | string;
export type UserIdType = null | number;

const storageName = 'userData';

export const useAuth = () => {
	const [token, setToken] = useState<TokenType>(null);
	const [userId, setUserId] = useState<UserIdType>(null);

	const login: AuthLoginType = useCallback((jwtToken,  id) => {
		setToken(jwtToken);
		setUserId(id);

		localStorage.setItem(storageName, JSON.stringify({
			userId, token
		}))
	}, []);

	const logout: AuthLogoutType = useCallback(() => {
		setToken(null);
		setUserId(null);

		localStorage.removeItem(storageName);
	}, []);

	useEffect(() => {
		let data;
		const localStorageData = localStorage.getItem(storageName);

		if(localStorageData) {
			data = JSON.parse(localStorage.getItem(storageName)!);

			if(data.token) {
				login(data.token, data.userId);
			}
		}
	}, [login]);

	return { login, logout, token, userId }
};