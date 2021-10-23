
import { SETFORM, SETPASSWORD } from "../actionType";

const initialState={
    formEmail:{}
}


export const Autorization =(state = initialState, action)=>{
    switch (action.type) {
        case SETFORM:
            console.log(action.payload)
            return{
                ...state,
                formEmail: action.payload
            }
    
        case SETPASSWORD:
                return{
                    ...state,
                    formEmail:{
                        ...state.formEmail,
                        password: action.payload
                    }
                }

        default: return state
    }
}