
import { SAVETOKENS, SETFORM, SETPASSWORD, SETROLES, SETSINGIN } from "../actionType";

const initialState={
    formEmail:{
        email:'',
        password:'',
        role:'',
        phone:'',
        fullName:'',
    },
    singInForm:{
        email:'',
        password:''
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
        case SETROLES:
            console.log(action.payload)
            return{
                ...state,
                formEmail:{
                    ...state.formEmail,
                    role:action.payload,
                }
            }
        case SETSINGIN:
            console.log(action.payload)
            return{
                ...state,
                singInForm:{
                    ...state.singInForm,
                    email: action.payload.email,
                    password: action.payload.password
                }
            }
        
        default: return state
    }
}