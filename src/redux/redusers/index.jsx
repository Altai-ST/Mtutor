import { SETCOURSE, SET_ALL_COURSES, SET_EDIT,DELETE_COURSE } from '../actionsTypes'

const initialState = {
	courses: [],
    editedData: null
}

export const rootReducer = (state = initialState, action) => {
	switch (action.type) {
		case SETCOURSE:
			return {
				...state,
				courses: [...state.courses, action.payload],
			}
            case SET_ALL_COURSES:
                return {
                    ...state,
                    courses: action.payload.docs
                }
                case SET_EDIT:
                    return {
                        ...state,
                        editedData: action.payload
                    }
               
                case DELETE_COURSE:
                    return {
                        ...state,
                        courses: state.courses.filter(el => {
                            console.log('reducer id' , action.payload === el.doc.id , action.payload , el.doc.id);
                            return el.doc.id !== action.payload
                        })
                    }
                  
		default:
			return state
            
	}
}