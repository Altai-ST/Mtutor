import { LOCAL_SAVE_TUTOR_COURSES, SAVE_TOKENS, SAVE_TUTOR_COURSES, SAVE_USER, SET_QUALIFICATION } from "../actionType";

const initialState={
    token:'',
    user:'',
    qualification:'',
    qual:false,
    saveCourse:false,
    localSaveCorse:''
}

export const userRedusers =(state=initialState, action)=>{
    switch (action.type) {
        case SAVE_TOKENS:
            return{
                ...state,
                token: action.payload,
            }
        case SAVE_USER:
            return{
                ...state,
                user: action.payload,
            }
        case SET_QUALIFICATION:
            return{
                ...state,
                qualification: action.payload
            }
        case SAVE_TUTOR_COURSES:
            console.log(action.payload)
            return{
                ...state,
                saveCourse: action.payload
            }
        case LOCAL_SAVE_TUTOR_COURSES:
            return{
                ...state,
                localSaveCorse: action.payload
            }
        default: return state
    }
}