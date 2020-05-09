import axios from 'axios';

export const usersAPI = {
	getCurrentLocation() {
		return axios.get('/getLocation').then(response => response.data);
	}
};