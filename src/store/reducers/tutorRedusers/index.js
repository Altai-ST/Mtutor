import { SET_APPLICATION, SET_EDIT_TUTOR_ID } from "../../actionType"


const initialState = {
	applications: [],
	editedAplication: null,
}

export const applicationReducers = (state = initialState, action) => {
	switch (action.type) {
		case SET_APPLICATION:
			console.log(state,'test');
			console.log(action);
			return {
				...state,
				applications: action.payload.docs
			}
			case SET_EDIT_TUTOR_ID:
				return {
					...state,
					editedAplication: action.payload
				}

		default:
			return state
	}
}
