const TEST = "TEST";

type InitialStateType = {
	currentLocation: string | null
	locationList: Array<string> | null
}

const initialState: InitialStateType = {
	currentLocation: null,
	locationList: null
};

//type ActionsTypes = SetLoadingActionCreatorType | SwitchStockActionCreatorType;

const userReducer = (state = initialState, action: any): InitialStateType => {
	switch (action.type) {
		case TEST: {
			return state
		}
		default: {
			return state;
		}
	}
};

// export const setUserPhotoThunkCreator = (photo: string) => async (dispatch: Dispatch<ActionsTypes>) => {
//     const response = await profileAPI.updateUserPhoto(photo);

//     if(response.resultCode === 0) {
//         dispatch(setUserPhoto(response.data.photos));
//     }
// };

export default userReducer;