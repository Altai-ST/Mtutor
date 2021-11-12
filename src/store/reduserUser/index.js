import { SAVE_TOKENS, SAVE_USER, SET_QUALIFICATION } from "../actionType";

const initialState={
    token:'',
    user:'',
    qualification:'',
    qual:false,
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
        default: return state
    }
}