
import { SAVETOKENS } from "../actionType";

const initialState={
    token:'',
    user:''
}

export const userRedusers =(state=initialState, action)=>{
    switch (action.type) {
        case SAVETOKENS:
            console.log(action.payload)
            return{
                ...state,
                token: action.payload.token,
                user: action.payload.user,
            }
        default: return state
    }
}