import { usersAPI } from './../api/api';
import { Dispatch } from 'redux';

const SET_CURRENT_LOCATION = "SET_CURRENT_LOCATION";

type InitialStateType = {
	currentLocation: string | null
	locationList: Array<string> | null
}

const initialState: InitialStateType = {
	currentLocation: null,
	locationList: null
};

type ActionsTypes = SetCurrentLocationType

const userReducer = (state = initialState, action: ActionsTypes): InitialStateType => {
	switch (action.type) {
		case SET_CURRENT_LOCATION: {
			return { ...state, currentLocation: action.currentLocation };
		}
		default: {
			return state;
		}
	}
};

type SetCurrentLocationType = {
	type: typeof SET_CURRENT_LOCATION
	currentLocation: string
}
const setCurrentLocation = (currentLocation: string): SetCurrentLocationType => ({ type: SET_CURRENT_LOCATION, currentLocation });

export const setCurrentLocationThunkCreator = () => async (dispatch: Dispatch<ActionsTypes>) => {
	const response = await usersAPI.getCurrentLocation();

	if (response.resultCode === 0) {
		dispatch(setCurrentLocation(response.data.ip));
	}
};

export default userReducer;