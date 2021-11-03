import { CHANGE_COURSE, SETCOURSES, SET_ALL_COURSES, SET_EDIT,DELETE_COURSE } from '../actionsTypes'

const initialState = {
	courses: [],
    editedData: null
}

export const rootReducer = (state = initialState, action) => {
	switch (action.type) {
		case SETCOURSES:
			return {
				...state,
				courses: [...state.courses, action.payload],
			}
            break;
            case SET_ALL_COURSES:
                return {
                    ...state,
                    courses: action.payload.docs
                }
                break;
                case SET_EDIT:
                    return {
                        ...state,
                        editedData: action.payload
                    }
                    break;
            case CHANGE_COURSE:
                return {
                    ...state,
                    courses: state.courses.map(el => {
                        return el.doc.id === action.payload.doc.id 
                        ? {...el, doc: {...el.doc , name: action.payload.newName}} : el
                    })
                }
                break;
                case DELETE_COURSE:
                    return {
                        ...state,
                        courses: state.courses.filter(el => {
                            console.log('reducer id' , action.payload === el.doc.id , action.payload , el.doc.id);
                            return el.doc.id !== action.payload
                        })
                    }
                    break;
		default:
			return state
            
	}
}
