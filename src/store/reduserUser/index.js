import { SAVE_TOKENS, SAVE_USER } from "../actionType";

const initialState={
    token:'',
    user:''
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
        default: return state
    }
}