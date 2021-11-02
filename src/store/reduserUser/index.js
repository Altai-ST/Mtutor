import { SAVE_TOKENS, SAVE_USER } from "../actionType";

const initialState={
    token:'',
    user:''
}

export const userRedusers =(state=initialState, action)=>{
    switch (action.type) {
        case SAVE_TOKENS:
            console.log(action.payload)
            return{
                ...state,
                token: action.payload,
            }
        case SAVE_USER:
            console.log(action.payload)
            return{
                ...state,
                user: action.payload,
            }
        default: return state
    }
}