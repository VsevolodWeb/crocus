import {useCallback, useState} from "react";
import {ValidationError} from "express-validator";

type ErrorType = {
	errors: Array<ValidationError>
	message: string
}

export const useHttp = () => {
	const [loading, setLoading] = useState(false);
	const [errors, setErrors] = useState<ErrorType | null>(null);

	const request = useCallback(async (url, method = 'GET', body = null, headers = {}) => {
		setLoading(true);

		if (body) {
			body = JSON.stringify(body);
			headers['Content-Type'] = 'application/json';
		}

		try {
			const response = await fetch(url, {method, body, headers});
			const data = await response.json();

			if (!response.ok) {
				setErrors(data);
				throw new Error();
			}
			setLoading(false);

			return data;
		} catch (e) {
			setLoading(false);
		}
	}, []);

	return {loading, errors, request};
};