import {createContext} from "react";
import {AuthLoginType, AuthLogoutType, TokenType, UserIdType} from "../hooks/auth.hook";

type AuthContextType = {
	token: TokenType
	userId: UserIdType
	login: AuthLoginType
	logout: AuthLogoutType
	isAuthenticated: boolean
}

export const AuthContext = createContext<AuthContextType>({
	token: null,
	userId: null,
	login: (_jwtToken, _userId) => {},
	logout: () => {},
	isAuthenticated: false
});