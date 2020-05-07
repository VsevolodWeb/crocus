import axios from 'axios';

const instance = axios.create({
	baseURL: '/'
});

export const usersAPI = {
	getCurrentLocation() {
		return instance.get(``).then(response => response.data);
	}
};