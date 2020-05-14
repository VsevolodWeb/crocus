import axios from 'axios';

export const usersAPI = {
	getCurrentLocation() {
		//return axios.get('/api/location/get').then(response => response.data);
		return axios.get('/api/location/get').then(response => response.data);
	}
};