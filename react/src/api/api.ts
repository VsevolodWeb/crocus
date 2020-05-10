import axios from 'axios';

export const usersAPI = {
	getCurrentLocation() {
		return axios.get('/location/get').then(response => response.data);
	}
};