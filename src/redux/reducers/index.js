
import { SAVETOKENS, SETFORM, SETPASSWORD, SETROLES } from "../actionType";

const initialState={
    formEmail:{
        email:'',
        password:'',
        role:'',
        phone:'',
        fullName:'',
    },
    tokens:{

    }
}


export const Autorization =(state = initialState, action)=>{
    switch (action.type) {
        case SETFORM:
            console.log(action.payload)
            return{
                ...state,
                formEmail:{
                    ...state.formEmail,
                    email:action.payload.email,
                    phone:action.payload.phone,
                    fullName:action.payload.fullName,
                }
            }
    
        case SETPASSWORD:
                return{
                    ...state,
                    formEmail:{...state.formEmail, password: action.payload }
                }
        case SETROLES:
            console.log(action.payload)
            return{
                ...state,
                formEmail:{
                    ...state.formEmail,
                    role:action.payload,
                }
            }
        
        
        default: return state
    }
}