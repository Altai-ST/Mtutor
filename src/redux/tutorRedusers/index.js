
import { SET_APPLICATION } from "../actionType";

const initialState={
    
    applications:[]
    
}


export const applicationReducers = (state = initialState, action) => {
	switch (action.type) {
		case SET_APPLICATION:
			return {
				...state,
				applications: [...state.applications, action.payload],
			}
           
		default:
			return state
            
	}
}